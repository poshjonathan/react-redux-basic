import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeTodo } from "../../redux/actions";

const RemoveTodo = ({ onRemoveClick, id }) => {
  return (
    <button key={`buttonbuttton-${id}`} type="button" onClick={onRemoveClick}>
      Removed
    </button>
  );
};

export default connect(
  null,
  { removeTodo }
)(RemoveTodo);
