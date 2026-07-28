import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

const About = () => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="mx-auto px-4 space-y-3 mt-5 font-mono text-sm">
      <div className="flex flex-wrap items-end space-x-4">
        <img
          src="/pic.jpg"
          alt="Ayush Shah"
          className="w-32 h-32 rounded-full border-2"
          style={{ borderColor: colors.highlight }}
        />
        <div className="flex-1">
          Hey there! Welcome to my terminal portfolio.
          <br />
          <br />
          I'm <span style={{ color: colors.highlight }}>Ayush Shah</span>, a software engineer based in{" "}
          <span style={{ color: colors.highlight }}>Hyderabad, India</span>.
          <br />
        </div>
      </div>
      <div style={{ color: colors.fg, lineHeight: 1.5 }}>
        <br />
        Currently building at <span style={{ color: colors.highlight }}>Roboparadigm</span>, where I engineer deep-tech software, robotics tools, and intelligent systems.
        <br />
        <br />I live and breathe in the terminal — a passionate{" "}
        <span style={{ color: colors.highlight }}>Linux enthusiast</span> and a
        proud <span style={{ color: colors.highlight }}>Neovim user</span>. My
        setup is keyboard-driven, my workflow is fast, and my curiosity is relentless.
        <br />
        <br />
        I specialize in{" "}
        <span style={{ color: colors.highlight }}>
          AI Agents, High-Performance Backends (Rust, Go, C++), Robotics (ROS 2), and Fullstack Systems
        </span>{" "}
        — always building tools that solve real problems.
        <br />
        <br />
        Read my technical notes & blog at{" "}
        <a
          href="https://citxruzz.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: colors.highlight, textDecoration: "underline" }}
        >
          citxruzz.tech
        </a>{" "}
        or type <span style={{ color: colors.highlight }}>projects</span> to explore what I've built!
      </div>
    </div>
  );
};

export default About;

