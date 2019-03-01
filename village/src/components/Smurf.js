import React, { Component } from "react";
import axios from "axios";
import Buttons from "./Buttons";

class Smurf extends Component {
  state = {
    isEditing: false,
    name: "",
    age: "",
    height: ""
  };

  updateSmurf = (e, id) => {
    e.preventDefault();

    const updatedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf).then(res => {
      this.props.resetSmurfs(res);
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
            // autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Enter Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
            //autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Enter Height"
            name="height"
            value={this.state.height}
            onChange={this.handleChanges}
            //autoComplete="off"
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
