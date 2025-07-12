import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PersonIcon from "@mui/icons-material/Person";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Timer from "./Timer";
import "./Game.css";

function Game({
  user,
  word,
  score,
  incrementScore,
  scoreArray,
  quitGame,
  isCorrect,
  changeWord,
}) {
  const [inputWord, setInputWord] = useState("");
  const [time, setTime] = useState();
  const [timePassed, setTimePassed] = useState(0);
  const [highScores] = useState(scoreArray);

  const handleInputChange = (e) => {
    setInputWord(e.target.value);
    if (isCorrect(e.target.value)) {
      changeWord();
      incrementScore();
      setInputWord("");
    }
  };

  useEffect(() => {
    if (user.level === "Easy") {
      setTime(2.99);
    } else if (user.level === "Medium") {
      setTime(3.99);
    } else {
      setTime(4.99);
    }
  }, [user.level]);

  useEffect(() => {
    setTimePassed(0);
    return () => {
      setTimePassed(0);
    };
  }, [word]);

  useEffect(() => {
    let x = setInterval(() => {
      setTimePassed(timePassed + 0.01);
    }, 10);
    return () => clearInterval(x);
  }, [timePassed]);

  if (time - timePassed <= 0) {
    quitGame();
  }
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [word]);

  highScores.sort(function (a, b) {
    return b - a;
  });

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gradient-to-br from-blue-50 to-white gap-6">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            HIGHEST SCORES
          </h2>
          <ul className="space-y-2 text-center">
            {highScores &&
              highScores.map((scoreVal) => (
                <li
                  key={scoreVal}
                  className="text-lg font-medium text-gray-800 bg-gray-100 py-1 rounded"
                >
                  {scoreVal}
                </li>
              ))}
          </ul>
        </div>
        <button
          onClick={quitGame}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-center font-bold transition"
        >
          STOP GAME
        </button>
      </div>

      {/* Game Bar */}
      <div className="w-full md:w-3/4 bg-white rounded-xl shadow-md p-6 space-y-6">
        {/* Game Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* User Info Left */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
              <PersonIcon className="text-blue-700" />
              <span className="font-medium text-gray-800">{user.name}</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
              <VideogameAssetIcon className="text-blue-700" />
              <span className="font-medium text-gray-800">{user.level}</span>
            </div>
          </div>

          {/* Game Info Right */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
              <KeyboardIcon className="text-blue-700" />
              <span className="font-medium text-gray-800">Fast Fingers</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-blue-900">
              SCORE: {score}
            </div>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="space-y-6">
          <Timer word={word} time={time - timePassed} timePassed={timePassed} />

          {/* Game Word */}
          <div className="text-center text-3xl font-bold tracking-wide">
            <p>
              {word.split("").map((char, i) => {
                let color;
                if (i < inputWord.length) {
                  color =
                    char === inputWord.charAt(i).toUpperCase()
                      ? "#1d3557"
                      : "#e63946";
                }
                return (
                  <span key={i} style={{ color: color }}>
                    {char}
                  </span>
                );
              })}
            </p>
          </div>

          {/* Input */}
          <div className="text-center">
            <input
              type="text"
              autoComplete="off"
              name="inputWord"
              value={inputWord}
              onChange={handleInputChange}
              ref={inputRef}
              className="w-full sm:w-2/3 px-4 py-3 border-2 border-blue-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Game.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
  word: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  incrementScore: PropTypes.func.isRequired,
  scoreArray: PropTypes.arrayOf(PropTypes.number).isRequired,
  gameCount: PropTypes.number,
  quitGame: PropTypes.func.isRequired,
  isCorrect: PropTypes.func.isRequired,
  changeWord: PropTypes.func.isRequired,
};

export default Game;
