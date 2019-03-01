import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
// import Smurf from "./components/Smurf";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route } from "react-router-dom";

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

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();

    axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
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

        <Route
          path="/smurfs-list"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              handleChanges={this.handleChanges}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
              resetSmurfs={this.resetSmurfs}
            />
          )}
        />

        {/* <Route
          path="/smurfs/:id"
          render={props => {
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
              handleChanges={this.handleChanges}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
              resetSmurfs={this.resetSmurfs}
            />;
          }}
        /> */}
      </div>
    );
  }
}

export default App;
