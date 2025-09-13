import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";
import useFont from "../font/useFont";
import { fonts } from "../font/fonts";
import commandParser from "../utils";
import Header from "./Header";

interface CommandType {
  command: string;
  output: string | JSX.Element;
  failed?: boolean;
}

export default function Console() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const [commands, setCommands] = useState<CommandType[]>([]);
  const { font } = useFont();
  return (
    <div
      className="max-w-[768px] w-full mt-10 flex flex-col flex-wrap text-base overflow-x-hidden"
      style={{ fontFamily: fonts[font] }}
    >
      <Header />
      {commands.map((item, i) => {
        return (
          <div className="w-full flex flex-col mb-4" key={i}>
            <div className="w-full flex items-center gap-2">
              <Prompt />
              <span style={{ color: colors.success }}>{item.command}</span>
            </div>
            <div className="w-full ml-4" style={{ color: colors.fg }}>
              {item.output}
            </div>
          </div>
        );
      })}
      <div className="w-full flex items-center gap-2">
        <Prompt />
        <Command setCommands={setCommands} commands={commands} />
      </div>
    </div>
  );
}

const Prompt = () => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div className="text-white">
      <span style={{ color: colors.accent }}>black@pearl</span>
      <span className="text-white">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-white">$</span>
    </div>
  );
};

const Command = ({
  commands,
  setCommands,
}: {
  commands: CommandType[];
  setCommands: React.Dispatch<React.SetStateAction<CommandType[]>>;
}) => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const inputRef = useRef<HTMLInputElement>(null);
  const [arrowUpCount, setArrowUpCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = () => {
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight });
  }, [commands]);

  return (
    <div className="flex relative items-center">
      <input
        type="text"
        value={currentCommand}
        ref={inputRef}
        onChange={(e) => setCurrentCommand(e.target.value)}
        className="bg-transparent outline-none border-none caret-transparent"
        style={{ width: `${currentCommand.length || 0}ch`, color: colors.fg }}
        onKeyDown={(e) => {
          handleKeyDown(
            e,
            history,
            setHistory,
            currentCommand,
            setCurrentCommand,
            arrowUpCount,
            setArrowUpCount,
            setCommands,
          );
        }}
      />

      <span
        className="absolute left-[calc(100%)] h-[2ch] w-[0.9ch] animate-pulse"
        style={{ background: colors.fg }}
      />
    </div>
  );
};

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  history: string[],
  setHistory: (h: string[]) => void,
  command: string,
  setCommand: (c: string) => void,
  arrowUpCount: number,
  setArrowUpCount: (n: number) => void,
  setCommands: React.Dispatch<React.SetStateAction<CommandType[]>>,
) => {
  if (e.key === "Enter") {
    setHistory([...history, command]);
    setCommand("");
    setArrowUpCount(0);
    commandParser(command, setCommands);
    return;
  }
  if (e.key === "ArrowUp") {
    if (history.length === 0) return;
    const newCount = Math.min(arrowUpCount + 1, history.length);
    setArrowUpCount(newCount);
    setCommand(history[history.length - newCount] || "");
    return;
  }
  if (e.key === "ArrowDown") {
    if (arrowUpCount === 0) return;
    const newCount = arrowUpCount - 1;
    setArrowUpCount(newCount);

    if (newCount === 0) {
      setCommand("");
    } else {
      setCommand(history[history.length - newCount] || "");
    }
    return;
  }
};
