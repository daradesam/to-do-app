export default function ToDoCardCompleted({ item, handlePending }) {
    return (
        <div className="card-wrapper-completed">
            <h3>{item}</h3>
            <button className="btn" onClick={()=>handlePending(item)}>Mark as Pending</button>
        </div>
    )
}