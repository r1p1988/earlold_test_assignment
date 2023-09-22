import ListItems from "components/items/listItems/ListItems";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import ListComment from "components/comments/listComments/ListComment";

export const ActiveItemContext = createContext();

function App() {
  const [dataList, setDataList] = useState([]);
  const [activeItem, setActiveItem] = useState("");

  const contextValues = {
    activeItem,
    setActiveItem,
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("items")) || [];
    setDataList(storedData);
    const storedActiveItem =
      JSON.parse(localStorage.getItem("activeItem")) || [];
    setActiveItem(storedActiveItem);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1">
          <aside className="react-aside">
            <h2>DAYRY APP</h2>
            <div>Comment with no sense</div>
          </aside>
        </div>

        <div className="col-2">
          <main className="main-container">
            <ActiveItemContext.Provider value={contextValues}>
              <div className="react-items-container">
                <div className="react-items">
                  <ListItems dataList={dataList} setDataList={setDataList} />
                </div>
                <div className="react-comments">
                  <ListComment dataList={dataList} activeItem={activeItem} />
                </div>
              </div>
            </ActiveItemContext.Provider>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
