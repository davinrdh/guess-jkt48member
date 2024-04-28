
import { NavbarBrand, NavbarStyled } from "../Components/styled";

export default function Header() {

  //   const [theme, setTheme] = useLocalStorage(
  //     "theme",
  //     "dark" && "theme" ? "dark" : "light"
  //   );

  //   const toggleTheme = () => {
  //     const newTheme = theme === "dark" ? "light" : "dark";
  //     setTheme(newTheme);
  //     themeModeonHtml(newTheme);
  //   };

  //   const themeModeonHtml = (theme: any) => {
  //     const htmlElement = document.querySelector("html");
  //     htmlElement?.setAttribute("theme-mode", theme);
  //   };

  //   useEffect(() => {
  //     themeModeonHtml(theme);
  //   }, []);

  return (
    <div>
      <NavbarStyled>
        <NavbarBrand>
          Guess JKT48 Member
        </NavbarBrand>
        {/* <div>
          <InputToggleTheme
            type="checkbox"
            checked={theme == "light"}
            onChange={toggleTheme}
          />
        </div> */}
      </NavbarStyled>
    </div>
  );
}
