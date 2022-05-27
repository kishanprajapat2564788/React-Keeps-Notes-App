import React, { useState} from "react";

const AddNewNote = ({handleNewNoteInApp}) => {
  const [newNoteText, setNewNoteText] = useState('');
  const CharacterLength = 300;

  const HandleInputChange = (value) => {
    if(CharacterLength - value.length >= 0) {
      setNewNoteText(value);
    }
  }

  const handleSave = () => {
    if(newNoteText.trim().length > 0) {
      handleNewNoteInApp(newNoteText);
      setNewNoteText('');
    }
  }
  return (
    <div className="Note-file custom-css">
      <textarea
        rows={8}
        cols={12}
        placeholder="Type to add a new note..."
        value={newNoteText}
        onChange={e => HandleInputChange(e.target.value)}
      ></textarea>
      <div className="note_footer">
        <small>{CharacterLength - newNoteText.length} Remaining</small>
        <button className="Save-Button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddNewNote;
