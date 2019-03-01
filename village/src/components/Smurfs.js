import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  state = {
    isEditing: false
  };

  render() {
    return (
      <div className="Smurfs">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                handleChanges={this.props.handleChanges}
                deleteSmurf={this.props.deleteSmurf}
                updateSmurf={this.props.updateSmurf}
                resetSmurfs={this.props.resetSmurfs}
                smurfs={this.props.smurfs}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                nameMain={this.props.name}
                ageMain={this.props.age}
                heightMain={this.props.height}
                isEditing={this.isEditing}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
