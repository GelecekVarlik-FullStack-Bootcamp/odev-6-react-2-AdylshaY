import styled from "styled-components";

const Styled = styled.div`
  font-family: "Montserrat", sans-serif;

  .flex-container {
    display: flex;
    justify-content: center;
  }

  .card {
    display: flex;
    justify-content: center;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    display: flex;
    width: 75%;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgb(0 0 0 / 20%);
    align-items: center;
  }
`;
export default Styled;
