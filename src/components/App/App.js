import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { notes } from '../../utils/constants.js';
import AllContent from '../AllContent/AllContent';
import ActiveContent from '../ActiveContent/ActiveContent';
import CompletedContent from '../CompletedContent/CompletedContent';
import Layout from '../Layout/Layout';


function App() {

  const [noteContent, setNoteContent] = React.useState(notes);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    checkCounter()
  }, [noteContent])

  function handleNodeClick(id, boolean) {
    const editedNoteContent = noteContent.map((note) => {
      if (note.id === id) {
        note.completed = boolean;
      }

      return note
    })
    setNoteContent(editedNoteContent)
  }

  function handleNoteAdd(note) {
    setNoteContent([note, ...noteContent])
  }

  function filterNotes() {
    const activeNotes = noteContent.filter((note) => {
      return !note.completed
    })

    return activeNotes
  }

  function checkCounter() {
    const activeNotes = filterNotes();
    const numberCompletedNotes = noteContent.length - activeNotes.length;
    setCounter(numberCompletedNotes)
  }

  function cleanCompleted() {
    const activeNotes = filterNotes();
    setNoteContent(activeNotes)
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout counter={counter} handleNoteAdd={handleNoteAdd} cleanCompleted={cleanCompleted} />}>
          <Route index element={<AllContent noteContent={noteContent} handleNodeClick={handleNodeClick} />} />
          <Route path="active" element={<ActiveContent noteContent={noteContent} handleNodeClick={handleNodeClick} />} />
          <Route path="completed" element={<CompletedContent noteContent={noteContent} handleNodeClick={handleNodeClick} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
