const fs = require("fs");
const notes = require("./notes.js");
const yargs = require("yargs");

//Customize yargs version

yargs.version("1.1.0");

//Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      description: "Title of the note",
      demandOption: true,
      type: "string"
    },
    body: {
      description: "Contents of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

//Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of the note to remove",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
});

//List out notes

yargs.command({
  command: "list",
  describe: "List out the notes",
  handler() {
    notes.listNotes();
  }
});

//Read notes

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
