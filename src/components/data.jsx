import {
  MarqueeIcons,
  IconGitHub,
  IconMail,
  IconX,
  IconSubstack,
  IconTikTok,
} from './icons.jsx';

/* ===== Tech stack marquee (order matches the original Set 1) ===== */
export const stack = [
  { key: 'typescript', label: 'TypeScript', pct: 95, level: 'Advanced / Production' },
  { key: 'react', label: 'React', pct: 92, level: 'Advanced / Core Stack' },
  { key: 'nextjs', label: 'Next.js', pct: 90, level: 'Advanced / App Router' },
  { key: 'nodejs', label: 'Node.js', pct: 90, level: 'Advanced / Microservices' },
  { key: 'go', label: 'Go', pct: 82, level: 'Proficient / CLIs & Systems' },
  { key: 'python', label: 'Python', pct: 86, level: 'Proficient / AI & Automation' },
  { key: 'postgresql', label: 'PostgreSQL', pct: 88, level: 'Advanced / Schema Design' },
  { key: 'redis', label: 'Redis', pct: 85, level: 'Proficient / Caching & PubSub' },
  { key: 'docker', label: 'Docker', pct: 84, level: 'Proficient / Containerization' },
  { key: 'clickhouse', label: 'ClickHouse', pct: 78, level: 'Intermediate / Telemetry' },
  { key: 'graphql', label: 'GraphQL', pct: 85, level: 'Proficient / Federation' },
  { key: 'aws', label: 'AWS', pct: 80, level: 'Proficient / Cloud Infra' },
];

export const marqueeItems = stack.map((s) => ({
  ...s,
  icon: MarqueeIcons[s.key],
  ariaLabel: `${s.label}: ${s.pct}% proficiency, ${s.level.split(' /')[0]}`,
}));

/* ===== Skills panel groups ===== */
export const skills = [
  {
    label: 'Languages',
    tags: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL'],
  },
  {
    label: 'Frontend & Design',
    tags: ['React / Next.js', 'Tailwind CSS', 'HTML5 / Web APIs', 'Design Systems', 'UI/UX'],
  },
  {
    label: 'Backend & Infrastructure',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Cloud Architecture'],
  },
];

/* ===== Open-source projects ===== */
export const openSource = [
  {
    title: 'AI-Powered-Coding-Tools',
    tag: 'Open Source',
    repo: 'dereknguyen269/AI-Powered-Coding-Tools',
    url: 'https://github.com/dereknguyen269/AI-Powered-Coding-Tools',
    desc: 'Curated collection and practical workflows for modern AI coding assistants, autonomous agents, and LLM-driven engineering toolchains.',
    stack: ['AI / LLM', 'Workflows', 'Developer Tools'],
  },
  {
    title: 'programing-best-practices',
    tag: 'Engineering Guide',
    repo: 'dereknguyen269/programing-best-practices',
    url: 'https://github.com/dereknguyen269/programing-best-practices',
    desc: 'Battle-tested software architecture principles, clean code conventions, and maintainable design patterns for production systems.',
    stack: ['Architecture', 'Clean Code', 'Best Practices'],
  },
  {
    title: 'derek-power',
    tag: 'Dev Environment',
    repo: 'dereknguyen269/derek-power',
    url: 'https://github.com/dereknguyen269/derek-power',
    desc: 'Personal development configuration suite, dotfiles, shell tooling, and automated workflows designed for maximum daily velocity.',
    stack: ['Dotfiles', 'Shell', 'Productivity'],
  },
  {
    title: 'free-services',
    tag: 'Developer Tool',
    repo: 'dereknguyen269/free-services',
    url: 'https://github.com/dereknguyen269/free-services',
    desc: 'Collection of useful free services and utilities — domain tools, converters, and quick helpers for developers.',
    stack: ['Tools', 'Utilities', 'Free'],
  },
];

