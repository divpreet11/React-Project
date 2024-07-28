import React, { Component } from "react";

export default class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementstate = this.incrementstate.bind(this); // we need to apply the bind if we dont use arrow function while calling these class methods
    this.decrementstate = this.decrementstate.bind(this); // we need to apply the bind if we dont use arrow function while calling these class methods
  }

  incrementstate() {
    console.log("increment called");
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  decrementstate() {
    console.log("decrement called");
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>States</h1>
          <h2>
            Example of using function calls with bind (arrow function not used
            while calling the functions (incremnter & decrementor))
          </h2>
          <button onClick={this.incrementstate}> increment</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.decrementstate}>decrement</button>
          <h2>
            Example of using function calls without bind (Since we are using
            arrow functions)
          </h2>
          <button onClick={() => this.incrementstate()}>increment</button>
          <h1>{this.state.count}</h1>
          <button onClick={() => this.decrementstate()}>decrement</button>
        </div>
      </>
    );
  }
}
