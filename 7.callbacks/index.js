const fs = require('fs');
// This is a demo program to demonstrate async programming using Callback function
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});