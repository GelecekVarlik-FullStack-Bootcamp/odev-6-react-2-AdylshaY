import React, { useEffect, useState } from "react";
import Styled from "./TodoModal.styled";
import Button from "../Button/Button";
import axios from "axios";

function TodoModal({ setIsOpenModal, taskList, todoId, getTodos }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const task = taskList.find((item) => {
    if (item.id === Number(todoId)) {
      return item;
    }
  });

  const getCategories = async () => {
    await axios
      .get(`http://localhost:80/category `, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setCategoryList(response.data);
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
      });
  };

  const getTodoById = async () => {
    await axios
      .get(`http://localhost:80/todo/${todoId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setTodoTitle(response.data.title);
        setSelectedCategory(response.data.categoryId);
        setSelectedStatus(response.data.statusId);
      });
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
      alert("Title length must be bigger than 5");
      return null;
    }
    try {
      await axios.put(
        `http://localhost:80/todo/${todoId}`,
        {
          title: todoTitle,
          categoryId: Number(selectedCategory),
          statusId: Number(selectedStatus),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      getTodos();
      setIsOpenModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoById();
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getStatus(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <Styled>
      <div className="darkBG" onClick={() => setIsOpenModal(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Update</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpenModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modalContent">
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
                value={selectedCategory}
              >
                {categoryOptions}
              </select>
              <select
                name="status"
                id="status"
                onChange={(e) => setSelectedStatus(Number(e.target.value))}
                value={selectedStatus}
              >
                {statusOptions()}
              </select>
              <Button name="Update" />
            </form>
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default TodoModal;
