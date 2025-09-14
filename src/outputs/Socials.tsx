import { useState } from "react";
import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Socials() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/ayushwasnothere",
      user: "ayushwasnothere",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-2 inline"
        >
          {" "}
          <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.51.11-3.15 0 0 1-.32 3.3 1.21a11.5 11.5 0 016 0c2.3-1.53 3.3-1.21 3.3-1.21.64 1.64.23 2.85.11 3.15.76.83 1.22 1.89 1.22 3.19 0 4.58-2.81 5.6-5.48 5.89.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />{" "}
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      link: "https://x.com/ayushwasnothere",
      user: "ayushwasnothere",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-2 inline"
        >
          {" "}
          <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.557l-5.146-6.647-5.89 6.647H1.5l7.73-8.727L1.5 2.25h6.75l4.657 6.092L18.244 2.25z" />{" "}
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/ayushwasnothere",
      user: "Ayush Shah",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-2 inline"
        >
          {" "}
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.447-2.137 2.941v5.665h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.372-1.852 3.606 0 4.271 2.373 4.271 5.456v6.287zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 01.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />{" "}
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://instagram.com/citxruzz",
      user: "citxruzz",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-2 inline"
        >
          {" "}
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.75a1 1 0 110 2 1 1 0 010-2z" />{" "}
        </svg>
      ),
    },
    {
      name: "Email",
      link: "mailto:ayushwasnothere@gmail.com",
      user: "ayushwasnothere@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-2 inline"
        >
          {" "}
          <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm18 0H4v.01L12 13l8-8.99V4zm0 2.41l-6.4 7.2a1 1 0 01-1.48 0L4 6.41V20h16V6.41z" />{" "}
        </svg>
      ),
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ color: colors.subtext }}>
      <p style={{ color: colors.fg }}>
        Social life? Never heard of it — I live inside my terminal 🖥️
      </p>
      <p className="mb-4" style={{ marginTop: "0.5rem", color: colors.fg }}>
        But hey, the internet counts, right? <br />
        Here’s where you can find me lurking online:
      </p>

      {socials.map(({ name, link, user, icon }, i) => (
        <div
          key={name}
          className="flex items-center"
          style={{ color: colors.highlight }}
        >
          <span className="w-44 flex items-center">
            {icon} {name}
          </span>
          <a
            href={link}
            target={link.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              color: hoveredIndex === i ? colors.subtext : colors.muted,
              textDecoration: hoveredIndex === i ? "underline" : "none",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {user}
          </a>
        </div>
      ))}

      <p style={{ marginTop: "0.75rem" }}>
        Feel free to reach out — I’m most active on{" "}
        <a
          style={{ color: colors.highlight, cursor: "pointer" }}
          href={socials.find((s) => s.name === "Instagram")?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        &{" "}
        <a
          style={{ color: colors.highlight, cursor: "pointer" }}
          href={socials.find((s) => s.name === "X (Twitter)")?.link}
          target="_blank"
        >
          X
        </a>
        . 🚀
      </p>
    </div>
  );
}
