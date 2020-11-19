import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App () {
    const [notes, setNotes] = useState([]);

    function addItem (input) {
        setNotes(prevNotes => {
            return [...prevNotes, input]
        })
    }

    function deleteItem (id) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addItem} />
        {notes.map((note, index) => {
            return (<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteItem}/>)
        })}
        <Footer />
    </div>);
}

export default App;