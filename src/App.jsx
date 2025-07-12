import { BrowserRouter, Routes, Route } from "react-router-dom";
import FastFingers from "./games/fast-fingers/fastFingers";
import TicTacToe from "./games/tictactoe/ticTacToe";
import ScoreCard from "./pages/scoreCard";
import Header from "./components/Header";
import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="tic-tac-toe" element={<TicTacToe />} />
        <Route path="fast-finger" element={<FastFingers />} />
        <Route path="about" element={<About />} />
        <Route path="score-card" element={<ScoreCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
