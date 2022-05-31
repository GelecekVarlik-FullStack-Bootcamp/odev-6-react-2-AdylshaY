import React from "react";
import Styled from "./Home.styled";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Styled>
      <div className="container">
        <h1>ToDo App</h1>
        <p>Organize your life.</p>
        <Link to="/login">
          <Button name="Login" />
        </Link>
        <Link to="/register">
          <Button name="Sign Up" />
        </Link>
      </div>
    </Styled>
  );
}

export default Home;
