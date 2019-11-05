import React from "react";
import { connect } from "react-redux";

function HomePage({ user }) {
  return <h1>{`Hello ${user.username}`}</h1>;
}

export default connect(state => {
  return {
    user: state.user
  };
})(HomePage);
