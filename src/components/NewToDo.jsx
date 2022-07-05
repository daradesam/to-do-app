import { useState } from "react"

export default function NewToDo({handleCLick}) {
    const [input, setInput] = useState("");
    return (
        <>
            <input type="text" value={input} onChange={(e) => {
                setInput(e.target.value)
            }} placeholder="Type new todo" />
            <button className="btn" onClick={()=>{handleCLick(input); setInput("")}}>Add ToDo</button>
        </>
    )
}