import React, { Component } from "react";

class Honey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alekhya"
    };
    this.clickMe = this.clickMe.bind(this);
  }
  clickMe(e) {
    console.log("HIT");
    this.setState({ name: "hhhhh" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button name="Hello" onSubmit={this.clickMe}></button>
        <input type="button" value="hello" />
      </div>
    );
  }
}

export default Honey;
