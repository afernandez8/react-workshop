
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      this.tick, // evitamos crear una funcion demas porque ya se guarda el this
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => this.setState({ date: new Date() });

  handleUpdate = (e) => {
    e.preventDefault();
    this.tick();
  };

  render() {
    const { date } = this.state;
    return (
      <React.Fragment>
        <h1>Hello, world!</h1>
        <h2>{date.toLocaleTimeString()}</h2>
        <button type="submit" onClick={this.handleUpdate}>
          Update
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
