import { useRef } from "react";
import "./App.css";
import Background from "./components/Background";
import Console from "./components/Console";
import { FontProvider } from "./font/FontContext";
import { ThemeProvider } from "./theme/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="max-w-screen w-full flex justify-center">
        <Analytics />
        <FontProvider>
          <ThemeProvider>
            <Background inputRef={inputRef} />
            <Console inputRef={inputRef} />
          </ThemeProvider>
        </FontProvider>
      </div>
    </>
  );
}

export default App;
