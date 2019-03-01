import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    axios.get("http://localhost:3333/smurfs").then(res => {
      this.setState({ smurfs: res.data });
    });
  };

  resetSmurfs = res => {
    this.setState({ smurfs: res.data });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/" exact render={props => <Home />} />
        <Route
          path="/smurfs-form"
          render={props => (
            <SmurfForm {...props} resetSmurfs={this.resetSmurfs} />
          )}
        />

        {/* <SmurfForm resetSmurfs={this.resetSmurfs} /> */}

        <Route
          path="/smurfs-list"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
