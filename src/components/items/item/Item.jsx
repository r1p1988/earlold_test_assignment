import React, { useContext, useEffect, useState } from "react";
import { ActiveItemContext } from "App";
import "./Item.css";

function Item({ item, index, handleDeleteItem }) {
  const { activeItem, setActiveItem } = useContext(ActiveItemContext);
  const [activeComment, setActiveComment] = useState(0);

  useEffect(() => {
    if (activeItem.id === item.id) {
      setActiveComment(activeItem.comments.length);
    } else {
      setActiveComment(item.comments.length);
    }
  }, [activeItem, item]);

  const handleActiveItem = () => {
    if (activeItem.id !== item.id) {
      setActiveItem(item);
      localStorage.setItem("activeItem", JSON.stringify(item));
    }
  };

  return (
    <>
      <li
        className={`${
          activeItem.id === item.id ? "active-item" : ""
        } item list-group-item `}
        key={index}
        onClick={() => handleActiveItem()}
      >
        {item.name}
        <span className={`badge badge-pill badge-info`}>{activeComment}</span>
        <button
          className={`item-btn ${activeItem ? "active-item-btn" : ""}`}
          onClick={() => {
            handleDeleteItem(index);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default Item;
