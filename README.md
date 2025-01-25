# Node_JS
Node.js is a runtime environment that allows developers to run JavaScript code on the server side, outside of a web browser. It is built on the V8 JavaScript engine, which is the same engine that powers Google Chrome, ensuring fast execution of JavaScript code. Node.js is widely used for building scalable, efficient, and high-performance applications.

# NODE JS MODULE SYSTEM
The Node.js module system is a way to organize and manage code by dividing it into reusable, maintainable, and independent pieces called modules. This system allows developers to include and use functionalities in different parts of an application without rewriting code.

**NOTE** 
every module is wrapped in a function before it is executed.

# Difference between CommonJS and ESModules

| Feature                     | CommonJS (CJS)        | ES Modules (ESM)       |
|-----------------------------|-----------------------|------------------------|
| **Import Syntax**           | `require()`          | `import`              |
| **Export Syntax**           | `module.exports`     | `export`              |
| **File Extension**          | `.js`                | `.mjs` or `"type": "module"`  |
| **Loading**                 | Synchronous          | Asynchronous          |
| **Default Export**          | Single via `exports` | Named and Default     |
| **Scope of `this`**         | `module.exports`     | `undefined`           |
| **Usage**                   | Node.js              | Browsers & Node.js    |
| **Compatibility**           | Node.js only         | Browser and Node.js   |


# Wrapper Module in Node.js
In Node.js, a **wrapper module** is a mechanism by which the runtime wraps user-defined JavaScript code into a function before executing it. This ensures encapsulation and provides access to essential module-related variables.

## **How It Works**

When a module is loaded, Node.js wraps the code in the following function:

```javascript
(function (exports, require, module, __filename, __dirname) {
    // Your module code goes here
});
```

For example, if you write:
```javascript
console.log("Hello, Node.js!");
```

Node.js internally transforms it into:
```javascript
(function (exports, require, module, __filename, __dirname) {
    console.log("Hello, Node.js!");
});
```

## **Why Wrapper Modules Are Used**

1. **Encapsulation**:
   - Ensures that variables and functions inside a module do not leak into the global scope.
   - Each module has its own private scope.

2. **Access to Module-Specific Variables**:
   - `exports`: Shortcut for `module.exports` to export functionality.
   - `require`: Function to import other modules.
   - `module`: Object representing the current module.
   - `__filename`: Absolute path of the module file.
   - `__dirname`: Directory name of the module file.

3. **Performance Optimization**:
   - Modules are cached after their first execution to avoid reloading.

4. **Compatibility**:
   - Provides a consistent environment for all modules.

---

## **Example**

Consider this code in a file named `example.js`:
```javascript
console.log("Filename:", __filename);
console.log("Directory:", __dirname);
```

Node.js wraps it like this:
```javascript
(function (exports, require, module, __filename, __dirname) {
    console.log("Filename:", __filename);
    console.log("Directory:", __dirname);
});
```

When executed, the output will be:
```
Filename: /path/to/example.js
Directory: /path/to
```

---

## **Key Points**
- Wrapper modules are **invisible** to developers and operate behind the scenes.
- They play a crucial role in:
  - Isolating code in a module.
  - Enabling modularity in Node.js applications.
  - Providing useful variables (`require`, `exports`, `__filename`, etc.).
- This mechanism is a fundamental part of Node.js.


# NODE PACKAGE MANAGER
A package manager in Node.js is a tool that simplifies the process of managing, installing, updating, and removing packages (reusable code libraries) in a Node.js project. It also handles dependencies between these packages, ensuring that the project functions as expected.

there are 2 ways for creating a package: 

``` npm init ```
``` npm init -y ```
``` npm install ```
``` npm uninstall ```
``` npm update ```
# NOTE: Loadash is one of the package which can be used in node js

# PATH MODULE 
The path module in node js could be defined as a built-in tool that helps you work with file and directory paths on your computer. It provides simple ways to:

- Combine parts of a file path.
- Get information like the file name or extension.
- Convert between different path formats (e.g., Windows vs. Linux).
- Navigate relative and absolute paths easily.

  ### Path Module Methods (Definitions)

- **`path.join`**: Combines multiple path segments into a single path, handling slashes automatically.  
- **`path.dirname`**: Returns the directory portion of a given path.  
- **`path.basename`**: Returns the last part (file or folder name) of a path.  
- **`path.resolve`**: Converts a sequence of paths into an absolute path.  
- **`path.normalize`**: Cleans up a path by resolving redundant slashes and relative segments like `..` and `.`.
- 
**Resolving a path**
Resolving a path means turning a potentially unclear or incomplete file path into a full, clear, and absolute path. This is done to determine the exact location of a file or directory in the system.

