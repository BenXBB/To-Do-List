import React from "react";
import { useState } from "react";

function ToDoItem(props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone(prev => {
            return !prev;
        });
    }

    return (
        <div onClick={handleClick}>
        <li>
        <span style={{textDecoration: isDone ? "line-through" : "none"}}>
            {props.text}
        </span>
        {isDone ? "     ✔" : ""}
        </li>
        </div>
    );
    }

export default ToDoItem;