import React, { useContext, useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Styled from "./Login.styled";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const { setIsLoggedIn, setAuth, auth, isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:80/auth/login",
        { username: username, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response.data.token;
      setAuth({ username: username, token: accessToken });
      setIsLoggedIn(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("user-data", null)
    localStorage.setItem("isLoggedIn", false)
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("user-data", JSON.stringify(auth));
      localStorage.setItem("isLoggedIn", isLoggedIn)
      navigate("/todos");
    }
  }, [isLoggedIn]);

  return (
    <Styled>
      <div className="login-form">
        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="title">Login</div>
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
          <Button name="Login" />
        </form>
        <Link to="/register">Dont have an account?</Link>
      </div>
    </Styled>
  );
}

export default Login;
