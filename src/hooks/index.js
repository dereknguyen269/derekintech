import { useEffect, useRef, useState, useCallback } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll reveal via IntersectionObserver.
 * Returns [ref, visible] — add `is-visible` when the element enters the viewport.
 */
export function useReveal({ threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReduced());

  useEffect(() => {
    if (prefersReduced()) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

/** rAF-throttled scroll handler (shared ticking pattern from the original page). */
export function useRafScroll(handler) {
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handler();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [handler]);
}

/** Parallax: translateY = scrollY * rate, respecting reduced motion. */
export function useParallax(rate = 0.06) {
  const ref = useRef(null);
  const handler = useCallback(() => {
    if (prefersReduced() || !ref.current) return;
    ref.current.style.transform = 'translateY(' + window.scrollY * rate + 'px)';
  }, [rate]);
  useRafScroll(handler);
  return ref;
}

/** Theme: 'dark' | 'light', persisted to localStorage, honors prefers-color-scheme. */
export function useTheme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
    const applyTheme = (t) => {
      document.documentElement.setAttribute('data-theme', t);
      setTheme(t);
      localStorage.setItem('theme', t);
    };
    const stored = localStorage.getItem('theme');
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
      setTheme(stored);
    } else {
      applyTheme(prefersLight.matches ? 'light' : 'dark');
    }
    const onChange = function () {
      if (!localStorage.getItem('theme')) {
        applyTheme(this.matches ? 'light' : 'dark');
      }
    };
    prefersLight.addEventListener('change', onChange);
    return () => prefersLight.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return {
    theme,
    toggle,
    ariaLabel: theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme',
  };
}

const formatCount = (num) => {
  if (typeof num !== 'number') return '—';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(num);
};

/** Live GitHub star count for one repo, with sessionStorage cache + cubit ease-out count-up. */
export function useGithubStars(repo) {
  const [count, setCount] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const prefRef = useRef(null);
  if (prefRef.current === null) prefRef.current = prefersReduced();

  useEffect(() => {
    if (!repo) return;
    let cancelled = false;

    const cacheKey = 'gh_stars:' + repo;
    let cached = null;
    try {
      const item = sessionStorage.getItem(cacheKey);
      if (item) {
        const parsed = JSON.parse(item);
        if (Date.now() - parsed.ts < 30 * 60 * 1000) cached = parsed.val;
      }
    } catch (err) {}

    if (cached !== null) {
      setCount(cached);
      setLoaded(true);
      return;
    }

    const animate = (target) => {
      if (prefRef.current || target === 0) {
        setCount(target);
        setLoaded(true);
        return;
      }
      const startTime = performance.now();
      const duration = 700;
      const frame = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(ease * target);
        if (cancelled) return;
        setCount(current);
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setCount(target);
          setLoaded(true);
        }
      };
      requestAnimationFrame(frame);
    };

    fetch('https://api.github.com/repos/' + repo, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error('API error ' + res.status);
        return res.json();
      })
      .then((data) => {
        if (cancelled || typeof data.stargazers_count !== 'number') return;
        try {
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({ val: data.stargazers_count, ts: Date.now() })
          );
        } catch (err) {}
        animate(data.stargazers_count);
      })
      .catch(() => {
        // Keep the subtle '—' on error / rate-limit without breaking UI
      });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  return {
    count: count === null ? '—' : formatCount(count),
    loaded,
  };
}
