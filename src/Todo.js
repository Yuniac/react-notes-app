import React from 'react';
import TodoCheck from "./TodoCheck";
import TodoDelete from "./TodoDelete"

function Todo({theTodo, notes, setNotes}) {
    const {note, id, isFinished} = theTodo
    return (
        <>
        <li id={`note-id-${id}`}>
        <TodoDelete id={id} notes={notes} setNotes={setNotes}/> 
        {isFinished ? <strong><b style={{textDecoration: "line-through"}}>{note}</b></strong> : note }
        <TodoCheck theTodo={theTodo} notes={notes} setNotes={setNotes}/>
        </li>
        </>
    )
}

export default Todo;