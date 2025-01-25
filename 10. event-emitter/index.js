// Import the EventEmitter class from the 'events' module
const EventEmitter = require("events");

// Create an instance of EventEmitter
const myFirstEventEmitter = new EventEmitter();

// Register an event listener for the 'Greet' event
// The listener is a function that takes one parameter, 'name'
// When the 'Greet' event is emitted, this function will be called
myFirstEventEmitter.on("Greet", (name) => {
    console.log(`hello ${name}`); // Log a personalized greeting to the console
});

// Emit the 'Greet' event and pass the string 'Hacchu Pacchu' as the argument
// This will trigger the 'Greet' event listener and pass 'Hacchu Pacchu' to the listener function
myFirstEventEmitter.emit("Greet", "Hacchu Pacchu");
