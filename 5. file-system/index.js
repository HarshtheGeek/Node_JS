// New things that we learnt : existsync, mkdirSync, writeFileSync, readFileSync, utf8
const fs = require('fs');
const path = require('path');


// SYNC WAY OF WRITING THE CODE

// How to create a folder 
const datafolder = path.join(__dirname,"data");
if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log("The folder has been created successfully")
}

// How to create a .txt file inside the folder
const textfile = path.join(datafolder,"Example.txt")
fs.writeFileSync(textfile,"Hello this my first demo file using sync method");
console.log("The file has been created inside the datafolder successfully")


// How to read the content inside of the .txt file
const readData = fs.readFileSync(textfile, "utf8");
console.log("The data from the .txt file : ", readData)


// Add new lines in the file
fs.appendFileSync(textfile, "\n This is the new data we have just added");
console.log("New data")





//ASYNC WAY OF WRITING THE SAME CODE

const asyncFilepath =path.join(datafolder, "async-text.txt")
fs.writeFile(asyncFilepath,"This is the async method to write a file",(err)=>{
    if(err) throw err;
    console.log("The data has been fed successfully");
})

fs.readFile(asyncFilepath, 'utf8', (err,data)=>{
    if(err) throw err;
    console.log("The content of the async file : ",data);
})


