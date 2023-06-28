import React from "react";
import AadhaarVerification from "./aadhaarVerification";
import CameraCaptureForm from "./utils/cameraCaptureForm";

const FormElementBuilder = ({ field }) => {
  const { type, label, name, options } = field;

  switch (type) {
    case "text":
      return (
        <div className="form-group mb-3">
          <label htmlFor={name}>{label}</label>
          <input type="text" className="form-control" id={name} name={name} />
        </div>
      );
    case "email":
      return (
        <div className="form-group mb-3">
          <label htmlFor={name}>{label}</label>
          <input type="email" className="form-control" id={name} name={name} />
        </div>
      );
    case "password":
      return (
        <div className="form-group mb-3">
          <label htmlFor={name}>{label}</label>
          <input
            type="password"
            className="form-control"
            id={name}
            name={name}
          />
        </div>
      );
    case "checkbox":
      return (
        <div className="form-group form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id={name}
            name={name}
          />
          <label className="form-check-label" htmlFor={name}>
            {label}
          </label>
        </div>
      );
    case "dropdown":
      return (
        <div className="form-group mb-3">
          <label htmlFor={name}>{label}</label>
          <select className="form-control" id={name} name={name}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    case "aadhar":
      return <AadhaarVerification name={name} label={label} />;
    // case "camera":
    //   return <CameraCaptureForm />
    default:
      return null;
  }
};

export default FormElementBuilder;
