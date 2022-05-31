import styled from "styled-components";

const Styled = styled.div`
  .container {
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    display: flex;
    width: 500px;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgb(0 0 0 / 20%);
    align-items: center;
  }
  p {
    margin: 5px;
    color: grey;
    font-family: 'Montserrat', sans-serif;
  }
  h1 {
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  div {
    display: inline;
  }
`;

export default Styled;
