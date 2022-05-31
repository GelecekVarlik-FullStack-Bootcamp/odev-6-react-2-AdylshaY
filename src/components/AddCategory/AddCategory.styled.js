import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
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

  select {
    margin: 10px;
    padding: 5px 5px;
    border: 3px solid #ccc;
    transition: 0.5s;
    width: 125px;
    border-radius: 20px;
  }

  select:focus {
    border: 3px solid #555;
    transition: 0.5s;
  }

  i {
    float: right;
    font-size: 20px;
    cursor: pointer;
    margin-right: 10px;
  }

  div {
    display: inline;
  }

  form {
    display: contents;
    width: 100%;
  }
`;

export default Styled;
