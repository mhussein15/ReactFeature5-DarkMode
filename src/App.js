// Styling
import { GlobalStyle, ThemeButton } from "./styles";
import { useState } from "react";
// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [mood, setmood] = useState(theme.light);
  const darkMood = () =>
    mood === theme.light ? setmood(theme.dark) : setmood(theme.light);
  return (
    <ThemeProvider theme={mood}>
      <GlobalStyle />
      <ThemeButton onClick={darkMood}>Dark Theme</ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
