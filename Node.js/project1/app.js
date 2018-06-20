// console.log('starting app');
//
// const fs = require("fs");
// const os = require("os");
// const lodash = require("lodash");
//
//
// const notes = require('./notes');

// exArray = [1,2,'swapnil',3,1,4,'swapil',"swapnil",2,'narwade','neil'];
// filteredArray = lodash.uniq(exArray);
// console.log(filteredArray);


//----------------------------------------------------------------
// console.log(lodash().isString(true));
// console.log(lodash().isString("fuck you too"));
//----------------------------------------------------------------
// var note = notes.addNote(5,6);
// console.log(note);
// let user = os.userInfo();
// fs.appendFile('swapnil.txt',`hello ${user.username}`, (err)=>{
//     if (err) {
//         console.log(err);
//     }
// });
//---------------------------------------------------------------

console.log('starting app');

const fs = require("fs");
const os = require("os");
const lodash = require("lodash");
const yargs = require("yargs");

const notes = require('./notes');


// console.log(process.argv);
const command = process.argv[2];
const argv = yargs.argv;

console.log("command:", command);
console.log("process:", process.argv);
console.log("yargs:",argv);



 if (command ==='list'){
     console.log("listing all the notes");
 } else if (command === 'add'){
     let note = notes.addNote(argv.title, argv.body);
     console.log(note);

 } else if(command==='read'){

     console.log("reading the notes");
 } else if( command==='remove'){
     note = notes.removeNote(argv.title);
     console.log(note);
     if (note === 'true') {
         console.log("removing the notes");
     }else {
         console.log("did not removed the notes");
     }
 } else {
     console.log("command is not recognised")
 }
