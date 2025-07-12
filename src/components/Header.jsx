import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-gray-800">Fast Fingers</div>

      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          to="score-card"
          className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          ScoreCard
        </Link>
        <Link
          to="https://github.com/ANURAG0S1/fast-fingers"
          className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          Github
        </Link>
        <Link
          to="about"
          className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
