import React from "react";
import { Form, Icon, Input, Button, Card, Alert } from "antd";
import "antd/dist/antd.css";
import "./index.css";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    const { form, handleSubmitForm } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleSubmitForm(values);
      } else {
        // nothing
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      name,
      urlImg,
      isDisplay,
      status
    } = this.props;
    return (
      <Card
        className="card"
        style={{ width: 300 }}
        cover={<img alt="example" src={urlImg} />}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Username can't be blank!"
                },
                {
                  message: "Username is invalid!",
                  pattern: new RegExp(
                    /^[a-zA-Z]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/
                  )
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Password can't be blanks"
                },
                {
                  message: "Make sure at least 8 characters",
                  pattern: new RegExp("^.{8,}$")
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {name}
            </Button>
          </Form.Item>
        </Form>
        {isDisplay && (
          <Alert type="error" message={status} banner />
        )}
      </Card>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
