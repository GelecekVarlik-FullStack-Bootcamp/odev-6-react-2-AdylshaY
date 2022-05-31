import styled from "styled-components";

const Styled = styled.div`
  width: 75%;
  display: flex;
  justifycontent: space-between;

  span {
    margin: 10px;
    border: 2px solid #819fa7;
    border-radius: 10px;
    padding: 5px 10px;
  }
  .description {
    flex-grow: 2;
  }

  div {
    align-items: center;
    display: flex;
  }

  i {
    float: right;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  i:hover {
    transform: scale(1.4);
    color: red;
  }
`;
export default Styled;
