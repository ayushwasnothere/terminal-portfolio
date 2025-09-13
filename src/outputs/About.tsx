import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

const About = () => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="mx-auto px-4 space-y-3 mt-5 font-mono text-sm">
      <div className="flex items-end space-x-3">
        <img
          src="https://pbs.twimg.com/profile_images/1792828735663849472/VvOliixt_400x400.jpg"
          alt="Twitter Pic"
          className="w-32 h-32 rounded-full border-2 border-accent"
        />
      </div>
      <div style={{ color: colors.fg, lineHeight: 1.4 }}>
        Hey there! Welcome to my terminal portfolio.
        <br />
        <br />
        I'm <span style={{ color: colors.highlight }}>Ayush Shah</span>, 18
        years old, currently pursuing{" "}
        <span style={{ color: colors.highlight }}>Computer Science</span>.<br />
        <br />I live and breathe the terminal — a true{" "}
        <span style={{ color: colors.highlight }}>Linux enthusiast</span> and a
        proud <span style={{ color: colors.highlight }}>nvim fan</span>. My
        setup is minimal, my workflow is fast, and my curiosity never stops.
        <br />
        <br />
        I'm passionate about{" "}
        <span style={{ color: colors.highlight }}>
          Fullstack Web Development
        </span>{" "}
        and absolutely love{" "}
        <span style={{ color: colors.highlight }}>building new projects</span> —
        always exploring and creating.
        <br />
        <br />
        Currently, I'm diving into the world of{" "}
        <span style={{ color: colors.highlight }}>Solana Web3</span> development
        — combining blockchain and creativity.
      </div>
    </div>
  );
};

export default About;
