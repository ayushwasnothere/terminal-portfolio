import "./App.css";
import Background from "./components/Background";
import Console from "./components/Console";
import { FontProvider } from "./font/FontContext";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <>
      <div className="max-w-screen w-full flex justify-center">
        <FontProvider>
          <ThemeProvider>
            <Background />
            <Console />
          </ThemeProvider>
        </FontProvider>
      </div>
    </>
  );
}

export default App;
