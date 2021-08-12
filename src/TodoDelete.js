import React from 'react';

function TodoDelete({id, notes, setNotes}) {
    function removeNote(noteId) {
        const allNotes = [...notes];
        const noteToRemoveIndex = allNotes.findIndex((note) => {
            return note.id === noteId
        })
        allNotes.splice(noteToRemoveIndex, 1);
        setNotes(allNotes)
    }
    return (
        <button style={{borderRadius: 0, padding: "5px", marginRight: "1rem"}} onClick={()=> removeNote(id)} id={`delete-button-${id}`}>X</button>
    )
}

export default TodoDelete;