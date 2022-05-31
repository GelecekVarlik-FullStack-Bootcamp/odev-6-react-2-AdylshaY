import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Styled from "./CategoryList.styled";
import CategoryModal from "../CategoryModal/CategoryModal";

function CategoryList({ categoriesList, getCategoriesList }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState();

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const categories = categoriesList.map((category, key) => {
    return (
      <section key={key} style={{ display: "contents" }}>
        <Styled>
          <span className="description">
            {category.title}
            <i
              className="fa-solid fa-trash"
              onClick={() => {
                axios.delete(`http://localhost:80/category/${category.id}`, {
                  headers: { Authorization: `Bearer ${token}` },
                  withCredentials: true,
                });
                getCategoriesList();
              }}
            ></i>
          </span>
          <Button
            id={category.id}
            name="Update"
            onClick={(e) => {
              setIsOpenModal(true);
              setCategoryId(e.target.id);
            }}
          />
        </Styled>
        {isOpenModal && (
          <CategoryModal
            setIsOpenModal={setIsOpenModal}
            categoriesList={categoriesList}
            categoryId={categoryId}
          />
        )}
      </section>
    );
  });

  return <>{categories}</>;
}

export default CategoryList;
