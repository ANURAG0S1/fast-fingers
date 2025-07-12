import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Game from '../components/gamePage/Game';
import GameWord from '../../../data/GameWord';
import EndGame from './EndGame';

function GamePage({ user }) {
  const [gameWord, setGameWord] = useState('');
  const [game, setGame] = useState(true);
  const [score, setScore] = useState(0);
  const [scoreArray, setScoreArray] = useState([]);
  const [gameCount] = useState(0);

  // Generate a new word based on user level
  const generateWord = useCallback(() => GameWord(user?.level).toUpperCase(), [user?.level]);

  useEffect(() => {
    setGameWord(generateWord());
    setGame(true);
  }, [generateWord]);

  const quitGame = useCallback(() => {
    setScoreArray(prev => [...prev, score]);
    setGame(false);
  }, [score]);

  const changeWord = useCallback(() => {
    setGameWord(generateWord());
  }, [generateWord]);

  const playAgain = useCallback(() => {
    setGame(true);
    setScore(0);
    changeWord();
  }, [changeWord]);

  const isCorrect = useCallback(
    inputWord => gameWord === inputWord.toUpperCase(),
    [gameWord]
  );

  return (
   <div className="bg-gradient-to-b min-w-[360px] from-blue-50 to-white flex items-center justify-center p-6 rounded-2xl">
  {game ? (
    <Game
      user={user}
      word={gameWord}
      score={score}
      gameCount={gameCount}
      incrementScore={() => setScore(prev => prev + 1)}
      scoreArray={scoreArray}
      quitGame={quitGame}
      isCorrect={isCorrect}
      changeWord={changeWord}
    />
  ) : (
    <EndGame user={user} score={score} playAgain={playAgain} />
  )}
</div>

  );
}

GamePage.propTypes = {
  user: PropTypes.shape({
    level: PropTypes.any,
  }),
};

export default GamePage;
