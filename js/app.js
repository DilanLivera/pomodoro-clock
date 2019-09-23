class PomodoroClock extends React.Component {
  render() {
    return (
      <div className="PomodoroClock">
        <h1>Pomodoro Clock</h1>
        <div className="PomodoroClock-settings">
          <div className="break">
            <h2>Break Length</h2>
            <i className="fa fa-arrow-up"></i>
            <span>5</span>
            <i className="fa fa-arrow-down"></i>
          </div>
          <div className="session">
            <h2>Session Length</h2>
            <i className="fa fa-arrow-up"></i>
            <span>25</span>
            <i className="fa fa-arrow-down"></i>
          </div>
        </div>
        <div className="PomodoroClock-clock">
          <h3>Session</h3>
          <span>25:00</span>
        </div>
        <div className="PomodoroClock-controls">
          <i className="fa fa-play"></i>
          <i className="fa fa-pause"></i>
          <i className="fa fa-redo-alt"></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PomodoroClock />, document.getElementById('root'));