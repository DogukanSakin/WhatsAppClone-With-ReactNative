import { StatusBar } from "expo-status-bar";
import Router from "./src/Router";
import { ThemeProvider } from "./src/context/ThemeContext";
export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="light" translucent={false} />
      <Router></Router>
    </ThemeProvider>
  );
}
