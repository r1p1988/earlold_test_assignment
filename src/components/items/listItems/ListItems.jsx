import React, { useMemo, useState } from "react";
import Item from "components/items/item/Item";
import { getRandomNumber } from "tools/GetRandomNumber";
import "./ListItem.css";

function ListItems({ dataList, setDataList }) {
  const [inputValue, setInputValue] = useState("");

  const handleDeleteItem = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);
    localStorage.setItem("items", JSON.stringify(updatedDataList));
  };

  const userItems = useMemo(() => {
    const storedData = JSON.parse(localStorage.getItem("items"));
    setDataList(storedData);
    return dataList
      ? dataList.map((item, index) => (
          <Item
            key={index}
            item={item}
            index={index}
            handleDeleteItem={handleDeleteItem}
          />
        ))
      : null;
  }, [dataList]);

  const randomNumber = getRandomNumber();

  const handleSumbit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    const newData = { name: inputValue, id: randomNumber, comments: [] };
    const updatedDataList = [...dataList, newData];
    localStorage.setItem("items", JSON.stringify(updatedDataList));
    setDataList(updatedDataList);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Items</h1>
      <form className="form-container" onSubmit={handleSumbit}>
        <input
          className="form-control"
          type="text"
          placeholder="Type name here..."
          name="name"
          required
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button className="btn" type="submit">
          Add New
        </button>
      </form>
      <ul className="list-group">{userItems}</ul>
    </>
  );
}

export default ListItems;
