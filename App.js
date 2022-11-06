import React,{useState} from "react";


function App() {
  const [text,setText]=useState("");
  const [storeitem,setStoreitem]=useState([])
 function handleChange(event){
  const newValue=event.target.value;
 setText(newValue);
 
}
function additem(){
  setStoreitem((prevStoreItem)=>{
    return[...prevStoreItem,text];
  })
  setText("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text}/>
        <button on onClick={additem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {storeitem.map(todoitem=> <li>{todoitem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