/* ===== Apps & side projects ===== */
export const apps = [
  {
    title: 'thetoolover.com',
    tag: 'Web App',
    thumb: 'assets/thetoolover.png',
    thumbAlt: 'thetoolover.com - Developer Toolkit Interface',
    url: 'https://thetoolover.com',
    linkLabel: 'Visit site',
    desc: 'A curated toolkit hub for developers — practical utilities, generators, and everyday productivity tools built to save time.',
    stack: ['Web', 'Utilities', 'Productivity'],
  },
  {
    title: 'sheetback.top',
    tag: 'Web App',
    thumb: 'assets/sheetback.png',
    thumbAlt: 'sheetback.top - Spreadsheet Utilities Interface',
    url: 'https://sheetback.top',
    linkLabel: 'Visit site',
    desc: 'Lightweight spreadsheet utilities and data helpers — fast, private, and browser-native workflows for working with tabular data.',
    stack: ['Spreadsheets', 'Data', 'Browser'],
  },
  {
    title: 'MarkLens — Instant Markdown Renderer & Page Converter',
    tag: 'Chrome Extension',
    thumb: 'assets/marklens.png',
    thumbAlt: 'MarkLens - Instant Markdown Renderer',
    url: 'https://chromewebstore.google.com/detail/fphbhjcdilnnjgefioifeecgdpgapmmp',
    linkLabel: 'Chrome Web Store',
    desc: 'Select Markdown on any page for an instant floating preview, or convert web HTML to clean Markdown. Features a split-view editor with Vim mode, 22 themes, and PDF/HTML export — 100% offline.',
    stack: ['Markdown', 'HTML Converter', 'Side Panel', 'Offline First'],
  },
  {
    title: 'Sound Pilot: Boost & Focus',
    tag: 'Chrome Extension',
    thumb: 'assets/sound-pilot.svg',
    thumbAlt: 'Sound Pilot: Boost & Focus',
    url: 'https://chromewebstore.google.com/detail/gedkelfdgmnhjgkjhkbcndjlpoafpkcp',
    linkLabel: 'Chrome Web Store',
    desc: 'Boost tab audio up to 20x with output meter and live visualizer. Includes Focus mode, YouTube declutter, Pomodoro timer, per-site memory, and 14 themes — stored locally with zero tracking.',
    stack: ['Audio Boost', 'Focus Mode', 'Pomodoro', 'Privacy'],
  },
];

/* ===== Terminal (hero right) — lines exactly as the original profile.json ===== */
export const terminalLines = [
  { parts: [{ cls: 't-comment', text: '// profile.json' }] },
  { parts: [{ cls: 't-key', text: '"name"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"Derek Nguyen"' }, { cls: 't-val', text: ',' }] },
  { parts: [{ cls: 't-key', text: '"location"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"Ho Chi Minh City, Vietnam"' }, { cls: 't-val', text: ',' }] },
  { parts: [{ cls: 't-key', text: '"github"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"@dereknguyen269"' }, { cls: 't-val', text: ',' }] },
  { parts: [{ cls: 't-key', text: '"x"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"@derek_in_tech"' }, { cls: 't-val', text: ',' }] },
  { parts: [{ cls: 't-key', text: '"substack"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"helloderek.substack.com"' }, { cls: 't-val', text: ',' }] },
  { parts: [{ cls: 't-key', text: '"tiktok"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"@ezbackend"' }, { cls: 't-val', text: ',' }] },
  { parts: [{ cls: 't-key', text: '"domain"' }, { cls: 't-str', text: ': ' }, { cls: 't-str', text: '"derekin.tech"' }] },
];

/* ===== Contact links ===== */
export const contactLinks = [
  { href: 'mailto:hello@derekin.tech', label: 'Email Derek', title: 'hello@derekin.tech', icon: IconMail, primary: true },
  { href: 'https://github.com/dereknguyen269', label: 'GitHub', title: 'GitHub', icon: IconGitHub },
  { href: 'https://x.com/derek_in_tech', label: 'X (Twitter)', title: 'X', icon: IconX },
  { href: 'https://helloderek.substack.com', label: 'Substack', title: 'Substack', icon: IconSubstack },
  { href: 'https://www.tiktok.com/@ezbackend', label: 'TikTok', title: 'TikTok', icon: IconTikTok },
];
