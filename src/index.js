import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import New from "./New";
import Movies from "./components/movies";
import Counters from "./components/counters";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

//ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(<New />, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Movies />, document.getElementById("root"));

serviceWorker.unregister();
