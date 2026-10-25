import { useTheme } from '../hooks/index.js';
import { IconMoon, IconSun } from './icons.jsx';
import { t, isVi } from '../i18n.js';

export default function Header() {
  const { toggle, ariaLabel } = useTheme();
  const langLink = isVi ? { href: '/', label: t('switchLang') } : { href: '/vi/', label: t('switchLang') };

  return (
    <header className="site-header">
      <div className="container nav-row">
        <a href={isVi ? '/vi/' : '/'} className="brand">
          <span className="brand-dot"></span>
          derekin.tech
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">{t('nav.about')}</a></li>
            <li><a href="#projects" className="nav-link">{t('nav.projects')}</a></li>
            <li><a href="#apps" className="nav-link">{t('nav.apps')}</a></li>
            <li><a href="#skills" className="nav-link">{t('nav.stack')}</a></li>
            <li><a href="#contact" className="btn btn-secondary btn-sm">{t('nav.contact')}</a></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href={langLink.href} className="lang-switch" lang={isVi ? 'en' : 'vi'} hreflang={isVi ? 'en' : 'vi'}>
            {langLink.label}
          </a>
          <button type="button" className="theme-toggle" onClick={toggle} aria-label={ariaLabel} title="Switch theme">
            <IconMoon />
            <IconSun />
          </button>
        </div>
      </div>
    </header>
  );
}