import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { toast } from "react-toastify";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [form, setForm] = useState(initialForm);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    toast.success("Hey registerd yesss!!!");
  };

  return (
    <Layout title={"Register- Ecomm App"}>
      <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="phone"
              name="phone"
              value={form.phone}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
