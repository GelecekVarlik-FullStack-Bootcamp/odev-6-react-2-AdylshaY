import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  width: 65%;
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
  }
  select:focus {
    border: 3px solid #1d3557;
    transition: 0.5s;
  }
  div {
    display: inline;
  }
  form {
    width: 100%;
    display: flex;
  }
`;

export default Styled;
