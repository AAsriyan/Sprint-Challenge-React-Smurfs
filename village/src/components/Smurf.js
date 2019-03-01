import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Buttons from "./Buttons";

class Smurf extends Component {
  state = {
    isEditing: false,
    name: "",
    age: "",
    height: ""
  };

  // componentDidMount() {
  // change this line to grab the id passed on the URL
  //   this.fetchSmurf(this.props.id);
  // }

  updateSmurf = (e, id) => {
    e.preventDefault();

    const updatedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
      .then(res => {
        this.props.resetSmurfs(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  toggleEdit = e => {
    e.preventDefault();

    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  resetEdit = () => {
    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchSmurf = id => {
    axios
      .get(`http://localhost:5000/api/smurfs/${id}`)
      .then(res => {
        this.props.resetSmurfs(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.props.updateSmurf}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
            autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Enter Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
            autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Enter Height"
            name="height"
            value={this.state.height}
            onChange={this.handleChanges}
            autoComplete="off"
            required
          />
          <Buttons
            toggleEdit={this.toggleEdit}
            isEditing={this.state.isEditing}
            handleChanges={this.props.handleChanges}
            deleteSmurf={this.props.deleteSmurf}
            updateSmurf={this.updateSmurf}
            id={this.props.id}
            reset={this.resetEdit}
          />
        </form>
      );
    } else {
      return (
        // <Link to={`/smurfs/${this.props.id}`}>
        <div className="Smurf">
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          <Buttons
            toggleEdit={this.toggleEdit}
            isEditing={this.state.isEditing}
            handleChanges={this.props.handleChanges}
            deleteSmurf={this.props.deleteSmurf}
            updateSmurf={this.updateSmurf}
            id={this.props.id}
            reset={this.resetEdit}
          />
        </div>
        // </Link>
      );
    }
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
