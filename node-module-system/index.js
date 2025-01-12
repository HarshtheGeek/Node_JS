//module.exports
//require


//every module is wrapped in a function before it is executed

const firstmodule = require("./firstnode");  // this is very important

console.log(firstmodule.add(10,20))

try {
    console.log("Trying to divide by zero")
    let result = firstmodule.divide(10,100)
    console.log(result);
    
} catch (error) {
    console.log("caught an error", error.message)
    
}