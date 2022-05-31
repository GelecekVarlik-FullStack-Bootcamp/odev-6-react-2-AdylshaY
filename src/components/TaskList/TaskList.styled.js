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
    align-items: center;
  }
  .description {
    flex-grow: 2;
    transition-duration: 0.5s;
  }
  i {
    float: right;
    font-size: 20px;
    cursor: pointer;
    margin-right: 10px;
  }

  .description:hover {
    background-color: rgba(29, 53, 87, 0.8);
    color: white;
  }
  .description-completed {
    background-color: #a8dadc;
    text-decoration-line: line-through;
  }
  .category {
    width: 15%;
    text-align: center;
  }
  .status {
    width: 15%;
    text-align: center;
    opacity: 0.65;
  }
  .status:hover {
    opacity: 1;
  }
  div {
    align-items: center;
    display: flex;
  }
  p {
    display: inline;
    color: white;
    opacity: 1;
  }
`;
export default Styled;
