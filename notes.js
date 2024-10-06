const fs = require('fs');
const notesDir = './notes';

if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir);
}

// Add note
const addNote = (title, body) => {
  const filePath = `${notesDir}/${title}.txt`;
  if (fs.existsSync(filePath)) {
    console.log(`Note "${title}" already exists.`);
    return;
  }
  fs.writeFileSync(filePath, body);
  console.log(`Note "${title}" added successfully!`);
};

// List notes
const listNotes = () => {
  const files = fs.readdirSync(notesDir);
  console.log("Your Notes:");
  files.forEach(file => {
    console.log("Note :" + file.replace('.txt', ''));
  });
};

// Read note
const readNote = (title) => {
  const filePath = `${notesDir}/${title}.txt`;
  if (fs.existsSync(filePath)) {
    const note = fs.readFileSync(filePath, 'utf-8');
    console.log(`Note: ${title}\n${note}`);
  } else {
    console.log(`Note "${title}" not found.`);
  }
};

// Delete note
const deleteNote = (title) => {
  const filePath = `${notesDir}/${title}.txt`;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Note "${title}" deleted successfully.`);
  } else {
    console.log(`Note "${title}" not found.`);
  }
};

module.exports = {
  addNote,
  listNotes,
  readNote,     
  deleteNote,
};
