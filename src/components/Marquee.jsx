import { marqueeItems } from './data.jsx';
import { t, isVi } from '../i18n.js';

function MarqueeItem({ item }) {
  const level = isVi ? item.levelVi || item.level : item.level;
  return (
    <span className="marquee-item" tabIndex="0" role="button" aria-label={`${item.label}: ${item.pct}% proficiency, ${item.level}`} style={{ '--proficiency': item.pct + '%' }}>
      {item.icon}
      {item.label}
      <div className="marquee-tooltip" role="tooltip">
        <div className="marquee-tooltip-name">{item.label} · {item.pct}%</div>
        <div className="marquee-tooltip-bar"><div className="marquee-tooltip-fill"></div></div>
        <div className="marquee-tooltip-level">{level}</div>
      </div>
    </span>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-section" aria-label="Technology stack">
      <div className="container">
        <p className="marquee-heading">{t('builtWith')}</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <MarqueeItem key={'set1-' + item.key} item={item} />
            ))}
            {/* Set 2 (duplicate for seamless loop, exactly like the original) */}
            {marqueeItems.map((item, i) => (
              <MarqueeItem key={'set2-' + item.key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}