For example, if you have a path like "../folder/file.txt" (relative path), a resolve function will calculate and return the full path, such as "/home/user/folder/file.txt" (absolute path), based on the current working directory.


### File System Module in Node.js

In Node.js, the **File System (fs)** module provides tools for working with files and directories. It allows you to:

- **Read** files or directories.
- **Write** or **append** data to files.
- **Delete**, **rename**, or **move** files and directories.
- Perform operations **synchronously** or **asynchronously** (non-blocking).


# The HTTP Module in Node.js

The HTTP module in Node.js is a built-in module that allows you to create and handle HTTP requests and responses. It is used to build web servers and handle data exchanged over the HTTP protocol.

---

## Key Features of the HTTP Module

- **Built-in Module**: No need to install it separately; it is included in Node.js by default.
- **Supports Both HTTP Requests and Responses**: You can create servers to handle incoming requests or make HTTP requests to other servers.
- **Event-Driven**: The module operates asynchronously, allowing high-performance handling of multiple requests.

---

## How to Import the HTTP Module

You can include the HTTP module in your Node.js application using the `require` function:

```javascript
const http = require('http');
```

---

## Primary Use Cases

1. **Creating an HTTP Server**: Respond to client requests.
2. **Making HTTP Requests**: Act as a client to fetch data from other servers.

---

## Example: Creating an HTTP Server

This is a basic example of creating an HTTP server with the HTTP module:

```javascript
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello, World!');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

---

## Explanation of the Example

### `http.createServer()`
- Creates an HTTP server instance.
- Accepts a callback function that is executed for every incoming request. This function has two arguments:
  - `req`: Represents the incoming request object.
  - `res`: Represents the outgoing response object.

### `res.writeHead(200, {...})`
- Sets the HTTP response status code (200 means success) and headers.

### `res.end()`
- Ends the response and sends data to the client.

### `server.listen(port, callback)`
- Starts the server and listens on the specified port for incoming requests.


# Payload

## General Definition
The **payload** is the part of a transmission that carries the meaningful content. It excludes metadata, headers, or any additional information used for routing, error-checking, or protocol-specific purposes.

## In Networking
- The payload is the portion of a data packet that contains the actual data intended for the recipient.
- For example, in an HTTP request or response, the payload might be the data in the body of the message.

## In APIs (RESTful APIs)
- The payload is the data sent or received in the body of an HTTP request or response.
- For a `POST` request, the payload is typically the JSON, XML, or other data format that carries the information to be processed on the server.

## Difference from Headers
- **Headers**: Provide metadata about the request or response (e.g., content type, authentication tokens, etc.).
- **Payload**: Contains the actual data (e.g., a user’s information in a JSON format).

# Routes using HTTP request
Routing using the HTTP module in Node.js refers to the process of defining how a web server responds to different HTTP requests (e.g., GET, POST) at various endpoints (URLs or paths). It involves determining what logic or actions to execute when a specific request is made to the server.

example 
# Demo Code for Routing with HTTP Module in Node.js

This code demonstrates basic routing using the built-in `http` module in Node.js.

```javascript
// Import the HTTP module to create a server
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Get the requested URL from the incoming request object
    const url = req.url;

    // Check the URL and respond accordingly
    if (url === "/") {
        // Home route: Respond with a 200 status and plain text message
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("If you are seeing this that means you are on the home page");
    } 
    else if (url === "/projects") {
        // Projects route: Respond with a 200 status and plain text message
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Dusre page pe aa gaye bc"); // Informative message for projects route
    } 
    else {
        // Fallback for undefined routes: Respond with a 404 status and error message
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found chud gaye guru"); // Error message for undefined routes
    }
});

// Define the port on which the server will listen
const port = 3000;

