import PersonIcon from '@mui/icons-material/Person';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ReplayIcon from '@mui/icons-material/Replay';
import './EndGame.css'

function EndGame({user,score,playAgain}) {
  return (
    <div className="endGame">
      <div className="game-header">
        <div className="userInfo">
          <div className="card">
            <PersonIcon />
            <div className="card-text">{user.name}</div>
          </div>
          <div className="card">
            <VideogameAssetIcon />
            <div className="card-text">{user.level}</div>
          </div>
        </div>
        <div className="userInfo">
          <div className="card">
            <KeyboardIcon />
            <div className="card-text">fast fingers</div>
          </div>
        </div>
      </div>
      <div className="end-game">
        <div className="end-header">SCORE : GAME</div>
        <div className="score-card">{score}</div>
        <button className="play-again" onClick={playAgain}>
          <div className="redo" >
            <ReplayIcon />
          </div>
          <div className="redo-btn">PLAY AGAIN</div>
        </button>
      </div>
      <button className="quit-game" onClick={() => location.reload()}>
          <div className="quit-btn">QUIT</div>
      </button>
    </div>

  )
}

export default EndGame
