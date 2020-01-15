const fs = require("fs");
// const chalk = require("chalk");
const chalkColors = require("./chalkColors.js");

//Add Notes------------------------------------------

const addNotes = (title, body) => {
  const notes = loadNotes();
  const findDuplicateNote = notes.find(note => note.title === title);
  if (!findDuplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalkColors.success("Note added!"));
  } else {
    console.log(chalkColors.warning("Note title taken!"));
  }
};
//----------------------------------------------

//Remove Notes-------------------------

const removeNotes = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalkColors.success("Note removed!"));
  } else {
    console.log(chalkColors.error("Note doesn't exist!"));
  }
};
//------------------------------

//List Notes---------------------

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalkColors.error("No notes to display!"));
  } else {
    console.log(chalkColors.success("Your notes are..."));
    notes.forEach(note => {
      console.log(chalkColors.success(note.title));
    });
  }
};
//---------------------------

const readNote = title => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title === title);
  if (!foundNote) {
    console.log(chalkColors.error("Note not found!"));
  } else {
    console.log(chalkColors.success(foundNote.title));
    console.log(foundNote.body);
  }
};

//Save notes function--------------
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//Load Notes Function------------
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
//--------------------------------

//Export-----------------------
module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};
