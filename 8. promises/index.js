// Define a function 'Delayfn' that takes a time in milliseconds as an argument
// and returns a Promise. The Promise resolves after the specified time.
function Delayfn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Log a message indicating that the lecture has started.
console.log("The lecture has started");

// Call the 'Delayfn' function with a 5-second delay (5000 milliseconds).
// Once the Promise resolves, execute the 'then()' callback to log a message.
Delayfn(5000).then(() => console.log("The event has been delayed by 5 seconds"));

// Log a message indicating that the lecture has ended.
// Note: This line executes immediately after calling 'Delayfn' since
// promises are asynchronous and do not block the main thread.
console.log("The lecture has ended");

// Using both resolve and reject

function divideFn(num1,num2){
    return new Promise ((resolve,reject)=>{
        if(num2 === 0){
            reject("Cannot perform the division bsdk 0 se kaise karega?");
        } else{
            resolve(num1/num2);
        }
    })
}

divideFn(100,50).then((result)=> console.log("The answer is",result)).catch((error)=> console.log("the error is", error))
