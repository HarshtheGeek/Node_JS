# Node_JS
Node.js is a runtime environment that allows developers to run JavaScript code on the server side, outside of a web browser. It is built on the V8 JavaScript engine, which is the same engine that powers Google Chrome, ensuring fast execution of JavaScript code. Node.js is widely used for building scalable, efficient, and high-performance applications.

---
# Node.js Project Structure & MVC Architecture Explained

## Folder Structure

### `config/`
- **Purpose**: Store app-wide configuration settings.
- **Common Files**:
  - `db.config.js`: Database connection settings.
  - `env.config.js`: Environment variables or third-party API configs.

---

### `controller/`
- **Purpose**: Handle request logic and response generation.
- **Example**: `userController.js`
  - Functions: `createUser`, `getUser`, `updateUser`, etc.

---

### `database/`
- **Purpose**: Handle database connection setup and optional migrations/seeds.
- **Common Files**:
  - `index.js` or `connect.js`: Connects to MongoDB, MySQL, PostgreSQL, etc.

---

### `router/`
- **Purpose**: Define API routes and map them to controller functions.
- **Example**: `userRoutes.js`
  - Maps `GET /users` → `userController.getUsers`

---

### `middleware/`
- **Purpose**: Store reusable request/response interceptors.
- **Examples**:
  - `authMiddleware.js`: Protect routes.
  - `errorHandler.js`: Catch and handle errors globally.

---

### `model/`
- **Purpose**: Define data schemas and database logic.
- **Examples**:
  - `User.js`: Mongoose or Sequelize schema.
  - Methods: `findByEmail`, `comparePassword`, etc.

---

### `helper/`
- **Purpose**: Store utility/helper functions.
- **Examples**:
  - `sendEmail.js`
  - `hashPassword.js`
  - `generateToken.js`

---

## MVC: Model-View-Controller

**MVC** is a software design pattern used to separate an application into three main components:

### Model (M)
- **Handles**: Data access and business logic.
- **Responsibilities**:
  - Communicate with the database.
  - Define data structure (e.g., user schema).
    
---

### View (V)

* **Handles**: Data presentation to users (UI or JSON for APIs).
* **In APIs**: The JSON response sent back is considered the "view".
* **In Web Apps**: Could be EJS, React, or other templating systems.

---

### Controller (C)

* **Handles**: Incoming HTTP requests, interacts with models, returns views/responses.
* **Responsibilities**:

  * Input validation.
  * Orchestration of logic (calling services, models).
  * Sending JSON/HTML response.

---

## MVC Flow Diagram

```text
User → Controller → Model → Controller → View → User
```

### Example (Login API):

1. User submits email/password.
2. Controller receives data.
3. Model checks database.
4. Controller sends result.
5. View displays JSON response.

---

## Benefits of MVC

* **Separation of concerns**: Clean, modular structure.
* **Scalable**: Easily add new features.
* **Maintainable**: Easier to debug and extend.
* **Team-friendly**: Frontend/backend can work independently.

---

### Example Directory Tree

```bash
project/
│
├── config/
│   └── db.config.js
├── controller/
│   └── userController.js
├── database/
│   └── connect.js
├── middleware/
│   └── authMiddleware.js
├── model/
│   └── User.js
├── helper/
│   └── hashPassword.js
├── router/
│   └── userRoutes.js
└── app.js
```


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

**Note** : By default nodeJS treats JS code as CommonJS modules

---

# IIFE and Node.js Module Wrapper

## IIFE (Immediately Invoked Function Expression)

An **IIFE** is a JavaScript function that runs as soon as it is defined.

### Syntax

```js
(function () {
    console.log("IIFE executed!");
})();
````

### Why Use It?

* Encapsulates variables
* Prevents global scope pollution
* Useful for one-time setup logic

---

## Node.js Module Wrapper Function

In Node.js, every file is treated as a **module**, and Node wraps it in a function behind the scenes:

```js
(function (exports, require, module, __filename, __dirname) {
    // Your module code here
});
```

This provides **module-scoped variables** automatically.

---

# Module-Specific Variables in Node.js

Node.js provides these five special variables to every module:

### 1. `exports`

A shorthand reference to `module.exports`, used to expose code from your module.

```js
exports.greet = () => console.log("Hello!");
```

### 2. `module`

Represents the **current module**, with information like `module.exports`, `module.id`, etc.

```js
console.log(module); // Info about the current module
```

> Note: You can overwrite `module.exports` entirely:

```js
module.exports = function() {
    console.log("Exported function");
};
```

### 3. `require`

Used to import modules—built-in, third-party, or local.

```js
const fs = require('fs');
```

> It’s a function provided per module and is relative to the file.

### 4. `__filename`

The **absolute path** of the current module file.

```js
console.log(__filename);
// /Users/harsh/projects/my-app/index.js
```

### 5. `__dirname`

The **directory** name of the current module file.

```js
console.log(__dirname);
// /Users/harsh/projects/my-app
```

---

## IIFE vs Node Module Wrapper

| Feature      | IIFE                      | Node.js Module Wrapper            |
| ------------ | ------------------------- | --------------------------------- |
| Defined by   | Developer                 | Node.js runtime                   |
| Scope        | Local to the function     | Local to the module               |
| Execution    | Immediate                 | Automatic by Node.js              |
| Special Vars | None                      | Yes (exports, require, etc.)      |
| Use Case     | Encapsulation, init logic | Modular structure, file isolation |

---

## Fun Fact

You can inspect the wrapper in Node.js:

```js
console.log(arguments.callee.toString());
```

> `arguments.callee` is **deprecated** in strict mode.

---

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

# Node.js Module Exports

## 1. What is `module.exports`?

In Node.js, each file is treated as a module. `module.exports` is used to **export functions, objects, or values** from one file so they can be **imported and reused** in another.

---

## 2. Exporting a Single Function or Value

### `math.js`
```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### `app.js`
```js
const add = require('./math');
console.log(add(5, 3)); // Output: 8
```

---

## 3. Exporting Multiple Values (Object Format)

### `utils.js`
```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

### `app.js`
```js
const { add, subtract } = require('./utils');

console.log(add(10, 2));      // Output: 12
console.log(subtract(10, 2)); // Output: 8
```

---

## 4. Using `exports` Shortcut

```js
exports.sayHello = function(name) {
  return `Hello, ${name}`;
};
```

> **Note:** Use `exports` only when adding properties.  
> Do **not** assign it directly.

---

## 5. Incorrect Usage (Avoid This)

```js
exports = function() {
  return 'Incorrect';
};
```

Use `module.exports` instead:

```js
module.exports = function() {
  return 'Correct';
};
```

---

## 6. Exporting a Class

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

module.exports = User;
```

### `app.js`
```js
const User = require('./User');

const u = new User('Harsh');
console.log(u.greet()); // Output: Hello, Harsh
```

---

## 7. Summary

| Export Type             | Syntax Example                         |
|--------------------------|-----------------------------------------|
| Single function          | `module.exports = add`                 |
| Multiple functions       | `module.exports = { add, subtract }`   |
| Using `exports` shortcut | `exports.funcName = function() {}`     |
| Whole class              | `module.exports = class`               |

---

**Template** - Blueprint
**Instance** - Product created from that blueprint



