import React, { useEffect, useState } from "react";
import Styled from "./CategoryModal.styled";
import Button from "../Button/Button";
import axios from "axios";

function CategoryModal({ setIsOpenModal, categoriesList, categoryId }) {
  const [statusTitle, setStatusTitle] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [statusList, setStatusList] = useState([]);

  const token = JSON.parse(localStorage.getItem("user-data")).token;

  const category = categoriesList.find((item) => {
    if (item.id === Number(categoryId)) {
      return item;
    }
  });

  const getStatusList = async () => {
    await axios
      .get(`http://localhost:80/status?categoryId=${categoryId} `, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setStatusList(response.data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (statusTitle.length <= 1) {
      alert("Title length must be bigger than 1");
      return null;
    }
    try {
      await axios.post(
        "http://localhost:80/status",
        {
          title: statusTitle,
          categoryId: Number(categoryId),
          color: statusColor,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setStatusTitle("");
      setStatusColor("");
      getStatusList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStatusList();
  }, []);

  return (
    <Styled>
      <div className="darkBG" onClick={() => setIsOpenModal(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{category.title}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpenModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modalContent">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="addStatus"
                id="addStatus"
                placeholder="Status Title"
                onChange={(e) => setStatusTitle(e.target.value)}
                value={statusTitle}
              />
              <input
                type="text"
                name="statusColor"
                id="statusColor"
                placeholder="Status Color"
                onChange={(e) => setStatusColor(e.target.value)}
                value={statusColor}
              />
              <Button name="Add" />
            </form>
            {statusList.map((status, key) => {
              return (
                <div className="status-div" key={key}>
                  <span className="status-title" id="desc">
                    {status.title}
                    <i
                      className="fa-solid fa-trash"
                      onClick={async () => {
                        await axios.delete(
                          `http://localhost:80/status/${status.id}`,
                          {
                            headers: { Authorization: `Bearer ${token}` },
                            withCredentials: true,
                          }
                        );
                        getStatusList();
                      }}
                    ></i>
                  </span>
                  <span className="status-color">{status.color}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default CategoryModal;
