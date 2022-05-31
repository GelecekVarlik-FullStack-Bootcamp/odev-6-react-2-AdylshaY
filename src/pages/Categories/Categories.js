import React, { useState, useEffect } from "react";
import AddCategory from "../../components/AddCategory/AddCategory";
import CategoryList from "../../components/CategoryList/CategoryList";
import Styled from "./Categories.styled";
import axios from "axios";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";

function Categories() {
  const [status, setStatus] = useState();
  const [categoriesList, setCategoriesList] = useState([]);

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const navigate = useNavigate();

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

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setStatus(isLoggedIn === "true");
    getCategoriesList();
  }, []);

  return status ? (
    <Styled>
      <h1>Categories</h1>
      <div className="flex-container">
        <Button
          name="To-Do's"
          onClick={() => {
            navigate("/todos");
          }}
        />
        <Button
          name="Categories"
          onClick={() => {
            navigate("/categories");
          }}
        />
      </div>
      <AddCategory
        setCategoriesList={setCategoriesList}
        categoriesList={categoriesList}
      />
      <CategoryList
        categoriesList={categoriesList}
        getCategoriesList={getCategoriesList}
      />
    </Styled>
  ) : (
    <h1>You should not be here!</h1>
  );
}

export default Categories;
