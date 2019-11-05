import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Form from "../components/WrappedNormalForm";
import { loginAPI, getMeAPI } from "../_functionAPI";
import { changeIsAuthenticate } from "../actions/Basic";
import { changeUserName, changeUserId } from "../actions/User";

function LoginPage({ dispatch }) {
  const [isDisplayFail, setIsDisplayFail] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSubmitLogin = values => {
    loginAPI(values.username, values.password)
      .then(res => {
        setIsDisplayFail(false);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        dispatch(changeIsAuthenticate(true));
        getMeAPI(token)
          .then(result => {
            const { _id, username } = result.data;
            dispatch(changeUserId(_id));
            dispatch(changeUserName(username));
          })
          .catch(() => {
            // dispatch(changeIsAuthenticate(false));
          });
        setTimeout(() => history.replace(from), 100);
      })
      .catch(() => {
        setIsDisplayFail(true);
        dispatch(changeIsAuthenticate(false));
        setTimeout(() => history.push("/"), 100);
      });
  };
  return (
    <Form
      name="Login"
      urlImg="https://cdn.discordapp.com/attachments/639498955356373003/639499203122298937/Login-Cadenas.png"
      handleSubmitForm={handleSubmitLogin}
      isDisplay={isDisplayFail}
      status="Login failed"
    />
  );
}

export default connect(state => {
  return {
    data: state.dataQuery,
    isAuthenticate:state.isAuthenticate
  };
})(LoginPage);
