import styled from "styled-components";

const Styled = styled.div`
  font-family: "Montserrat", sans-serif;

  .login-form {
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    display: flex;
    width: 500px;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgb(0 0 0 / 20%);
  }
  .title {
    font-size: 24px;
    text-align: center;
  }
  input {
    width: 98%;
    height: 25px;
    border-radius: 5px;
    border-style: solid;
    display: flex;
    margin: 20px 0px 20px 0px;
    transition-duration: 0.4s;
    padding: 5px;
  }
  div {
    display: flex;
    justify-content: center;
  }
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
  }

  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }
`;
export default Styled;
