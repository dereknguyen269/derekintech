import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import { useReveal, useParallax } from '../hooks/index.js';
import { terminalLines } from './data.jsx';
import { IconArrowRight } from './icons.jsx';
import { t } from '../i18n.js';

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Progressive terminal-line typing once the card becomes visible. */
function useTypedLines(enabled, total) {
  const [typed, setTyped] = useState(prefersReduced() ? Number.MAX_SAFE_INTEGER : 0);

  useEffect(() => {
    if (!enabled || prefersReduced()) return;
    const timers = [];
    total &&
      Array.from({ length: total }, (_, i) => i).forEach((i) => {
        timers.push(setTimeout(() => setTyped(i + 1), 400 + i * 120));
      });
    return () => timers.forEach(clearTimeout);
  }, [enabled, total]);

  return typed;
}

function Terminal() {
  const [cardRef, cardVisible] = useReveal({ threshold: 0.3 });
  const parallaxRef = useParallax(0.06);
  const typed = useTypedLines(cardVisible, terminalLines.length);

  const setRefs = (el) => {
    cardRef.current = el;
    parallaxRef.current = el;
  };

  return (
    <aside
      ref={setRefs}
      className={
        'terminal-card reveal reveal-slide-left stagger-3 hero-parallax' +
        (cardVisible ? ' is-visible' : '')
      }
      aria-label="System status console"
    >
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
        </div>
        <span className="terminal-title">derek@derekin.tech ~</span>
      </div>
      <div className="terminal-body">
        {terminalLines.map((line, i) => (
          <p key={i} className={'terminal-line' + (typed > i ? ' is-typed' : '')}>
            {line.parts.map((part, j) => (
              <span key={j} className={part.cls}>
                {part.text}
              </span>
            ))}
          </p>
        ))}
      </div>
    </aside>
  );
}

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <div className="container hero-grid">
        <div>
          <Reveal as="div" variant="reveal-fade" stagger="stagger-1">
            <div className="hero-author-row">
              <img
                className="hero-avatar"
                src="https://avatars.githubusercontent.com/u/9989471?v=4"
                alt="Derek Nguyen avatar"
                width="48"
                height="48"
              />
              <div className="hero-author-meta">
                <span className="hero-author-name">{t('hero.name')}</span>
                <span className="hero-author-handle">@dereknguyen269 · Ho Chi Minh City</span>
              </div>
            </div>
            <div className="eyebrow">
              <span className="status-pulse"></span>
              {t('hero.eyebrow')}
            </div>
          </Reveal>
          <Reveal as="h1" variant="reveal-slide-up" stagger="stagger-2">
            {t('hero.greeting')} <span className="gradient-text">{t('hero.greetingAccent')}</span>.
          </Reveal>
          <Reveal as="p" className="hero-desc" variant="reveal-slide-up" stagger="stagger-3">
            {t('hero.desc')}
          </Reveal>
          <Reveal as="div" className="hero-actions" variant="reveal-slide-up" stagger="stagger-4">
            <a href="#projects" className="btn btn-primary">
              {t('hero.viewProjects')}
              <IconArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">{t('hero.contactMe')}</a>
          </Reveal>
        </div>

        <Terminal />
      </div>
    </section>
  );
}