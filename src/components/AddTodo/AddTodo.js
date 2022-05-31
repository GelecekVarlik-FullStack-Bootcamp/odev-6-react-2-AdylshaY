import React, { useState, useEffect } from "react";
import Styled from "./AddTodo.styled";
import Button from "../Button/Button";
import axios from "axios";

function AddTodo({ getTodos, categoryList, setCategoryList }) {
  const [statusList, setStatusList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedStatus, setSelectedStatus] = useState();

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const getCategories = async () => {
    await axios
      .get(`http://localhost:80/category `, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setCategoryList(response.data);
        setSelectedCategory(response.data[0].id);
      });
  };

  const getStatus = async (id) => {
    await axios
      .get(`http://localhost:80/status?categoryId=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setStatusList(response.data);
        setSelectedStatus(response.data[0].id);
      }).catch((e) => {
        console.log(e)
      })
  };

  const categoryOptions = categoryList?.map((category, key) => {
    return (
      <option key={key} value={category.id}>
        {category.title}
      </option>
    );
  });

  const statusOptions = () => {
    if (statusList) {
      return statusList.map((status, key) => {
        return (
          <option key={key} value={status.id}>
            {status.title}
          </option>
        );
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoTitle.length <= 4) {
      alert("Description length must be bigger than 5");
      return null;
    }
    try {
      await axios.post(
        "http://localhost:80/todo",
        {
          title: todoTitle,
          categoryId: selectedCategory,
          statusId: selectedStatus,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setTodoTitle("");
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getStatus(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <Styled>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addTodo"
          id="todo-desc"
          placeholder="Write your task"
          onChange={(e) => setTodoTitle(e.target.value)}
          value={todoTitle}
        />
        <select
          name="category"
          id="category"
          onChange={(e) => {
            getStatus(Number(e.target.value));
            setSelectedCategory(Number(e.target.value));
          }}
        >
          {categoryOptions}
        </select>
        <select
          name="status"
          id="status"
          onChange={(e) => setSelectedStatus(Number(e.target.value))}
        >
          {statusOptions()}
        </select>
        <Button name="Add" />
      </form>
    </Styled>
  );
}

export default AddTodo;
