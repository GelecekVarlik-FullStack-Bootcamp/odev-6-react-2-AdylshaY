import styled from "styled-components";

const Styled = styled.div`
  font-family: "Montserrat", sans-serif;

  form {
    width: 100%;
    display: flex;
  }

  input[type="text"]:focus {
    border: 3px solid #1d3557;
    transition: 0.5s;
  }
  input[type="text"] {
    margin: 10px;
    padding: 5px 15px;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    flex-grow: 1;
    border-radius: 20px;
  }
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 650px;
    height: 400px;
    background: white;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    height: 50px;
    background: white;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .heading {
    margin: 0;
    padding: 10px;
    color: #2c3e50;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  .modalContent {
    padding: 10px;
    font-size: 14px;
    color: #2c3e50;
    text-align: center;
  }

  .modalActions {
    position: absolute;
    bottom: 2px;
    margin-bottom: 10px;
    width: 100%;
  }

  .actionsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    background: white;
    transition: all 0.25s ease;
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
  }

  .closeBtn:hover {
    transform: translate(4px, -4px);
  }

  .deleteBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #fff;
    background: #ff3e4e;
    transition: all 0.25s ease;
  }

  .deleteBtn:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }

  .cancelBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #2c3e50;
    background: #fcfcfc;
    transition: all 0.25s ease;
  }

  .cancelBtn:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
  span {
    margin: 10px;
    border: 2px solid #819fa7;
    border-radius: 10px;
    padding: 5px 10px;
  }
  .status-title {
    flex-grow: 2;
    transition-duration: 0.5s;
    text-align: start;
  }
  .status-div {
    display: flex;
  }
  i {
    float: right;
    font-size: 20px;
    cursor: pointer;
    margin-right: 10px;
  }
  .status-color {
    width: 15%;
    transition-duration: 0.5s;
  }
  .status-color:hover {
    background-color: rgba(29, 53, 87, 0.8);
    color: white;
  }

  .status-title:hover {
    background-color: rgba(29, 53, 87, 0.8);
    color: white;
  }
`;

export default Styled;
