console.log("welcome to notes.js");
//  console.log(module);
// module.exports.addNote= (a,b)=>{
//     return a + b;
//
// };

const fs = require("fs");

let fetchNote= ()=> {
    try {
        let dataRead = fs.readFileSync('swapnil.json');
        return JSON.parse(dataRead);           //here we are storing the data in a array
    } catch (e) {
    return [];
    }
};
 let saveNotes = (notes)=>{
     fs.writeFileSync('swapnil.json',JSON.stringify(notes));
 };

let addNote = (title, body)=>{
    let notes= fetchNote();
    let note = {
        title,
        body
    };

    let duplicateTitleNotes = notes.filter((note)=> note.title === title);
    let duplicateBodyNotes = notes.filter((note)=> note.body === body);

    if (duplicateTitleNotes.length === 0 || duplicateBodyNotes === 0){
        notes.push(note);
        saveNotes(notes);
        return `the new entry is pushed \ntitle: ${title} \nbody: ${body}  `;

    }else {
        return "the new entry is not pushed";
    }
};







let getNote = (title)=>{};

let removeNote = (title)=>{
    let notes = fetchNote();
    let removeNoteTitle = notes.filter((note)=> note.title !== title);
    saveNotes(removeNoteTitle);
    if (notes.length === removeNoteTitle.length){
        return 'false';
    }else {
        return 'true';
    }
};

module.exports= {
    addNote,
    removeNote

};