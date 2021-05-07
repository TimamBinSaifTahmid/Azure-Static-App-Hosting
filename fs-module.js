//Synchronous and Asynchronous Function

const fs=require("fs");

//Write file
fs.writeFileSync('./contents/demoFile.txt','I am Tahmid.I am learning node');

//Append file
fs.appendFileSync('./contents/demoFile.txt','it is fun');

//Rename
fs.rename('./contents/demoFile.txt','./contents/renamedFile.txt',(err)=>{
   if(err){
       console.log(err);
   } 
   else{
       console.log('Successfull');
   }
});

//Read file
console.log('before');
fs.readFile('./contents/renamedFile.txt','utf-8',(err,data)=>{
if(err){
    console.log(err);
}
else{
    fs.appendFile('./contents/renamedFile.txt',' Is this a synchronous process?',(err)=>{
      if(err){
          console.log(err);
      }
    });
    fs.readFile('./contents/renamedFile.txt','utf-8',(err,data)=>{
        if(!err){
            console.log(data);
        }
    });
}
});
console.log('after');

//Delete
fs.unlink('./contents/renamedFile.txt',(err)=>{
    if(!err){
        console.log('Delete successful');
    }
})