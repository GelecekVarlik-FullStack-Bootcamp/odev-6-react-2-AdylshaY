import React, { useState } from "react";
import Styled from "./AddCategory.styled";
import Button from "../Button/Button";
import axios from "axios";

function AddCategory({ setCategoriesList }) {
  const [categoryTitle, setCategoryTitle] = useState("");

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const getCategoriesList = async () => {
    await axios
      .get(`http://localhost:80/category`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setCategoriesList(response.data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryTitle.length <= 4) {
      alert("Description length must be bigger than 5");
      return null;
    }
    try {
      await axios.post(
        "http://localhost:80/category",
        { title: categoryTitle },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setCategoryTitle("");
      getCategoriesList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Styled>
        <form className="flex-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="addTodo"
            id="todo-desc"
            placeholder="Write your category"
            onChange={(e) => setCategoryTitle(e.target.value)}
            value={categoryTitle}
          />
          <Button name="Add" />
        </form>
      </Styled>
    </>
  );
}

export default AddCategory;
