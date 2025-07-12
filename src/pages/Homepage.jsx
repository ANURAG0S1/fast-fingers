import { Link } from "react-router";
import keyboard from "./../assets/images/keyBoard.svg";
import tictactoe from "./../assets/images/tictactoe.png";

const HomePage = () => {
  return (
    <div>
      <ul className="flex flex-row items-center gap-8 max-w-4xl !mx-auto !mt-8">
        <Link to="tic-tac-toe">
          <li className="w-fit flex item-center justify-center flex-col text-center">
            <div className="icon bg-amber-100 p-3 rounded-2xl mb-4">
              <img
                
                src={tictactoe}
                alt="Keyboard"
                className="h-36 w-36 object-contain"
              />
            </div>
            <div className="name font-medium ">Tic Tac Toe</div>
          </li>
        </Link>
        <Link to="fast-finger">
          <li className="w-fit flex item-center justify-center flex-col text-center">
            <div className="icon bg-amber-100 p-3 rounded-2xl mb-4">
              <img
                src={keyboard}
                alt="Keyboard"
                className="h-36 w-36 object-contain"
              />
            </div>
            <div className="name font-semibold">typeFasstr</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HomePage;
