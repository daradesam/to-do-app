import logo from './logo.svg';
import './App.css';
import NewToDo from './components/NewToDo';
import { useEffect, useState } from 'react';
import Pending from './components/Pending';
import Completed from './components/Completed';

function getPendingList(){
  let list = localStorage.getItem("pendingList");
  if(list){
    return JSON.parse(localStorage.getItem("pendingList"));
  }
  else{
    return [];
  }
}

function getCompletedList(){
  let list = localStorage.getItem("completedList");
  if(list){
    return JSON.parse(localStorage.getItem("completedList"));
  }
  else{
    return [];
  }
}

function App() {
  const [toDoList, setToDoList] = useState(getPendingList());
  const [completed, setCompleted] = useState(getCompletedList());

  function handleComplete(newCompleted){
    setCompleted([...completed, newCompleted]);
    setToDoList(toDoList.filter((item)=>{return item!=newCompleted}))
  }

  function handleClick(inp){
    setToDoList([...toDoList, inp]);
  }

  function handlePending(newPending){
    setToDoList([...toDoList, newPending]);
    setCompleted(completed.filter((item)=>{return item!=newPending}))
  }

  useEffect(()=>{
    localStorage.setItem("pendingList", JSON.stringify(toDoList));
    localStorage.setItem("completedList", JSON.stringify(completed))
  }, [toDoList, completed]);

  return (
    <div className="App">
      <NewToDo handleCLick={handleClick}/>
      <div className='task-wrapper'>
        <Pending toDoList={toDoList}  handleComplete={handleComplete}/>
        <Completed completed={completed} handlePending={handlePending}/>
      </div>
      {/* {toDoList.map((item)=>{return <h1>{item}</h1>})} */}
    </div>
  );
}

export default App;
