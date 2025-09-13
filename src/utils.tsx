import About from "./outputs/About";
import Help from "./outputs/Help";
import NotFound from "./outputs/NotFound";

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
  switch (command) {
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
    case "about":
      setCommands((prev) => [
        ...prev,
        {
          command,
          output: <About />,
        },
      ]);
      break;
    default:
      setCommands((prev) => [...prev, { command, output: <NotFound /> }]);
  }
}
