import React, { useEffect, useState } from "react";
import Styled from "./TaskList.styled";
import Button from "../Button/Button";
import axios from "axios";
import TodoModal from "../TodoModal/TodoModal";

function TaskList({ tasks, categoryList, filteredList, getTodos }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [todoId, setTodoId] = useState();

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const taskList = tasks.map((task, key) => {
    return (
      <section key={key} style={{ display: "contents" }}>
        <Styled key={key}>
          <span className="description" id="desc">
            {task.title}
            <i
              className="fa-solid fa-trash"
              onClick={async () => {
                await axios.delete(`http://localhost:80/todo/${task.id}`, {
                  headers: { Authorization: `Bearer ${token}` },
                  withCredentials: true,
                });
                getTodos();
              }}
            ></i>
          </span>
          <span className="category">
            {categoryList.map((category) => {
              if (category.id === task.categoryId) {
                return category.title;
              }
            })}
          </span>
          {filteredList.map((status, key) => {
            if (status.id === task.statusId) {
              return (
                <span
                  key={key}
                  className="status"
                  style={{ backgroundColor: status.color }}
                >
                  <p>{status.title}</p>
                </span>
              );
            }
          })}
          <Button
            name="Update"
            id={task.id}
            onClick={(e) => {
              setTodoId(e.target.id);
              setIsOpenModal(true);
            }}
          />
        </Styled>
        {isOpenModal && (
          <TodoModal
            setIsOpenModal={setIsOpenModal}
            todoId={todoId}
            taskList={tasks}
            getTodos={getTodos}
          />
        )}
      </section>
    );
  });

  return <>{taskList}</>;
}

export default TaskList;
