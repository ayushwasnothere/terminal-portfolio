import { useContext } from "react";
import FontContext from "./FontContext";

const useFont = () => useContext(FontContext)!;

export default useFont;
