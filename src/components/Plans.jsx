import { Link } from "react-router";

export default function FeaturesPending() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
        <span role="img" aria-label="construction">🚧</span>
        Upcoming Plans
      </h2>
      <ul className="space-y-4 list-disc list-inside text-gray-700">
        <li>
          <span className="font-semibold">Live chat:</span>{" "}
          To be implemented using websockets (would probably use{" "}
          <Link
            to="https://socket.io"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOCKET.io
          </Link>
          )
        </li>
        <li>
          <span className="font-semibold">Wordle game:</span>{" "}
          Create a wordle game like the one in NY Times&apos;{" "}
          <Link
            to="https://www.nytimes.com/games/wordle/index.html"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WORDLE
          </Link>
        </li>
        <li>
          <span className="font-semibold">Find Pairs:</span>{" "}
          Find Pair of images in least Moves just like the game on netlify
        </li>
        <li>
          <span className="font-semibold">Keyboard Accessibility:</span>{" "}
          In tic tac toe game user should be able to navigate using keyboard also instead of mouse only
        </li>
      </ul>
    </div>
  );
}
