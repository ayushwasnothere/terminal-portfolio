import { createContext, useState } from "react";
import type { FontName } from "./fonts";

type FontSettings = {
  font: FontName;
  setFont: (f: FontName) => void;
};

const FontContext = createContext<FontSettings | null>(null);

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [font, setFont] = useState<FontName>("jetbrains");

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContext;
