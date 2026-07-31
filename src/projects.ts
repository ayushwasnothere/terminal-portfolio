export type Project = {
  name: string;
  desc: string;
  repoLink?: string;
  stack?: string[];
  liveLink?: string;
};

const projects: Project[] = [
  {
    name: "Forge",
    desc: "Forge is an AI coding agent that lives in your terminal — assisting with autonomous code generation, multi-file refactoring, execution of shell commands, and interactive pair programming directly from CLI.",
    repoLink: "https://github.com/ayushwasnothere/forge",
    stack: ["TypeScript", "Nodejs", "AI Agents", "LLMs", "CLI", "TailwindCSS"],
    liveLink: "https://forge.cytrus.me",
  },
  {
    name: "7DOF MTC Arm Control",
    desc: "A ROS 2 MoveIt Task Constructor (MTC) package for 7-degree-of-freedom robotic arms, featuring complex motion planning, collision avoidance, and automated pick-and-place task pipelines.",
    repoLink: "https://github.com/ayushwasnothere/7dof_mtc",
    stack: ["C++", "ROS 2", "MoveIt", "Robotics", "Docker"],
  },
  {
    name: "Cloud-It",
    desc: "A TypeScript cloud deployment utility and automation framework for managing cloud infrastructure workloads and serverless deployments.",
    repoLink: "https://github.com/ayushwasnothere/cloud-it",
    stack: ["TypeScript", "Nodejs", "AWS", "Docker", "DevOps"],
  },
  {
    name: "Raven",
    desc: "Raven is a full-featured, real-time web chat application combining WebSockets and REST APIs for speed, efficiency, and rock-solid reliability.",
    repoLink: "https://github.com/ayushwasnothere/chat-app",
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
    liveLink: "https://raven.cytrus.me",
  },
  {
    name: "rust-smtp",
    desc: "A high-performance asynchronous SMTP mail server built in Rust with Tokio for speed, reliability, and low resource overhead. Handles incoming MIME mail parsing and storage with PostgreSQL.",
    repoLink: "https://github.com/ayushwasnothere/rust-smtp",
    stack: ["Rust", "Tokio", "PostgreSQL", "Docker"],
  },
  {
    name: "TempMail",
    desc: "TempMail is a modern disposable email service powered by a fast, custom SMTP server written in Rust. Generate temporary inboxes and receive auto-expiring emails in real time.",
    repoLink: "https://github.com/ayushwasnothere/temp-mail",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "ExpressJS",
      "Bun",
      "PostgreSQL",
      "Nginx",
      "Rust",
    ],
    liveLink: "https://tmail.cytrus.me",
  },
  {
    name: "shrty",
    desc: "shrty is a high-performance link shortening service built for speed and simplicity, with a robust Go backend and responsive React frontend secured with Cloudflare Turnstile.",
    repoLink: "https://github.com/ayushwasnothere/shrty",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Go",
      "PostgreSQL",
      "Cloudflare Turnstile",
    ],
    liveLink: "https://shrty.cytrus.me",
  },
  {
    name: "ts-chess",
    desc: "TS-Chess is a full-fledged chess implementation for the web, built with TypeScript and React with multiplayer WebSocket support and Stockfish engine integration.",
    repoLink: "https://github.com/ayushwasnothere/ts-chess",
    stack: ["React", "TypeScript", "TailwindCSS", "Nodejs", "WebSockets"],
    liveLink: "https://chess.cytrus.me",
  },
  {
    name: "pwmgr",
    desc: "Pwmgr is a lightweight, privacy-first Bitwarden clone built as a Chrome extension for generating and managing secure credentials locally.",
    repoLink: "https://github.com/ayushwasnothere/pwmgr",
    stack: ["React", "TypeScript", "TailwindCSS", "Nodejs"],
  },
];

export default projects;
