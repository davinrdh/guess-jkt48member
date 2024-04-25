import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Menu/HomePage";
import Game from "./Menu/Game";
import Header from "./Menu/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/game" element={<Game />} />
          {/* <Route path="/score" element={<Finished />} /> */}
        </Routes>
      </Router>
     <div className="fixed-bottom text-center pb-3" style={{fontSize: '12px'}}>Copyright&#169;2024 <a href="https://github.com/davinrdh/guess-jkt48member" target="_blank">GuessJKT48Member</a></div> 
    </div>
  )
}
