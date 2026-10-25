import { useReveal } from '../hooks/index.js';

/**
 * Renders an element that fades/slides in on scroll, preserving the original
 * `.reveal` + variant + `.is-visible` class contract from index.css.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'reveal-slide-up',
  stagger = '',
  className = '',
  threshold,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal(threshold === undefined ? {} : { threshold });
  const classNames = ['reveal', variant, stagger, visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag ref={ref} className={classNames} {...rest}>
      {children}
    </Tag>
  );
}
