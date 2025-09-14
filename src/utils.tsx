import type { JSX } from "react";
import About from "./outputs/About";
import Font from "./outputs/Font";
import Goals from "./outputs/Goals";
import Help from "./outputs/Help";
import NotFound from "./outputs/NotFound";
import Projects from "./outputs/Projects";
import Skills from "./outputs/Skills";
import Socials from "./outputs/Socials";
import Theme from "./outputs/Theme";

interface CommandType {
  command: string;
  output: string | JSX.Element;
  failed?: boolean;
}

export default function commandParser(
  command: string,
  setCommands: React.Dispatch<React.SetStateAction<CommandType[]>>,
) {
  command = command.toLowerCase().trim();
  const command_split = command.split(" ");
  switch (command_split[0]) {
    case "clear":
      setCommands([]);
      break;
    case "help":
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <Help />,
        },
      ]);
      break;
    case "resume":
      window.open("/resume.pdf", "_blank");
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <div>Opening resume in new tab...</div>,
        },
      ]);
      break;
    case "goals":
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <Goals />,
        },
      ]);
      break;
    case "skills":
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <Skills />,
        },
      ]);
      break;
    case "about":
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <About />,
        },
      ]);
      break;
    case "theme":
      setCommands((prev) => [
        ...prev,
        { command, output: <Theme theme={command_split[1] || ""} /> },
      ]);
      break;
    case "socials":
      setCommands((prev) => [...prev, { command, output: <Socials /> }]);
      break;

    case "projects":
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <Projects />,
        },
      ]);
      break;
    case "font":
      setCommands((prev) => [
        ...prev,
        { command, output: <Font font={command_split[1] || ""} /> },
      ]);
      break;
    case "exit":
      {
        const closeWindow = () => {
          const newWindow = window.open("about:blank", "_blank");
          if (newWindow) {
            newWindow.close();
          }

          window.close();
          window.location.href = "about:blank";
          window.history.back();
        };
        closeWindow();
      }
      break;
    default:
      setCommands((prev) => [...prev, { command, output: <NotFound /> }]);
  }
}
