import React, { useEffect, useState } from "react";
import Styled from "./Todos.styled";
import AddTodo from "../../components/AddTodo/AddTodo";
import TaskList from "../../components/TaskList/TaskList";
import axios from "axios";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";

function Todos() {
  const [todosList, setTodosList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [statusList, setStatusList] = useState([]);

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const navigate = useNavigate();

  let presentStatus = [];
  let statusIsNotPresent;
  const filteredList = statusList.filter(function (o) {
    statusIsNotPresent = presentStatus.indexOf(o.id) === -1;
    presentStatus.push(o.id);
    return statusIsNotPresent;
  });

  const getTodos = async () => {
    await axios
      .get(`http://localhost:80/todo`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setTodosList(response.data);
        response.data.map((todo) => {
          addStatusToList(todo.statusId);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addStatusToList = async (id) => {
    await axios
      .get(`http://localhost:80/status/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setStatusList((statusList) => [...statusList, response.data]);
      });
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedIn === "true");
    getTodos();
  }, []);

  return !isLoggedIn ? (
    <h1>You should not be here!</h1>
  ) : (
    <Styled>
      <div className="card">
        <h1>ToDo App</h1>
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
        <AddTodo
          getTodos={getTodos}
          categoryList={categoryList}
          setCategoryList={setCategoryList}
        />
        <TaskList
          tasks={todosList}
          getTodos={getTodos}
          categoryList={categoryList}
          filteredList={filteredList}
        />
      </div>
    </Styled>
  );
}

export default Todos;
