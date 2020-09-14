import React from "react";
import PropTypes from "prop-types";
class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.list.title}</h4>
      </div>
    );
  }
}
// Validating Proptype
TodoItem.protoTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
