const fs=require('fs');
const chalk=require('chalk');



const addNote =(title,body)=>{
   console.log("In Function");
   const allNotes=loadNotes();
   const noteExist=allNotes.find((note)=> note.title===title);
  
   if(noteExist)
   {

     allNotes.push({
        title:title,
        body:body
     })
   save(allNotes);
   console.log("Note Add Succesfully");

   } else{
      console.log("NOte with this Title already Exist...!");
   }

}
const save=(notes)=>{
   const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes=()=>
{try{
   const buffer=fs.readFileSync("notes.json");
   Stringbuffer=buffer.toString();
   return JSON.parse(Stringbuffer);}
   catch(e){
      return []
   }
}
const readNote = (title) => {
   const notes = loadNotes()
   const note = notes.find((note) => note.title === title)

   if (note) {
       console.log(chalk.inverse(note.title))
       console.log(note.body)
   } else {
       console.log(chalk.red.inverse('Note not found!'))
   }
}
const removeNote = (title) => {
   const notes = loadNotes()
   const notesToKeep = notes.filter((note) => note.title !== title)

   if (notes.length > notesToKeep.length) {
       console.log(chalk.green.inverse('Note removed!'))
       saveNotes(notesToKeep)
   } else {
       console.log(chalk.red.inverse('No note found!'))
   }    
}
module.exports={
   addNote:addNote,
   readNote:readNote,
   removeNote:readNote
}
