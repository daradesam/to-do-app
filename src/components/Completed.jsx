import ToDoCardCompleted from "./ToDoCardCompleted"

export default function Completed({ completed, handlePending }) {
    return (
        <div className="task-list-completed">
            <h1 className="completed-heading">Completed Tasks</h1>
            {completed.length != 0 ?
            completed.map((item) => { return <ToDoCardCompleted item={item} handlePending={handlePending} /> }) : <h3>No completed tasks to show</h3>}
        </div>
    )
}