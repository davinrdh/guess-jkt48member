import { Button } from "react-bootstrap";
import { NavbarBrand, NavbarStyled } from "../Components/styled";
import ModalInstructions from "../Components/ModalInstructions";
import { useState } from "react";

export default function Header() {
  const [modal, setModal] = useState(false);

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

  const handleClose = () => setModal(false);

  return (
    <div>
      <NavbarStyled>
        <NavbarBrand>
          Guess JKT48 Member
          <Button variant="" className="" onClick={() => setModal(!modal)}>
            <img src="/img/question-diamond.svg" alt="" />
            <ModalInstructions show={modal} handleClose={handleClose} />
          </Button>
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
