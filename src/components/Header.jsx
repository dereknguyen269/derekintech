import { useTheme } from '../hooks/index.js';
import { IconMoon, IconSun } from './icons.jsx';

export default function Header() {
  const { toggle, ariaLabel } = useTheme();
  return (
    <header className="site-header">
      <div className="container nav-row">
        <a href="#top" className="brand">
          <span className="brand-dot"></span>
          derekin.tech
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Open Source</a></li>
            <li><a href="#apps" className="nav-link">Apps</a></li>
            <li><a href="#skills" className="nav-link">Stack</a></li>
            <li><a href="#contact" className="btn btn-secondary btn-sm">Get in touch</a></li>
            <li>
              <button type="button" className="theme-toggle" onClick={toggle} aria-label={ariaLabel} title="Switch theme">
                <IconMoon />
                <IconSun />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
