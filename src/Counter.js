import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="container text-center">
        <div className="row flex-center">
          <div className="col col-6">
            <h1>Counter in ReactJs</h1>
            <h2>{this.state.count}</h2>
            <div>
              <button
                className="btn-success margin-right-large"
                onClick={this.increment}
              >
                Increment
              </button>
              <button
                className="btn-danger margin-right-large"
                onClick={this.decrement}
              >
                Decrement
              </button>
              <button className="btn-secondary" onClick={this.reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
