import { useState } from 'react';
import { useTheme } from '../hooks/index.js';
import { IconMoon, IconSun } from './icons.jsx';
import { t, isVi } from '../i18n.js';

export default function Header() {
  const { toggle, ariaLabel } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const langLink = isVi ? { href: '/', label: t('switchLang') } : { href: '/vi/', label: t('switchLang') };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <a href={isVi ? '/vi/' : '/'} className="brand">
          <span className="brand-dot"></span>
          derekin.tech
        </a>
        <nav aria-label={t('nav.aria')}>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={closeMenu}>{t('nav.about')}</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>{t('nav.projects')}</a></li>
            <li><a href="#apps" className="nav-link" onClick={closeMenu}>{t('nav.apps')}</a></li>
            <li><a href="#skills" className="nav-link" onClick={closeMenu}>{t('nav.stack')}</a></li>
            <li><a href="#contact" className="btn btn-secondary btn-sm" onClick={closeMenu}>{t('nav.contact')}</a></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href={langLink.href} className="lang-switch" lang={isVi ? 'en' : 'vi'} hrefLang={isVi ? 'en' : 'vi'}>
            {langLink.label}
          </a>
          <button type="button" className="theme-toggle" onClick={toggle} aria-label={t('theme.toggle')} title={t('theme.toggle')}>
            <IconMoon />
            <IconSun />
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-navigation${menuOpen ? ' is-open' : ''}`} aria-label={t('nav.aria')}>
        <div className="container mobile-navigation-inner">
          <a href="#about" className="nav-link" onClick={closeMenu}>{t('nav.about')}</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>{t('nav.projects')}</a>
          <a href="#apps" className="nav-link" onClick={closeMenu}>{t('nav.apps')}</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>{t('nav.stack')}</a>
          <a href="#contact" className="btn btn-secondary" onClick={closeMenu}>{t('nav.contact')}</a>
        </div>
      </nav>
    </header>
  );
}
