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
```
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



