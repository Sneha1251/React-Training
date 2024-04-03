// Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.

import CustomTimer from "./useCustomTimer";
const UserTimer = () => {
    const { timer, startTimer, pauseTimer, resetTimer } = CustomTimer(60);
  
    return (
      <div>
        <h2>Countdown Timer: {timer}</h2>
        <div className="countdown">
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    );
  };
export default UserTimer;
