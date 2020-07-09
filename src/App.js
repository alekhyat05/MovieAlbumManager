import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/navbar";

import Honey from "./Honey";

import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import New from "./New";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    console.log("event", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  hanldeReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((c) => c.value > 0).length
          }></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.hanldeReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
