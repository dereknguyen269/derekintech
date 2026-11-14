import { ArrowIcon, StarIcon } from "./icons.jsx";
import { t, isVi } from "../i18n.js";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/index.js";
export default function Header() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    };
    const query = matchMedia("(min-width: 701px)");
    const onResize = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    query.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      query.removeEventListener("change", onResize);
    };
  }, [menuOpen]);
  return (
    <>
      <a className="skip" href="#main">
        {t("nav.skip")}
      </a>
      <header>
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Derek Nguyen home">
            <span className="brand-mark" aria-hidden="true">
              d
              <span>
                <StarIcon />
              </span>
            </span>
            <span>
              derek<span className="brand-light">in.tech</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">{t("nav.work")}</a>
            <a href="#opensource">{t("nav.opensource")}</a>
            <a href="#about">{t("nav.about")}</a>
          </nav>

          <div className="nav-actions">
            <a
              className="language"
              href={isVi ? "/" : "/vi/"}
              hrefLang={isVi ? "en" : "vi"}
              lang={isVi ? "en" : "vi"}
              aria-label={t("nav.language")}
            >
              {isVi ? "VI" : "EN"} <span aria-hidden="true">⌄</span>
            </a>
            <button
              className="theme"
              aria-label={t(theme === "dark" ? "nav.light" : "nav.dark")}
              type="button"
              onClick={toggle}
              aria-pressed={theme === "dark"}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M20 15.6A8.6 8.6 0 0 1 8.4 4 8.6 8.6 0 1 0 20 15.6Z"></path>
              </svg>
            </button>
            <a className="nav-contact" href="#contact">
              <span>{t("nav.contact")}</span>{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <button
              className="menu-toggle"
              aria-label={t(menuOpen ? "nav.close" : "nav.open")}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              type="button"
              ref={menuRef}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            {t("nav.mobileWork")}
          </a>
          <a href="#opensource" onClick={() => setMenuOpen(false)}>
            {t("nav.mobileSource")}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("nav.mobileAbout")}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("nav.mobileContact")} <ArrowIcon />
          </a>
        </nav>
      </header>
    </>
  );
}
