import React, { useState } from "react";
import "./ListComment.css";
import CommentItem from "../comment/CommentItem";

function ListComment({ dataList, activeItem }) {
  const [commentValue, setCommentValue] = useState({ body: "", color: "" });

  const handleSumbit = (event) => {
    event.preventDefault();
    if (activeItem) {
      const updatedComments = [...activeItem.comments, commentValue];
      activeItem.comments = updatedComments;

      const updatedData = dataList.map((item) => {
        if (item.id === activeItem.id) {
          return activeItem;
        }
        return item;
      });
      localStorage.setItem("activeItem", JSON.stringify(activeItem));
      localStorage.setItem("items", JSON.stringify(updatedData));
    }

    setCommentValue({ body: "", color: "" });
  };

  const handleTextAreaChange = (e) => {
    setCommentValue((prevCommentValue) => ({
      ...prevCommentValue,
      body: e.target.value,
    }));
  };

  const handleColorChange = (e) => {
    setCommentValue((prevCommentValue) => ({
      ...prevCommentValue,
      color: e.target.value,
    }));
  };

  return (
    <>
      <h1>Comments #{activeItem ? activeItem.id : ""}</h1>
      {activeItem
        ? activeItem.comments.map((item, index) => (
            <CommentItem item={item} key={index} />
          ))
        : null}
      <form onSubmit={handleSumbit}>
        <input
          className="comment-form-control"
          type="color"
          name="color"
          value={commentValue.color}
          onChange={handleColorChange}
        ></input>
        <textarea
          className="comment-form-control"
          placeholder="Type comment here..."
          required
          name="body"
          value={commentValue.body}
          onChange={handleTextAreaChange}
        ></textarea>
        <button className="btn-comment" type="submit">
          Add New
        </button>
      </form>
    </>
  );
}

export default ListComment;
