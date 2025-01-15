const path = require('path');
console.log("Directory name", path.dirname(__filename));// Retrieves directory name
console.log("File name", path.basename(__filename));//Retrieves file name

const joinpath = path.join("/user","demo","userfile","nodejs"); //You can create a path of your choice 
console.log("The new joined path is : ",joinpath); // This will create you a custom path 
