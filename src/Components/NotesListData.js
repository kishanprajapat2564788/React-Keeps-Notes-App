import React from 'react'
import AddNewNote from './AddNewNote';
import NoteFile from './NoteFile';

const NotesListData = ({notes, handleNewNoteInApp, deleteNote}) => {
  return (
    <div className='note-list'>
        {notes.map(item =>{
            return(
            <NoteFile key= {item.id} text={item.text} date={item.date} id={item.id} deleteNote={deleteNote}/>
            )
        })}
        <AddNewNote handleNewNoteInApp={handleNewNoteInApp}/>
    </div>
  )
}

export default NotesListData;