// Language follows the indexable / and /vi/ HTML entry points.
export const LANG = (typeof window === "undefined"
  ? "/"
  : window.location.pathname
).startsWith("/vi")
  ? "vi"
  : "en";
export const isVi = LANG === "vi";
export const dictEn = {
  nav: {
    skip: "Skip to content",
    work: "Work",
    opensource: "Open source",
    about: "About",
    contact: "Let’s talk",
    mobileWork: "Work",
    mobileSource: "Open source",
    mobileAbout: "About",
    mobileContact: "Let’s talk",
    language: "Switch to Vietnamese",
    light: "Switch to light theme",
    dark: "Switch to dark theme",
    open: "Open navigation",
    close: "Close navigation",
  },
  hero: {
    eyebrow: "AVAILABLE FOR INTERESTING PROJECTS",
    titleOpening: "A little curiosity.",
    titleMiddle: "A lot of",
    titleAccent: "building.",
    introName: "Hey, I’m Derek.",
    intro:
      "A full-stack engineer turning complex problems into useful apps, developer tools, and AI workflows.",
    explore: "Explore my work",
    location: "Based in Ho Chi Minh City, Vietnam",
    locationNote: "Building for the web.",
    deskTitle: "THE BUILDER’S DESK",
    deskNote: "Less friction. More flow.",
    caption: "Engineer. Maker. Always learning.",
  },
  stack: {
    heading: "MY EVERYDAY TOOLKIT",
  },
  work: {
    eyebrow: "SELECTED WORK",
    title: "Built to be useful.",
    intro:
      "Small tools. Real problems. A few things I’ve designed, built, and put out into the world.",
    all: "All work",
    web: "Web apps",
    extension: "Extensions",
    tooloverDescription: "An everyday toolkit for developers.",
    tooloverTag: "Developer tools",
    marklensDescription: "Instant Markdown. Without leaving your flow.",
    sheetbackDescription: "Lightweight tools for spreadsheet people.",
    sheetbackTag: "Data & utilities",
    soundDescription: "A better sound. A little more focus.",
    soundTag: "Audio & focus",
    count: "projects",
  },
  opensource: {
    eyebrow: "IN THE OPEN",
    title: "Better when shared.",
    github: "Everything on GitHub",
    aiDescription:
      "A practical collection of AI coding tools, agents, and workflows.",
    practicesDescription:
      "Clean code, clear architecture, and patterns for the long run.",
    engineering: "ENGINEERING",
    powerDescription:
      "My development setup. A little less friction, every day.",
    freeDescription: "Useful free services and small helpers for developers.",
    resources: "RESOURCES",
  },
  about: {
    eyebrow: "THE PERSON BEHIND THE CODE",
    caption: "usually building something.",
    title: "Good systems.",
    titleAccent: "Thoughtful details.",
    intro:
      "I’m a software engineer in Ho Chi Minh City. I like the whole journey: untangling a problem, shaping the architecture, and polishing the interface people actually touch.",
    focus:
      "These days, I’m exploring AI agents, self-running systems, and tools that give developers a little more room to think. I build, learn in public, and share what works.",
    frontend: "FRONT TO BACK",
    backend: "UNDER THE HOOD",
    notes: "Notes from my building journey",
  },
  contact: {
    eyebrow: "SOMETHING IN MIND?",
    title: "Let’s make",
    titleAccent: "something good.",
    intro:
      "A project, a collaboration, or a conversation about what’s next. My inbox is open.",
    name: "Your name",
    email: "Email address",
    message: "What are you thinking?",
    send: "Send a message",
    namePlaceholder: "Alex Chen",
    emailPlaceholder: "alex@company.com",
    messagePlaceholder: "A little about your idea…",
    copy: "Copy email address",
    copied: "Copied to clipboard!",
    copyFallback: "Select and copy the email address above.",
    sending: "Sending…",
    thanks: "Message sent. Thanks for reaching out!",
    fail: "Couldn’t send. Please try again or email hello@derekin.tech.",
  },
  footer: {
    backToTop: "Back to top",
  },
};
export const dictVi = {
  nav: {
    skip: "Đến nội dung",
    work: "Sản phẩm",
    opensource: "Mã nguồn mở",
    about: "Giới thiệu",
    contact: "Liên hệ",
    mobileWork: "Sản phẩm",
    mobileSource: "Mã nguồn mở",
    mobileAbout: "Giới thiệu",
    mobileContact: "Liên hệ",
    language: "Switch to English",
    light: "Chuyển sang giao diện sáng",
    dark: "Chuyển sang giao diện tối",
    open: "Mở menu",
    close: "Đóng menu",
  },
  hero: {
    eyebrow: "SẴN SÀNG CHO DỰ ÁN THÚ VỊ",
    titleOpening: "Một chút tò mò.",
    titleMiddle: "Thật nhiều",
    titleAccent: "sáng tạo.",
    introName: "Chào, mình là Derek.",
    intro:
      "Kỹ sư full-stack, biến những bài toán phức tạp thành ứng dụng, công cụ cho dev và workflow AI hữu ích.",
    explore: "Khám phá sản phẩm",
    location: "Tại TP. Hồ Chí Minh, Việt Nam",
    locationNote: "Sáng tạo trên web.",
    deskTitle: "GÓC LÀM VIỆC",
    deskNote: "Bớt trở ngại. Thêm mượt mà.",
    caption: "Kỹ sư. Người sáng tạo. Luôn học hỏi.",
  },
  stack: {
    heading: "CÔNG CỤ MỖI NGÀY",
  },
  work: {
    eyebrow: "SẢN PHẨM NỔI BẬT",
    title: "Tạo ra để hữu ích.",
    intro:
      "Công cụ nhỏ, bài toán thật. Những sản phẩm mình thiết kế, phát triển và chia sẻ với mọi người.",
    all: "Tất cả",
    web: "Ứng dụng web",
    extension: "Tiện ích trình duyệt",
    tooloverDescription: "Bộ công cụ hằng ngày cho lập trình viên.",
    tooloverTag: "Công cụ dev",
    marklensDescription: "Xem Markdown tức thì, không ngắt mạch làm việc.",
    sheetbackDescription: "Công cụ gọn nhẹ cho người làm việc với bảng tính.",
    sheetbackTag: "Dữ liệu & tiện ích",
    soundDescription: "Âm thanh tốt hơn. Tập trung hơn một chút.",
    soundTag: "Âm thanh & tập trung",
    count: "sản phẩm",
  },
  opensource: {
    eyebrow: "CHIA SẺ CÙNG CỘNG ĐỒNG",
    title: "Chia sẻ để tốt hơn.",
    github: "Xem tất cả trên GitHub",
    aiDescription: "Tổng hợp công cụ code AI, agent và workflow thực tế.",
    practicesDescription: "Code sạch, kiến trúc rõ ràng và pattern bền vững.",
    engineering: "KỸ THUẬT",
    powerDescription: "Môi trường dev của mình. Bớt đi trở ngại mỗi ngày.",
    freeDescription:
      "Dịch vụ miễn phí và tiện ích nhỏ hữu ích cho lập trình viên.",
    resources: "TÀI NGUYÊN",
  },
  about: {
    eyebrow: "NGƯỜI ĐỨNG SAU NHỮNG DÒNG CODE",
    caption: "thường đang làm gì đó.",
    title: "Hệ thống vững vàng.",
    titleAccent: "Chi tiết tinh tế.",
    intro:
      "Mình là kỹ sư phần mềm tại TP. Hồ Chí Minh. Mình thích cả hành trình: gỡ rối bài toán, xây dựng kiến trúc và chăm chút giao diện mà mọi người trực tiếp sử dụng.",
    focus:
      "Gần đây, mình tìm hiểu AI agent, hệ thống tự vận hành và công cụ giúp lập trình viên có thêm không gian suy nghĩ. Mình xây dựng, học hỏi và chia sẻ những điều hữu ích.",
    frontend: "TỪ FRONTEND ĐẾN BACKEND",
    backend: "NỀN TẢNG HỆ THỐNG",
    notes: "Ghi chép trên hành trình sáng tạo",
  },
  contact: {
    eyebrow: "BẠN CÓ Ý TƯỞNG?",
    title: "Cùng làm điều",
    titleAccent: "thật hay.",
    intro:
      "Một dự án, cơ hội hợp tác hay trò chuyện về ý tưởng mới. Cứ nhắn cho mình nhé.",
    name: "Tên của bạn",
    email: "Địa chỉ email",
    message: "Bạn đang nghĩ đến điều gì?",
    send: "Gửi tin nhắn",
    namePlaceholder: "Nguyễn An",
    emailPlaceholder: "an@company.com",
    messagePlaceholder: "Chia sẻ một chút về ý tưởng của bạn…",
    copy: "Sao chép địa chỉ email",
    copied: "Đã sao chép!",
    copyFallback: "Hãy sao chép địa chỉ email ở trên.",
    sending: "Đang gửi…",
    thanks: "Đã gửi. Cảm ơn bạn đã liên hệ!",
    fail: "Chưa gửi được. Vui lòng thử lại hoặc gửi email đến hello@derekin.tech.",
  },
  footer: {
    backToTop: "Về đầu trang",
  },
};
export const t = (key) =>
  key
    .split(".")
    .reduce((value, part) => value?.[part], isVi ? dictVi : dictEn) ?? key;
