import React from 'react';

function TodoCheck({theTodo, notes, setNotes}) {
    const allNotes = [...notes];
    const index = theTodo.id;
    function markNote() {
        allNotes[index].isFinished = !allNotes[index].isFinished
        setNotes(allNotes);
    }
    return <input type="checkbox" onClick={markNote}></input>
}

export default TodoCheck;