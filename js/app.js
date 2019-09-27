const SetLength = ({ title, time, onClick }) => {
  return (
    <div className="SetLength">
      <h2>{ title }</h2>
      <button><i className="fa fa-arrow-up" onClick={ onClick}  data-tag="up" ></i></button>
      <span>{ time }</span>
      <button><i className="fa fa-arrow-down" onClick={ onClick} data-tag="down" ></i></button>
    </div>
  );
}

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isResumed: false
    }
    this.handleBreakClick = this.handleBreakClick.bind(this);
    this.handleSessionClick = this.handleSessionClick.bind(this);
  }

  changeTime(direction, control) {
    let { breakLength, sessionLength } = this.state;
    if(control === "Break" && breakLength > 0) {
      if(direction === "up" ) ++breakLength;
      if(direction === "down" ) --breakLength;
    }
    
    if(control === "Session") {
      if(direction === "up" ) ++sessionLength;
      if(direction === "down" ) --sessionLength;
    }
    
    this.setState({ ...this.state, breakLength, sessionLength });
  }

  handleBreakClick(evt) {
    this.changeTime(event.target.dataset.tag, "Break");
  }

  handleSessionClick(evt) {
    this.changeTime(event.target.dataset.tag, "Session");
  }

  render() {
    const { breakLength, sessionLength, isResumed } = this.state;
    return (
      <div className="PomodoroClock">
        <h1>Pomodoro Clock</h1>
        <div className="PomodoroClock-settings">
          <SetLength title="Break Length" time={ breakLength } onClick= { this.handleBreakClick } />
          <SetLength title="Session Length" time={ sessionLength } onClick= { this.handleSessionClick } />
        </div>
        <div className="PomodoroClock-clock">
          <h2>Session</h2>
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