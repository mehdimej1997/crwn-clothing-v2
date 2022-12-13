import React from "react";
import "./form-input.scss";

function FormInput({ label, name, ...props }) {
  return (
    <div className="group">
      <input className="form-input" name={name} {...props} />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
