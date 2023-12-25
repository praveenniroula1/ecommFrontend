import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../ContextAPi/Auth";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [auth, setAuth] = useAuth();

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
    toast.success("Hey Login yesss!!!");
    navigate("/");
    setAuth({
      ...auth,
      user: "Praveen",
      token: "5445646",
    });
  };

  return (
    <Layout title={"Register- Ecomm App"}>
      <div className="register">
        <h1>Login Page</h1>
        <form onSubmit={handleOnSubmit}>
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
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Password"
              name="password"
              value={form.password}
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
