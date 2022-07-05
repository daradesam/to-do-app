export default function ToDoCardPending({ item, handleComplete }) {
    return (
        <div className="card-wrapper-pending">
            <h3>{item}</h3>
            <button className="btn" onClick={()=>handleComplete(item)}>Mark as Complete</button>
        </div>
    )
}