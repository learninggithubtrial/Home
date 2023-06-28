import { Image } from "antd";
import React from "react";
import loginImage from "../login-image.svg";
// const LoginImage = () => (
//   <Image
//     width={"50%"}
//     height={"100%"}
//     src={pic}
//     preview={false}
//   />
// );

export default function LoginImage() {
  return (
    <div className="image-container">
      <img src={loginImage} />
    </div>
  );
}
