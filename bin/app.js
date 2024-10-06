#!/usr/bin/env node

const yargs = require('yargs');
const notes = require('../notes.js');

//Help 

// yargs.command({
//     command:'--help',
//     describe:"List of commands",
//     handler(){
//         console.log(`
//             Available commands:
//               add     Add a new item
//                       --name  [string] [required] Name of the item
//                       --price [number] [default: 0] Price of the item
            
//               remove  Remove an item
//                       --id    [number] [required] ID of the item to remove
            
//               list    List all items
            
//               commands  Show this list of commands
//                 `);
//     }
// })

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// List command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
});

// Read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Delete command
yargs.command({
  command: 'delete',
  describe: 'Delete a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.deleteNote(argv.title);
  }
});


yargs.parse();
yargs.help();
