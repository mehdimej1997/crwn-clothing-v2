import React, { useState } from "react";

import {
  createAuthWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.scss";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password not matching");
      return;
    }

    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocument({ ...user, displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
        return;
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span className="">Sign up with your email and password</span>
      <form action="post" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
