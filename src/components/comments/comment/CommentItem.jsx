import React from "react";
import "./CommentItem.css";

function CommentItem({ item }) {
  return (
    <div className="card">
      <div
        className="card-color"
        style={{
          background: item.color ? `${item.color}` : "rgb(0, 0, 0)",
        }}
      ></div>
      <div className="card-body">
        <pre className="card-text">{item.body}</pre>
      </div>
    </div>
  );
}

export default CommentItem;
