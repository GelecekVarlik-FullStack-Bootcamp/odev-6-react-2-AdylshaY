import React, { useState } from "react";
import Styled from "../Register/Register.styled";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkPwd()) {
      try {
        await axios.post(
          "http://localhost:80/auth/register",
          {
            username: username,
            password: pwd,
            passwordConfirm: pwdConfirm,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else {
          setErrMsg("Login Failed");
        }
      }
      navigate("/login");
    } else {
      setErrMsg("Passwords not same.");
    }
  };

  const checkPwd = () => {
    if (pwd === pwdConfirm) {
      return true;
    }
    return false;
  };

  return (
    <Styled>
      <div className="login-form">
        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="title">Register</div>
          <input
            required
            type="text"
            id="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            required
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
          />
          <input
            required
            type="password"
            id="passwordConfirm"
            placeholder="Password Confirm"
            onChange={(e) => setPwdConfirm(e.target.value)}
            value={pwdConfirm}
          />
          <Button name="Register" />
        </form>
        <Link to="/login">Already have an account?</Link>
      </div>
    </Styled>
  );
}

export default Register;
