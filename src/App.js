import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import NotesListData from "./Components/NotesListData";
import HeaderFileToggle from "./HeaderFileToggle";
import "./index.css";
import SearchBar from "./SearchBar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note: Profile Data!",
      date: "15/05/2022",
    },
    {
      id: nanoid(),
      text: "Second note: Login Data!",
      date: "16/05/2022",
    },
    {
      id: nanoid(),
      text: "Third note : Professional Data!",
      date: "17/05/2022",
    },
    {
      id: nanoid(),
      text: "Fourth note : Info About College!",
      date: "19/05/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const addNewNote = (note) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: note,
      date: date.toLocaleDateString(),
    };
    const NewNoteArray = [...notes, newNote];
    setNotes([...NewNoteArray]);
  };

  const deleteNote = (id) => {
    const newNotesArray = notes.filter((item) => item.id !== id);
    setNotes([...newNotesArray]);
  };

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('react-notes'));
  console.log("Get data -->",getData);
    if(getData){
      setNotes(getData);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes', JSON.stringify(notes));
    console.log("Set data---->",notes);
  },[notes]);
// useEffect(() => {
// 		const savedNotes = JSON.parse(
// 			localStorage.getItem('react-notes-app-data')
// 		);

// 		if (savedNotes) {
// 			setNotes(savedNotes);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		localStorage.setItem(
// 			'react-notes-app-data',
// 			JSON.stringify(notes)
// 		);
// 	}, [notes]);

  return (
    <div className={`${darkTheme && 'dark-theme'}`}>
      <div className="container">
        <HeaderFileToggle setDarkTheme={setDarkTheme} />
        <SearchBar setSearchText={setSearchText} />
        <NotesListData
          notes={notes.filter((item) =>
            item.text.toLowerCase().includes(searchText)
          )}
          handleNewNoteInApp={addNewNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
