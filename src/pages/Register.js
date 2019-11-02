import React, { useState } from "react";
import Form from "../components/Form-Sign";
import { registerAPI } from "../_functionAPI";

export default function RegisterPage() {
  const [isDisplayFail, setIsDisplayFail] = useState(false);

  const handleSubmitRegister = async values => {
    registerAPI(values.username, values.password)
      .then(res => {
        setIsDisplayFail(false);
      })
      .catch(err => {
        setIsDisplayFail(true);
      });
  };
  return (
    <Form
      name="Register"
      urlImg="https://cdn.discordapp.com/attachments/639498955356373003/639499041545388051/register_button_952726524.png"
      handleSubmitForm={handleSubmitRegister}
      isDisplay={isDisplayFail}
      status="Username is exist"
    />
  );
}
