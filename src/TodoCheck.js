import React from 'react';

function TodoCheck({theTodo, notes, setNotes}) {
    const allNotes = [...notes];
    const index = theTodo.id;
    function markNote() {
        const noteToEditindex = allNotes.findIndex((note) => {
            return note.id === index
        })
        allNotes[noteToEditindex].isFinished = !allNotes[noteToEditindex].isFinished
        setNotes(allNotes);
    }
    return <input type="checkbox" onClick={markNote} style={{marginLeft: "1rem", marginTop: "1rem", marginBottom: "1rem"}}></input>
}

export default TodoCheck;