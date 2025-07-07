import { useState } from 'react'
import keyboard from '../../assets/logo.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Welcome.css'
import PropTypes from 'prop-types';

function Welcome({user,changeUser, changeLoginState}) {
  const [name,setName] = useState('');
  const [level,setLevel] = useState(user.level);
  const[isNameError,setIsNameError] = useState(false)
  const[isLevelError,setIsLevelError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(name ==='') {
      setIsNameError(true);
    } else if(level === "") {
      setIsNameError(false);
      setIsLevelError(true);
    }
     else {
      const newUser = {
        "name" : name,
        "level": level
      }
      changeUser(newUser);

      setIsNameError(false);
      setIsLevelError(false);
      changeLoginState();
    }
   
  }

  return (
    <div className='welcome-user-page'>
      <div className="header">
        <div className="main-image">          
          <img src={keyboard} />
        </div>
      </div>

      <form className="form-data" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <input
            type="text"
            placeholder="TYPE YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {isNameError ? (<p className='error'>Please enter the name</p>) : ""}
        <div className="form-field">
          <select
            className="select"
            type="text"
            autoComplete="off"
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option className="option" value="Easy">
              Easy
            </option>
            <option className="option" value="Medium">
              Medium
            </option>
            <option className="option" value="Hard">
              Hard
            </option>
          </select>
          {isLevelError ? (<p className='error'>Please enter the Level</p>) : ""}
        </div>
        <button className="start-game" type="submit">
          <PlayArrowIcon />
          <div className="start-btn">START GAME</div>
        </button>
      </form>

      
    </div>
  )
}
Welcome.propTypes = {
  user: PropTypes.shape({
    level: PropTypes.string
  }).isRequired,
  changeUser: PropTypes.func.isRequired,
  changeLoginState: PropTypes.func.isRequired
};

export default Welcome
