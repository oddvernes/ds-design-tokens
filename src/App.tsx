import { Routes, Route } from "react-router";
import Frontpage from "./routes/Frontpage.tsx";
import { Button } from "@digdir/designsystemet-react";
import {
  MagnifyingGlassIcon,
  MenuHamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@navikt/aksel-icons";
import logo from "./assets/kt_logo_full.svg";
import logoDark from "./assets/kt_logo_full_dark.svg";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = (
    newTheme: "dark" | "light",
    event?: React.MouseEvent<HTMLButtonElement> | null,
  ) => {
    setTheme(newTheme);

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion)").matches ||
      !event
    ) {
      document.documentElement.setAttribute("data-color-scheme", newTheme);
      return;
    }

    const { left, bottom, width, height } =
      event.currentTarget.getBoundingClientRect();

    document.documentElement.style.setProperty(
      "--_theme-x",
      `${left + width / 2}px`,
    );
    document.documentElement.style.setProperty(
      "--_theme-y",
      `${bottom - height / 2}px`,
    );

    document.startViewTransition(() => {
      document.documentElement.setAttribute("data-color-scheme", newTheme);
    });
  };
  return (
    <>
      <header className="ktui-header">
        <div>
          <a href="/">
            <img data-light-only src={logo} alt="Logo" />
            <img data-dark-only src={logoDark} alt="Logo" />
          </a>
          <nav>
            <Button
              variant="tertiary"
              data-color="neutral"
              icon={true}
              onClick={(e) => {
                handleThemeChange(theme === "light" ? "dark" : "light", e);
              }}
            >
              {theme === "dark" ? (
                <SunIcon aria-hidden />
              ) : (
                <MoonIcon aria-hidden />
              )}
            </Button>
            <Button variant="tertiary">
              <MagnifyingGlassIcon aria-hidden="true" />
              Søk
            </Button>
            <Button variant="tertiary">
              <MenuHamburgerIcon aria-hidden="true" />
              Meny
            </Button>
          </nav>
        </div>
      </header>
      <main className="ktui-main">
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
      </main>
      <footer
        data-color="accent"
        data-color-scheme="light"
        className="ktui-footer"
      >
        <div>footer</div>
      </footer>
    </>
  );
}

export default App;
