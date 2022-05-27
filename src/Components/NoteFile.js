import React from 'react'

const NoteFile = ({text,id,date,deleteNote}) => {
  return (
    <div className='Note-file'>
        <span>
            {text}
        </span>
        <div className='note_footer'>
            <small>{date}</small>
            <i className="fa-solid fa-trash custom-button" onClick={() => deleteNote(id)}></i>
        </div>

    </div>
  )
}

export default NoteFile;