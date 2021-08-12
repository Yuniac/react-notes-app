import React from 'react';
import TodoCheck from "./TodoCheck";

function Todo({theTodo, notes, setNotes}) {
    const {note, id, isFinished} = theTodo
    return (
        <>
        <li id={id}> {isFinished ? <strong><b style={{textDecoration: "line-through"}}>{note}</b></strong> : note }</li>
        <TodoCheck theTodo={theTodo} notes={notes} setNotes={setNotes}/>
        </>
    )
}

export default Todo;