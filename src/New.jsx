import React, { Component } from "react";
class New extends Component {
  render() {
    const square = function (number) {
      return number * number;
    };
    return (
      <div>
        <h1>hello</h1>
        <h1>{this.square(5)}</h1>
      </div>
    );
  }
}

export default New;
