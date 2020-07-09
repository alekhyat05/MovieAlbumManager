import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
            </div>
            <div class="col-sm">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">
                +
              </button>
            </div>
            <div class="col-sm">
              <button
                onClick={() => this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm"
                disabled={this.props.counter.value == 0 ? "dis" : ""}>
                -
              </button>
            </div>

            <div class="col-sm">
              <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
