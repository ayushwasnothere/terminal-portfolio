export type Project = {
  name: string;
  desc: string;
  repoLink?: string;
  stack?: string[];
  liveLink?: string;
};

const projects: Project[] = [
  {
    name: "Raven",
    desc: "Raven is a full-featured, real-time web chat application built with Next.js and TypeScript, combining WebSockets and REST APIs for speed, efficiency, and reliability.",
    repoLink: "https://github.com/ayushwasnothere/chat-app.git",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "ExpressJS",
      "Nodejs",
      "WebSockets",
      "Nextjs",
      "Turborepo",
      "Prisma",
      "PostgreSQL",
      "Redis",
    ],
    liveLink: "https://raven.citxruzz.tech",
  },
  {
    name: "TempMail",
    desc: "TempMail is a modern disposable email service powered by a fast, self-built SMTP server written in Rust. It enables users to generate temporary inboxes and receive auto-expiring emails in real time, built with Bun, Express, and PostgreSQL for performance and simplicity.",
    repoLink: "https://github.com/ayushwasnothere/temp-mail",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "ExpressJS",
      "Bun",
      "PostgreSQL",
      "Nginx",
      "rust-smtp",
    ],
    liveLink: "https://tmail.citxruzz.tech",
  },

  {
    name: "ts-chess",
    desc: "TS-Chess is a full-fledged chess implementation for the web, built with TypeScript and React",
    repoLink: "https://github.com/ayushwasnothere/ts-chess.git",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Nodejs",
      "WebSockets",
      "Chessjs",
      "Stockfishjs",
    ],
    liveLink: "https://chess.citxruzz.tech",
  },
  {
    name: "pwmgr",
    desc: "Pwmgr is a lightweight, privacy-first Bitwarden clone built as a Chrome extension. It lets you manage, save, and generate passwords with full security and local privacy.",
    repoLink: "https://github.com/ayushwasnothere/pwmgr.git",
    stack: ["React", "TypeScript", "TailwindCSS", "Nodejs"],
  },
  {
    name: "rust-smtp",
    desc: "A high-performance SMTP mail server built in Rust for speed, reliability, and security. It powers my TempMail service, handling incoming mail parsing and delivery with minimal latency and efficient resource usage.",
    repoLink: "https://github.com/ayushwasnothere/rust-smtp",
    stack: [
      "Rust",
      "Tokio",
      "SMTP Protocol",
      "MIME Parsing",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    name: "telegram-session",
    desc: "A Telegram bot to generate session strings for Telethon and Pyrogram, using an interactive chat interface with buttons. Useful for developers who want to authenticate Telegram accounts for bots or automation scripts.",
    repoLink: "https://github.com/ayushwasnothere/telegram-session.git",
    stack: ["Python", "python-telegram-bot", "Pyrogram", "Telethon"],
    liveLink: "https://t.me/citxruzz_SessionBot",
  },
  {
    name: "QuillWeave",
    desc: "QuillWeave is a modern, lightweight Medium clone — a blogging platform built for writers and readers. It lets you create, publish, and read blogs with a clean and responsive interface.",
    repoLink: "https://github.com/ayushwasnothere/medium.git",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Nodejs",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Cloudflare Workers",
    ],
    liveLink: "https://quillweave.citxruzz.tech",
  },
];

export default projects;
