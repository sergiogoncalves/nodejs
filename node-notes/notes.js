console.log('Starting notes.js')

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes')
};

var remove = (title) => {
    console.log('Removing note called: ' + title)
};

var read = (title) => {
    console.log('Reading note called: ' + title)
};

module.exports = {
  addNote,
  getAll,
  remove,
  read

};