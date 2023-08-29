import React,{useState} from 'react'
import styles from './index.module.css'
function NameInput(props) {
    const [inputText, setInputText]= useState("");

    const onEnterClick=(e)=> {
      e?.keyCode===13 && props.addList(inputText)  
      e?.keyCode===13 && setInputText("");
    }
  return (
    <div className="input-container">
        <input type="text" value={inputText} className={styles.inputBox} placeholder='Enter your List Name'
           onChange={e=>{setInputText(e.target.value)}}  onKeyDown={onEnterClick}/>
        <button className={styles.addBtn} onClick={()=>{props.addList(inputText)
         setInputText("")}}>Add Name</button>

      
        
    </div>
  )
}

export default NameInput