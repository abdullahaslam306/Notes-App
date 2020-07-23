const chalk=require('chalk');
const yargs=require('yargs');
const notes=require('./getNotes.js');


console.log(yargs.argv)

 yargs.command({
     command:'add',
     describe:"This will add some notes",
     builder: {
      title:{
          describe:'Notes Title',
          demandOption:true,
          type:'string'

      },
      body:{
        describe:"Body For Notes",
        demandOption:true,
        type:'string'
      }
     },
     handler(argv)
     {
         
      notes.addNote(argv.title,argv.body);
     }
 })
 yargs.command({
    command:'read',
    describe:"This will read some notes",
    builder: {
     title:{
         describe:'Notes Title',
         demandOption:true,
         type:'string'

     }
    },
    handler(argv)
    {
        
     notes.readNote(argv.title);
    }
})

yargs.parse();