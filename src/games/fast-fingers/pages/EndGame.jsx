import PersonIcon from "@mui/icons-material/Person";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ReplayIcon from "@mui/icons-material/Replay";

function EndGame({ user, score, playAgain }) {
  return (
    <div className="min-w-[360px] rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6 space-y-8">
      {/* Header with User Info */}
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Left user info */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
              <PersonIcon className="text-blue-700" />
              <span className="text-gray-800 font-medium">{user.name}</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
              <VideogameAssetIcon className="text-blue-700" />
              <span className="text-gray-800 font-medium">{user.level}</span>
            </div>
          </div>

          {/* Right branding info */}
          <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
            <KeyboardIcon className="text-blue-700" />
            <span className="text-gray-800 font-medium">Fast Fingers</span>
          </div>
        </div>
      </div>

      {/* End Game Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">SCORE : GAME</h2>
        <div className="text-4xl font-extrabold text-blue-700">{score}</div>

        {/* Play Again Button */}
        <button
          onClick={playAgain}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          <ReplayIcon />
          <span>PLAY AGAIN</span>
        </button>
      </div>

      {/* Quit Button */}
      <button
        onClick={() => location.reload()}
        className="text-red-600 hover:underline font-medium"
      >
        QUIT
      </button>
    </div>
  );
}

export default EndGame;