// Start the server and log a message indicating it is running
server.listen(port, () => {
    console.log("Server is now listening");
});
```

# Callback Function in JavaScript and Node.js

A **callback function** is a function passed as an argument to another function and is executed after the completion of that function. It enables asynchronous programming by allowing operations to run without blocking the execution of subsequent code.

---

## Key Concepts of a Callback Function

1. **Function as an Argument**:
   - In JavaScript, functions are first-class citizens and can be passed as arguments to other functions.
   - The callback is executed after the parent function completes its task.

2. **Asynchronous Execution**:
   - Callbacks are used in asynchronous operations like file reading, database querying, or API requests in Node.js.
   - This ensures non-blocking behavior and efficient multitasking.

3. **Named or Anonymous**:
   - Callbacks can be either named functions or inline anonymous functions.

---

## Callback Function in JavaScript

### Example: Synchronous Callback
```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing sayGoodbye as a callback
greet("Alice", sayGoodbye);
```

**Output**:
```
Hello Alice
Goodbye!
```

- The `sayGoodbye` function is passed as a callback to `greet`.
- After `greet` logs "Hello Alice," it invokes the `callback()` function.

---

## Callback Function in Node.js

Node.js makes extensive use of callbacks for handling asynchronous operations.

### Example: Reading a File Asynchronously
```javascript
const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

```

- `fs.readFile` takes a callback function as its third argument.
  - `err`: Represents any error that occurred during the operation.
  - `data`: Contains the file content if the operation was successful.

---

# CallBack Hell

Callback Hell refers to a situation in Node.js where multiple nested callback functions are used to handle asynchronous operations. This creates a pyramid-like structure in the code, making it difficult to read, debug, and maintain.

This problem arises because Node.js heavily relies on callbacks for asynchronous operations like file handling, database queries, and API calls.


# PROMISES 
A Promises in Node.js is a special JavaScript object used to handle asynchronous operations. It represents the eventual completion (or failure) of an asynchronous task and its resulting value. Promises help manage asynchronous code more effectively, avoiding Callback Hell and making code more readable and maintainable.

# Creating a Promise
A promise is created using the Promise constructor, which takes a callback function with two arguments: resolve and reject.

```
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating a condition

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});

```
# Using Promises
Promises are consumed using `.then()`, `.catch()`, and `.finally()` methods:

`.then()`: Handles the fulfillment of the promise and gets the resolved value.
`.catch()`: Handles the rejection of the promise.
`.finally()`: Executes a block of code after the promise is settled (either fulfilled or rejected).

```
myPromise
    .then((value) => {
        console.log(value); // Logs: "Operation succeeded!"
    })
    .catch((error) => {
        console.error(error); // Logs: "Operation failed!" (if rejected)
    })
    .finally(() => {
        console.log("Promise settled."); // Always executes
    });

```


# EVENT EMITTER

Here’s a set of EventEmitter notes written in GitHub-friendly Markdown format:

---

# EventEmitter in Node.js

The **EventEmitter** class in Node.js allows for the implementation of the **Observer design pattern**, enabling objects to emit events and other objects to respond to those events.

The `EventEmitter` class is part of Node.js's built-in `events` module. It provides an easy way to:
- **Register listeners** for specific events.
- **Emit events** to trigger those listeners.

---

## Features

1. **Event Registration**: Add listeners for specific events.
2. **Event Emission**: Emit events to notify listeners.
3. **Event Removal**: Remove one or all listeners for a given event.
4. **Multiple Listeners**: Support for multiple listeners on a single event.

---

## Common Methods

| Method | Description |
|--------|-------------|
| `on(event, listener)` | Adds a listener for the specified event. |
| `once(event, listener)` | Adds a listener that triggers only once. |
| `emit(event, ...args)` | Emits the specified event, calling all its listeners. |
| `removeListener(event, listener)` | Removes a specific listener from the event. |
| `removeAllListeners(event)` | Removes all listeners for the specified event. |

---

## Basic Example

Here’s a basic implementation of `EventEmitter`:

```javascript
const EventEmitter = require('events');

// Create an EventEmitter instance
const myEmitter = new EventEmitter();

// Register a listener for the 'Greet' event
myEmitter.on('Greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'Greet' event
myEmitter.emit('Greet', 'Alice');
```


## Custom EventEmitter

If you want to create a custom `EventEmitter`, you can extend the `EventEmitter` class:

```javascript
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
    log(message) {
        this.emit('log', message); // Emit a custom 'log' event
    }
}

const myEmitter = new CustomEmitter();

// Add a listener for the 'log' event
myEmitter.on('log', (message) => {
    console.log(`Log: ${message}`);
});

// Emit the 'log' event
myEmitter.log('This is a custom event!');
```

### Output:
```
Log: This is a custom event!
```

---

## Important Notes

- Always **remove listeners** if they are no longer needed to prevent memory leaks.
- Use `once` for listeners that only need to handle the first emission of an event.
- Consider setting the maximum number of listeners (default is 10) using `setMaxListeners` to avoid warnings in case of many listeners.

---


