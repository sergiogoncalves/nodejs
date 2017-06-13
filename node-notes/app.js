const notes = require('./notes.js')

//Lodash - Estudar essa biblioteca
const _ = require('lodash')
//console.log(_.isString(true))
//console.log(_.isString('Sergio'))
var filteredArray = _.uniq(['One', 'One', 'One','two','three',"Sérgio","Sérgio"])
//console.log(filteredArray)

//--------------------------------------------
// Read parameter by input  node app.js list
var command = process.argv[2];
console.log('Command', command)

if(command === 'add'){
    //console.log('Adding new note')
}else if(command === 'list'){
    console.log('Listing all note')
}else{
    //console.log('Command not recognized')
}

//node app.js add --title="secrets 2"
//console.log(process.argv)

//-------------------------------------------
//Yargs
console.log('------------------Yargs-------------------------')

const yargs = require('yargs')
const argv = yargs.argv
//console.log(argv)

if(command === 'add'){
    console.log('Adding new note')
    notes.addNote(argv.title, argv.body)
}else if(command === 'list'){
   notes.getAll();
}else if(command === 'remove'){
   notes.remove(argv.title);
}
else if(command === 'read'){
   notes.read(argv.title);
}else{
    console.log('Command not recognized')
}


