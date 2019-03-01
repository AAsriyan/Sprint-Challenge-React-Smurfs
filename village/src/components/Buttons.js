import React from "react";

const Buttons = props => {
  return (
    <div>
      <button onClick={e => props.deleteSmurf(e, props.id)}>Delete</button>
      {!props.isEditing ? (
        <button onClick={props.handleEdit}>Update</button>
      ) : (
        <button
          onClick={e => props.updateFriend(e, props.friend.id, props.reset())}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Buttons;
