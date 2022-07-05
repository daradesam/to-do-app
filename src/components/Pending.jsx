import ToDoCardPending from "./ToDoCardPending"

export default function Pending({ toDoList, handleComplete }) {
    return (
        <div className="task-list-pending">
            <h1 className="pending-heading">Pending Tasks</h1>
            {toDoList.length !=0 ? 
            toDoList.map((item)=>{return <ToDoCardPending item={item} handleComplete={handleComplete}/>}): <h3>No pending tasks</h3>}
        </div>
    )
}