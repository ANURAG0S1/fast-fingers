import { useState } from "react";
import keyboard from "./../../../../assets/images/keyBoard.svg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import PropTypes from "prop-types";

function Welcome({ user, changeUser }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(user.level);
  const [isNameError, setIsNameError] = useState(false);
  const [isLevelError, setIsLevelError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setIsNameError(true);
    } else if (level === "") {
      setIsNameError(false);
      setIsLevelError(true);
    } else {
      const newUser = {
        name: name,
        level: level,
      };
      changeUser(newUser);

      setIsNameError(false);
      setIsLevelError(false);
    }
  };

  return (
    <div className="rounded-2xl min-w-[360px] py-8 flex flex-col items-center justify-center bg-gradient-to-br from-white to-sky-50 px-6">
      {/* Header with Image */}
      <div className="mb-10">
        <div className="w-36 h-36 mx-auto">
          <img
            src={keyboard}
            alt="Keyboard"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-6"
      >
        {/* Name Input */}
        <div>
          <input
            type="text"
            placeholder="TYPE YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
          />
          {isNameError && (
            <p className="text-red-500 text-sm mt-1">Please enter the name</p>
          )}
        </div>

        {/* Level Select */}
        <div>
          <select
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          {isLevelError && (
            <p className="text-red-500 text-sm mt-1">Please enter the level</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          <PlayArrowIcon />
          <span>START GAME</span>
        </button>
      </form>
    </div>
  );
}
Welcome.propTypes = {
  user: PropTypes.shape({
    level: PropTypes.string,
  }).isRequired,
  changeUser: PropTypes.func.isRequired,
};

export default Welcome;
