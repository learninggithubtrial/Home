import React, { useState } from "react";
import axios from "axios";
import hashPassword from "./utils/getBcryptPassword";
import encryptWithAES from "./utils/getAesPassword";
import decryptWithAES from "./utils/getAesPassword";
import encryptMD5WithKey from "./utils/getAesPassword";

const AadhaarVerification = ({ name, label }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [userDetails, setUserDetails] = useState({});
  //hashPassword("Himanshu@123");
  //encryptMD5WithKey("Hello, world!", "safsafaxdxqDas3243@DSDS");
  const handleAadhaarChange = (e) => {
    setAadhaarNumber(e.target.value);
  };

  const handleVerify = () => {
    // Perform Aadhaar verification logic here
    // You can make an API call or implement your own verification logic
    //getAadharDetails();

    // For demonstration purposes, let's assume verification is successful
    setUserDetails({
      name: "Anas Khalid",
      age: "20-30",
    })
    setVerificationStatus("Verified");
  };

  const getAadharDetails = () => {
    getToken().then((response) => {
      console.log(response, "token");
      let data = {
        service: "Identity",
        itemId: "648aa8162bdb37006986197b",
        accessToken: "hceeexme4o531ceszmbe1tcxjh57vuxw9",
        task: "verifyAadhaar",
        essentials: {
          uid: "936798197645",
        },
      };
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://preproduction.signzy.tech/api/v2/snoops",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json;charset=utf-8",
          Origin: "https://sandbox-preproduction.signzy.tech",
          Connection: "keep-alive",
          Referer: "https://sandbox-preproduction.signzy.tech/",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
          TE: "trailers",
        },
        data: JSON.stringify(data),
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const getToken = () => {
    let data = JSON.stringify({
      type: "aadhaar",
      email: "ankur.rand@signzy.com",
      callbackUrl: "https://www.w3schools.com",
      images: [],
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://cors-anywhere.herokuapp.com/https://preproduction.signzy.tech/api/v2/patrons/60e56cec81c8a002fad306ae/identities",
      headers: {
        Authorization:
          "hgn7wWYVmV2oR8AcmOSKbq8oIfQVfOMD1NaFEJc2ytP4W3trUfKRlt5gvASCr48x",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={aadhaarNumber}
        onChange={handleAadhaarChange}
      />
      <button
        type="button"
        className=" btn btn-secondary mt-3"
        onClick={handleVerify}
      >
        Verify
      </button>
      {verificationStatus && (
        <>
        <p className="mt-3">Verified: {verificationStatus}</p>
        <p className="mt-3">Name: {userDetails.name}</p>
        <p className="mt-3">Age: {userDetails.age}</p>
        </>
      )}
    </div>
  );
};

export default AadhaarVerification;
