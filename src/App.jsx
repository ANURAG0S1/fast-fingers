import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fastfingers from "./games/fast-fingers/fastFingers";
import TicTacToe from "./games/tictactoe/ticTacToe";
import "./App.css";

function App() {
 
  return (
   <BrowserRouter>
      <Routes>

          <Route index element={<Fastfingers />} />
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
