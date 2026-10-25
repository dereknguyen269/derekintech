// Language is driven by the URL path: / = English, /vi/ = Vietnamese.
// Two real HTML entries means each language gets its own indexable head
// (title, description, OG, lang attribute) instead of a client-side swap.
export const LANG = (typeof window === 'undefined' ? '/' : window.location.pathname).startsWith('/vi') ? 'vi' : 'en';
export const isVi = LANG === 'vi';

/** English copy — natural, conversational tone */
export const dictEn = {
  nav: {
    about: 'About',
    projects: 'Open Source',
    apps: 'Apps',
    stack: 'Stack',
    contact: 'Get in touch',
    aria: 'Main navigation',
  },
  theme: { toggle: 'Switch theme' },
  stack: { aria: 'Technology stack' },
  hero: {
    eyebrow: 'Available for new projects',
    greeting: 'Hi, I’m Derek Nguyen.',
    name: 'Derek Nguyen',
    greetingAccent: 'I build developer tools & AI workflows',
    desc: 'Software engineer in Ho Chi Minh City. I make AI-assisted engineering tools, write the best-practice guides other devs actually read, and set up dev environments that stay out of the way.',
    viewProjects: 'View projects',
    contactMe: 'Contact me',
    terminalAria: 'System status console',
  },
  about: {
    eyebrow: 'Background',
    title: 'About & Technical Stack',
    subtitle: 'Solid systems on the inside, smooth interfaces on the outside — no reason to trade one for the other.',
    p1: 'I care about code that reads cleanly, boundaries in the right places, and things that stay fast under load. Having worked the whole lifecycle — schema to shipped UI — what I enjoy most is taking a messy problem and turning it into something people can use without a manual.',
    p2: 'These days I spend most of my time on agents, self-running systems, and frontend primitives that respond the instant you touch them.',
    skills: 'Technical Stack',
  },
  projects: {
    eyebrow: 'Selected Work',
    title: 'Featured Projects',
    subtitle: 'Real open-source repositories and dev tooling from @dereknguyen269.',
  },
  apps: {
    eyebrow: 'Apps & Tools',
    title: 'Things I’ve Built',
    subtitle: 'Web apps, browser extensions and dev tools I ship and maintain myself.',
  },
  contact: {
    eyebrow: 'Connect',
    title: 'Let’s build something good',
    desc: 'A project worth building, a collab idea, or just want to argue about AI workflows? Write to me directly.',
    nameLabel: 'Your name',
    emailLabel: 'Your email',
    messageLabel: 'Your message...',
    send: 'Send message',
    sending: 'Sending...',
    thanks: 'Thanks — got your message. I’ll reply soon.',
    fail: 'That didn’t send. Email me directly at hello@derekin.tech.',
  },
  footer: {
    rights: 'All rights reserved.',
    designed: 'Designed with Agentic theme',
  },
  builtWith: 'Built with',
  viewOnGitHub: 'GitHub repo',
  switchLang: 'Tiếng Việt',
};

/** Vietnamese copy — written the way a Vietnamese dev actually talks */
export const dictVi = {
  nav: {
    about: 'Giới thiệu',
    projects: 'Mã nguồn mở',
    apps: 'Ứng dụng',
    stack: 'Công nghệ',
    contact: 'Kết nối',
    aria: 'Điều hướng chính',
  },
  theme: { toggle: 'Đổi giao diện' },
  stack: { aria: 'Công nghệ đang dùng' },
  hero: {
    eyebrow: 'Đang nhận dự án mới',
    greeting: 'Chào, mình là Derek Nguyễn.',
    name: 'Derek Nguyễn',
    greetingAccent: 'Mình làm công cụ cho dev và workflow AI',
    desc: 'Kỹ sư phần mềm ở Sài Gòn. Mình làm công cụ hỗ trợ kỹ thuật có AI, viết mấy tài liệu best practice mà dev thật sự đọc, và dựng môi trường làm việc gọn tới mức không phải nghĩ tới nó.',
    viewProjects: 'Xem dự án',
    contactMe: 'Liên hệ',
    terminalAria: 'Bảng trạng thái hệ thống',
  },
  about: {
    eyebrow: 'Nền tảng',
    title: 'Giới thiệu & công nghệ',
    subtitle: 'Hệ thống cho chắc bên trong, giao diện mượt bên ngoài — không có lý do gì phải đánh đổi bên này để được bên kia.',
    p1: 'Mình thích code đọc vô là hiểu, tách phần cho đúng chỗ, và mấy thứ vẫn chạy nhanh khi đông người dùng. Làm đủ từ khâu thiết kế dữ liệu tới lúc ra giao diện, nên mình khoái nhất là lấy một mớ rối rắm rồi biến nó thành thứ người ta dùng được mà không cần đọc hướng dẫn.',
    p2: 'Dạo này mình dành phần lớn thời gian cho agent, mấy hệ thống tự chạy, và frontend mới — kiểu bấm là thấy phản hồi ngay.',
    skills: 'Công nghệ dùng',
  },
  projects: {
    eyebrow: 'Dự án tiêu biểu',
    title: 'Dự án nổi bật',
    subtitle: 'Repo mã nguồn mở và công cụ dev thật của @dereknguyen269.',
  },
  apps: {
    eyebrow: 'Ứng dụng & công cụ',
    title: 'Mấy thứ mình đã làm',
    subtitle: 'Web app, extension trình duyệt và công cụ dev do mình tự làm, tự maintain.',
  },
  contact: {
    eyebrow: 'Kết nối',
    title: 'Mình làm chung cái gì đó',
    desc: 'Có dự án đáng làm, muốn hợp tác, hay chỉ muốn cãi nhau về AI workflow? Cứ nhắn thẳng cho mình.',
    nameLabel: 'Tên của bạn',
    emailLabel: 'Email của bạn',
    messageLabel: 'Nội dung...',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi...',
    thanks: 'Cảm ơn bạn, mình nhận được rồi. Sẽ trả lời sớm.',
    fail: 'Gửi không được. Bạn email trực tiếp cho mình: hello@derekin.tech.',
  },
  footer: {
    rights: 'Bảo lưu mọi quyền.',
    designed: 'Thiết kế theo theme Agentic',
  },
  builtWith: 'Đang dùng',
  viewOnGitHub: 'Repo GitHub',
  switchLang: 'English',
};

/** Translate a dot-path key: t('hero.greeting') */
export const t = (key) => {
  const dict = isVi ? dictVi : dictEn;
  let val = dict;
  for (const part of key.split('.')) val = val?.[part];
  return val ?? key;
};

/** Pick the localized field off a data object: pick(item, 'desc') */
export const pick = (obj, field) => (isVi ? obj[field + 'Vi'] ?? obj[field] : obj[field]);