import './App.css';
import React, { useState } from 'react'


function App() {
  const [text, settext] = useState("")
  const [note, setNote] = useState([])

  const handle_Add = (e) => {
    e.preventDefault()
    console.log(text);
    setNote(current => [...current,text]);
    settext('')
    console.log(note)
  }
  return (
    <>
    <form>
      <input className='op' type='text' value={text} onChange={(e) => settext(e.target.value)}></input>
      <button type="submit" onClick={handle_Add}>add</button>
    </form>

    {note.map((item,index)=>{
      return(
        <p key={index}>{item}</p>
      )
    })}
    <button className='op' onClick={()=>setNote([])}>
    clear note
    </button>
    </>
  );
}

export default App;
