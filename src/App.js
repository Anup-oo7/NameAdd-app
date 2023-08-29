import React, { useState } from "react";
import "./App.css";
//import styles from "./index1.module.css";
import NameInput from "./component/inputBox/Index";
import Header from "./component/Header/Index";

function App() {
  const [listName, setListName] = useState([]);

  let addList = (inputText) => {
    if (inputText.length > 0) 
    setListName([...listName, inputText])
  else(alert('Type Name to add'))
  }

  const deleteHandler=(id)=>{
    const newList =listName.filter((val,ind)=>{
      return id!==ind
    })
    setListName(newList)
  }
  return (
    <>
      <Header>header</Header>
      <div className="main-container">
        <div className="centre-container">
          <NameInput addList={addList} />
          {listName.map((listItem, ind) => {
            return <li key={ind} className="listItem">{listItem}<button className="deleteItem" onClick={()=>deleteHandler(ind)}>Delete</button></li>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
