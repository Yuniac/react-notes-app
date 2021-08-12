import react from 'react';
import Todo from "./Todo"
import "./App.css"

function App() {
  const [notes, setNotes] = react.useState([
    {
      note: "Find a job",
      isFinished: false,
      id: 0
    }, 
    {
      note: "Stop being dead poor",
      isFinished: false,
      id: 1
    }]
  )
  const [index, setIndex] = react.useState(2);
  const handleSubmit = e => {
    e.preventDefault();
    let newNote = e.target.firstChild.value;
    setIndex(index => index +=1)
    setNotes([...notes, {id: index, isFinished: false, note: newNote}])
    e.target.firstChild.value= "";
  }
  return (
    <div>
      <ul>
        {notes.map((note) => {
          return <Todo key={note.id} theTodo={note} notes={notes} setNotes={setNotes}/>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
      <input type="input" placeholder="add a new note..." ></input>
      </form>
    </div>
  )
}



export default App;