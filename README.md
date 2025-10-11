# 🖥️ Terminal Portfolio

Welcome to my **terminal‑style portfolio** — a nostalgic, interactive experience where visitors navigate my work through commands just like a real CLI.

---

## 📷 Screenshot

**`./public/screenshot.png`**

---

## ✨ Features

- Type commands like `about`, `projects`, `contact`, `help` to explore content
- Animated typing, prompt & cursor effects
- Clear command to reset view
- Responsive design for desktops and mobile
- Custom theming and styling independent of typical websites

---

## 🧩 Tech Stack

- React + TypeScript
- Vite (bundler & dev server)
- TailwindCSS
- Command parsing & terminal UI logic

---

## 📁 Project Structure

```
.
├── public/
│   └── screenshot.png           # Example screenshot for README
├── src/
│   ├── components/              # UI components & command display
│   ├── commands/                # Individual command implementations
│   ├── styles/                  # Styling & themes
│   ├── App.tsx                  # Main app & routing logic
│   └── main.tsx                 # Entry point
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/ayushwasnothere/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run development server**

   ```bash
   bun run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` (or the port shown) to see it live.

---

## 💬 Commands & Usage

Some example commands you might support:

| Command    | Description                    |
| ---------- | ------------------------------ |
| `about`    | Displays information about you |
| `projects` | Lists your projects with links |
| `contact`  | Shows how to reach you         |
| `help`     | Lists all available commands   |
| `clear`    | Clears the terminal display    |

---

## 📦 Build & Deploy

To build a production version:

```bash
bun run build
```

Serve the `dist` directory using any static host or server (e.g. Nginx, Vercel, Netlify).

---

## 🧠 Next Steps & Ideas

- Add color themes or seasonal skins
- Support command autocomplete (Tab)
- History navigation (`↑` / `↓`)
- Animations, delays, and “typing” effects
- Maybe integrate a blog, resume, or GitHub feed

---

## 📄 License

MIT © 2025 [Ayush]
