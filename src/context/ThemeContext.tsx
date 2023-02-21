import React from "react";
import { createContext, useState } from "react";
interface IObjectKeys {
  [key: string]: any;
}
interface IProps extends IObjectKeys {
  theme: string;
  setTheme: any;
}
const ThemeContext = createContext<IProps>(null!);
export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const values: IProps = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
export default ThemeContext;
