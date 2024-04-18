import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Menu/HomePage";
import { NavbarStyled } from "./Components/styled";
import Game from "./Menu/Game";

export default function App() {
  return (
    <div>
      <NavbarStyled>Guess JKT48 Member</NavbarStyled>
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  )
}
