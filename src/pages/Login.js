import React, { useState } from "react";
import { connect } from "react-redux";

import Form from "../components/WrappedNormalForm";
import { loginAPI } from "../_functionAPI";
import setAuthorizationToken from "../_function/SetAuthorizationToken";

function LoginPage() {
  const [isDisplayFail, setIsDisplayFail] = useState(false);

  const handleSubmitLogin = values => {
    loginAPI(values.username, values.password)
      .then(res => {
        setIsDisplayFail(false);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
      })
      .catch(() => {
        setIsDisplayFail(true);
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
    data: state.dataQuery
  };
})(LoginPage);
