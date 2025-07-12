import "./Timer.css";
import PropTypes from "prop-types";

function Timer({ time }) {
  const makeTime = (time) => {
    time = time.toFixed(2) + "";
    let seconds = time.split(".")[0];
    let miliSeconds = time.split(".")[1];
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${seconds}:${miliSeconds}`;
  };

  return (
    <div className="countdown">
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining"
              className="base-timer__path-remaining"
              d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                  "
            ></path>
          </g>
        </svg>
        <span className="base-timer__label">{makeTime(time)}</span>
      </div>
    </div>
  );
}
Timer.propTypes = {
  time: PropTypes.number.isRequired,
  timePassed: PropTypes.number.isRequired,
};

export default Timer;
