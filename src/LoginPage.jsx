import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import fields from "./fields.json";
import FormElementBuilder from "./formElementBuilder";

const LoginForm = () => {
  let navigate = useNavigate();

  const loginUser = (values) => {
    let data = JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.LOGIN_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then((response) => {
      if (response) {
        const token = response.data?.token;
        const encodedToken = encodeURIComponent(token);
        // navigate(`/dashboard/${encodedToken}`);
        navigate("/dashboard", { state: { encodedToken } });
      }
    });
  };

  // return (
  //   <div className="max-w-md w-full p-8 mx-auto bg-white shadow-sm">
  //     <h2 className="text-2xl font-semibold mb-4">
  //       Welcome to the Good Platform
  //     </h2>
  //     <Form
  //       name="basic"
  //       labelCol={{
  //         span: 8,
  //       }}
  //       wrapperCol={{
  //         span: 16,
  //       }}
  //       style={{
  //         maxWidth: 600,
  //       }}
  //       initialValues={{
  //         remember: true,
  //       }}
  //       onFinish={loginUser}
  //       autoComplete="off"
  //     >
  // <Form.Item
  //   label="Username"
  //   name="username"
  //   rules={[
  //     {
  //       required: true,
  //       message: "Please input your username!",
  //     },
  //   ]}
  // >
  //   <Input />
  // </Form.Item>

  //       <Form.Item
  //         label="Password"
  //         name="password"
  //         rules={[
  //           {
  //             required: true,
  //             message: "Please input your password!",
  //           },
  //         ]}
  //       >
  //         <Input.Password />
  //       </Form.Item>

  //       <Form.Item
  //         name="remember"
  //         valuePropName="checked"
  //         wrapperCol={{
  //           offset: 8,
  //           span: 16,
  //         }}
  //       >
  //         <Checkbox>Remember me</Checkbox>
  //       </Form.Item>

  // <Form.Item
  //   wrapperCol={{
  //     offset: 8,
  //     span: 16,
  //   }}
  // >
  //   <Button type="primary" htmlType="submit">
  //     Submit
  //   </Button>
  // </Form.Item>
  //     </Form>
  //   </div>
  // );

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="border p-4">
        <h1 className="mb-4">Form Builder Sample</h1>
        <form onSubmit={loginUser}>
          {fields.map((field) => (
            <FormElementBuilder key={field.name} field={field} />
          ))}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <span>Validate sentry library logs working.</span>
      <button onClick={() => methodDoesNotExist()}>Break the world!</button>;
    </div>
  );
};

export default LoginForm;
