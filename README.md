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

---
# Browser Environment
The browser gives JavaScript extra capabilities via Web APIs like:

**setTimeout / setInterval (timers)**

**fetch (HTTP requests)**

**document (DOM manipulation)**

**localStorage (storage)**


## **1. What is Local Storage?**

Local Storage is a **Web Storage API** provided by browsers to store **key-value pairs** on a user's device **persistently** (until manually cleared).

### Key points:

* **Stores data in the browser** (not on a server).
* **Key-value pairs** are stored as strings.
* **Persists even after the browser is closed and reopened**.
* **Synchronous API** — meaning operations happen immediately (no callbacks or promises).
* **Storage limit** is around **5MB per origin** (varies slightly by browser).
* Data is scoped to the **protocol + domain + port**.

---

## **3. Methods in localStorage**

Local Storage has **5 main methods**:

### **a. `setItem(key, value)`**

Stores a key-value pair in local storage.

* Both `key` and `value` must be **strings** (objects/arrays need to be stringified).

**Example:**

```javascript
// Storing a simple value
localStorage.setItem("username", "Harsh");

// Storing an object
const user = { name: "Harsh", age: 20 };
localStorage.setItem("userData", JSON.stringify(user));
```

---

### **b. `getItem(key)`**

Retrieves the value for a given key. Returns `null` if the key doesn’t exist.

**Example:**

```javascript
// Get simple value
let username = localStorage.getItem("username");
console.log(username); // "Harsh"

// Get object
let storedUser = JSON.parse(localStorage.getItem("userData"));
console.log(storedUser.name); // "Harsh"
```

---

### **c. `removeItem(key)`**

Deletes the value for the given key.

**Example:**

```javascript
localStorage.removeItem("username");
```

---

### **d. `clear()`**

Clears **all data** in local storage for that domain.

**Example:**

```javascript
localStorage.clear();
```

---

### **e. `key(index)`**

Returns the key name at a given index (useful for iterating through all keys).

**Example:**

```javascript
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

console.log(localStorage.key(0)); // "a" or "b" (order not guaranteed)
```

---

## **4. Full Example – CRUD with localStorage**

```javascript
// CREATE
localStorage.setItem("name", "Harsh");
localStorage.setItem("age", "20");

// READ
console.log(localStorage.getItem("name")); // "Harsh"

// UPDATE (just overwrite the key)
localStorage.setItem("age", "21");

// DELETE one key
localStorage.removeItem("name");

// DELETE all keys
localStorage.clear();
```

---

## **5. Real-World Uses**

* Saving user preferences (theme, font size, language).
* Storing cart items in e-commerce websites.
* Caching API responses to avoid unnecessary calls.
* Remembering login tokens (although JWT in localStorage has security concerns — XSS attacks).

---

## **6. Storing Objects**

``` js
const user = {
  name: 'Harsh',
  age: 21
};

// Store as JSON string
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse back to object
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // Harsh
```
---

## **Why Local Storage Only Stores Strings**

* The **localStorage API** is part of the **Web Storage standard**.
* Under the hood, it’s like a **key-value text file** the browser maintains per domain.
* Both **keys** and **values** are always stored as strings — no exceptions.
* If you pass a number, array, object, boolean… JavaScript will **coerce** it into a string before saving.

---

### **Example of Auto-String Conversion**

```javascript
localStorage.setItem("num", 123);  
console.log(localStorage.getItem("num")); // "123" (string)
console.log(typeof localStorage.getItem("num")); // string

localStorage.setItem("arr", [1, 2, 3]);  
console.log(localStorage.getItem("arr")); // "1,2,3"
```

**Problem:** Arrays lose their structure — no info about types, nesting, or properties.

---

## **JSON to the Rescue**

**JSON (JavaScript Object Notation)** is a standardized way to represent data structures as text.
It’s perfect for storing structured data like arrays and objects in localStorage.

---

### **1. Storing an Object**

```javascript
const user = { name: "Harsh", skills: ["JS", "Flutter"], age: 20 };

// Convert JS object → JSON string
localStorage.setItem("user", JSON.stringify(user));
```

Now in localStorage, it looks like:

```
{"name":"Harsh","skills":["JS","Flutter"],"age":20}
```

* Preserves **structure**
* Preserves **types** (numbers stay numbers, arrays stay arrays, booleans stay booleans)

---

### **2. Retrieving the Object**

```javascript
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);    // Harsh
console.log(storedUser.skills);  // ["JS", "Flutter"]
console.log(typeof storedUser);  // object
```

Here:

* **`JSON.parse()`** turns the stored string back into a live JavaScript object.

---

## **When to Skip Parsing**

If you’re just storing **simple strings or numbers**, you don’t need JSON methods.

```javascript
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // dark
```

But remember:

* Numbers will still come back as **strings** (`"123"` not `123`), so if you need math, you’ll parse it:

```javascript
let num = Number(localStorage.getItem("score"));
```

---

## **The Full Cycle**

**JavaScript Object → JSON.stringify → localStorage (string) → JSON.parse → JavaScript Object**

Here’s the diagram:

```
JS Object
   ↓ JSON.stringify()
JSON String
   ↓ setItem()
localStorage (string storage)
   ↓ getItem()
JSON String
   ↓ JSON.parse()
JS Object
```

---

## **Common Mistakes**

- ❌ Forgetting to use `JSON.stringify()` before saving → You get `[object Object]`
- ❌ Forgetting to use `JSON.parse()` after retrieving → You can’t access object properties
- ❌ Storing sensitive info like passwords in localStorage → Security risk (XSS attacks can read it)

## Important : 
1. localStorage Always Works in Strings
No matter what you put in, it stores only text.

If you pass anything other than a string, JavaScript will force-convert it into a string — but that can mess up complex data (arrays, objects).

---

## **2. What is sessionStorage?**

`sessionStorage` is part of the **Web Storage API** that stores **key–value pairs** in a web browser, just like `localStorage`.
The main difference:

* Data in **sessionStorage** exists **only for the duration of the browser tab’s session**.
* Once the **tab or window is closed**, the data is cleared automatically.

---

## **Key Features**

* **Scope**: Data is available only within the **same browser tab** (not shared across tabs).
* **Lifetime**: Cleared automatically when the tab/window is closed.
* **Storage type**: Strings only (like `localStorage` — use `JSON.stringify()` and `JSON.parse()` for objects/arrays).
* **Size limit**: \~5MB (varies slightly by browser).
* **Same-origin policy**: Only pages with the same protocol, host, and port can access it.

---

## **Methods in sessionStorage**

Same as `localStorage`:

| Method                | Description                          |
| --------------------- | ------------------------------------ |
| `setItem(key, value)` | Store a value                        |
| `getItem(key)`        | Retrieve a value                     |
| `removeItem(key)`     | Remove a specific item               |
| `clear()`             | Remove all items                     |
| `key(index)`          | Get the key name at a given position |

---

### **Example Usage**

```javascript
// Store data
sessionStorage.setItem("username", "Harsh");

// Retrieve data
console.log(sessionStorage.getItem("username")); // "Harsh"

// Store an object
const user = { name: "Harsh", age: 20 };
sessionStorage.setItem("userData", JSON.stringify(user));

// Retrieve an object
let storedUser = JSON.parse(sessionStorage.getItem("userData"));
console.log(storedUser.name); // "Harsh"

// Remove one item
sessionStorage.removeItem("username");

// Clear all
sessionStorage.clear();
```

---

## **Differences Between sessionStorage & localStorage**

| Feature         | localStorage                                  | sessionStorage                                     |
| --------------- | --------------------------------------------- | -------------------------------------------------- |
| **Persistence** | Until manually deleted                        | Until tab/window closed                            |
| **Scope**       | Shared across all tabs from the same origin   | Only in the current tab                            |
| **Capacity**    | \~5MB                                         | \~5MB                                              |
| **Typical Use** | User settings, theme preferences, cached data | Temporary form data, page state for a single visit |

---

## **Real-World Use Cases for sessionStorage**

* **Shopping checkout process** → Keep cart data only for the current checkout session.
* **Form data** → Temporarily save partially filled forms so it’s not lost on page reload.
* **Multi-step onboarding flows** → Store progress between steps without making it permanent.
* **Single-page apps** → Store temporary UI states like active tabs or filters.
✅ If you refresh the tab, the text remains.
❌ If you close the tab and reopen the page, the text is gone.

---

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

**NOTE: Loadash is one of the package which can be used in node js**

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

---
Sure. Here's a **clear and detailed explanation of**:

---

## 1. **Blocking vs Non-Blocking in Node.js**

### **Blocking**

A **blocking** operation stops the execution of further code **until the current task completes**.

* Synchronous methods in Node.js (like `fs.readFileSync()`) are **blocking**.
* While a blocking operation is in progress, Node.js **cannot handle any other operations**, even if they are trivial.

#### Example:

```js
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); // This will run ONLY AFTER the file is read

console.log('Done'); // Waits until reading is complete
```

#### Output (order is preserved):

```
<file content>
Done
```

### **Non-Blocking**

A **non-blocking** operation allows the program to continue executing **while the operation is being processed in the background**.

* Asynchronous methods in Node.js (like `fs.readFile()`) are **non-blocking**.
* Node uses **callback**, **Promises**, or **async/await** to handle these.

#### Example:

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Will print later, after file is read
});

console.log('Done'); // Runs immediately
```

#### Output (order may differ):

```
Done
<file content>
```

### Summary Table:

| Operation Type | Method Example      | Blocks Event Loop | Performance Impact   |
| -------------- | ------------------- | ----------------- | -------------------- |
| Blocking       | `fs.readFileSync()` | Yes               | Slower for I/O apps  |
| Non-blocking   | `fs.readFile()`     | No                | Preferred in Node.js |

---

# Node.js `fs` Module 

The `fs` module in Node.js provides an API for interacting with the file system in a way that is closely modeled around standard POSIX functions. It allows reading, writing, updating, deleting, and watching files and directories.

## Importing the fs Module

```js
const fs = require('fs');
```

For promise-based operations (introduced in Node.js 10+):

```js
const fs = require('fs/promises');
```

---

## Modes of Operation

Every method has:

* **Asynchronous version** (non-blocking)
* **Synchronous version** (blocking)
* **Promise-based version** (using `fs/promises`)

---

## 1. **File Operations**

### `fs.readFile(path, options, callback)`

Reads the entire contents of a file.

```js
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

* Sync: `fs.readFileSync(path, options)`
* Promise: `fs.promises.readFile(path, options)`

---

### `fs.writeFile(file, data, options, callback)`

Writes data to a file. Creates file if not exists or replaces content.

```js
fs.writeFile('file.txt', 'Hello, world!', (err) => {
  if (err) throw err;
});
```

* Sync: `fs.writeFileSync(file, data)`
* Promise: `fs.promises.writeFile(file, data)`

---

### `fs.appendFile(path, data, options, callback)`

Appends data to a file. Creates file if not exists.

```js
fs.appendFile('file.txt', 'Additional text\n', (err) => {
  if (err) throw err;
});
```

* Sync: `fs.appendFileSync(path, data)`
* Promise: `fs.promises.appendFile(path, data)`

---

### `fs.open(path, flags, mode, callback)`

Opens a file and returns a file descriptor.

```js
fs.open('file.txt', 'r', (err, fd) => {
  if (err) throw err;
  console.log(fd);
});
```

Flags:

* `'r'` – read
* `'w'` – write
* `'a'` – append
* `'r+'` – read/write

---

### `fs.close(fd, callback)`

Closes a file descriptor.

```js
fs.close(fd, (err) => {
  if (err) throw err;
});
```

---

### `fs.copyFile(src, dest, mode, callback)`

Copies file content.

```js
fs.copyFile('source.txt', 'dest.txt', (err) => {
  if (err) throw err;
});
```

* Sync: `fs.copyFileSync()`
* Promise: `fs.promises.copyFile()`

---

### `fs.rename(oldPath, newPath, callback)`

Renames or moves a file.

```js
fs.rename('old.txt', 'new.txt', (err) => {
  if (err) throw err;
});
```

---

### `fs.unlink(path, callback)`

Deletes a file.

```js
fs.unlink('file.txt', (err) => {
  if (err) throw err;
});
```

---

## 2. **Directory Operations**

### `fs.mkdir(path, options, callback)`

Creates a new directory.

```js
fs.mkdir('myDir', { recursive: true }, (err) => {
  if (err) throw err;
});
```

* `recursive: true` allows creation of nested directories.
* Sync: `fs.mkdirSync()`
* Promise: `fs.promises.mkdir()`

---

### `fs.rmdir(path, options, callback)`

Removes a directory (only if empty). Deprecated in favor of `fs.rm`.

---

### `fs.rm(path, options, callback)`

Deletes files and directories.

```js
fs.rm('myDir', { recursive: true, force: true }, (err) => {
  if (err) throw err;
});
```

* `recursive: true` removes directories recursively.
* `force: true` ignores non-existent files.

---

### `fs.readdir(path, options, callback)`

Reads the contents of a directory.

```js
fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log(files);
});
```

* Sync: `fs.readdirSync()`
* Promise: `fs.promises.readdir()`

---

### `fs.stat(path, callback)`

Returns info about a file/directory (size, type, etc.).

```js
fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats.isFile());      // true/false
  console.log(stats.isDirectory()); // true/false
});
```

---

### `fs.exists(path, callback)`

Checks if a file/directory exists.

```js
fs.exists('file.txt', (exists) => {
  console.log(exists ? 'Exists' : 'Does not exist');
});
```

> Deprecated. Use `fs.access()` instead.

---

### `fs.access(path, mode, callback)`

Tests permissions.

```js
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'No access' : 'Accessible');
});
```

---

# Key Points Summary

* **`fs.readdirSync(directoryPath)`**
  Returns an **array of filenames** (strings) in the directory.
  **Sync methods do not take callbacks** and return results directly.

* **Synchronous (`Sync`) methods in `fs`**
  Block the event loop until operation finishes.
  Examples: `fs.readFileSync`, `fs.writeFileSync`, `fs.mkdirSync`.
  They **do not use callbacks**; instead, they return values or throw errors.

* **Reading files synchronously (`fs.readFileSync(path, encoding)`)**
  If you want a string, **always specify encoding** like `'utf8'`.
  Otherwise, it returns a raw Buffer.

* **Checking if a file exists**
  Use `fs.existsSync(path)` which returns a boolean.
  Useful before reading or writing files to avoid errors.

* **Appending data to files**
  Use `fs.appendFileSync(path, data)` to add content without overwriting.

* **`path.join(...)`**
  Combines multiple path segments into a single, normalized path string.

* **Checking if an array contains a file**
  Use `array.includes(filename)` to verify if a specific file exists in the directory listing.

---

# **Streams in Node.js `fs` Module**

##  What is a Stream?

A **stream** is a sequence of data chunks being **read from or written to** a source **piece-by-piece** instead of all at once.

Streams are efficient for:

* Handling **large files**
* **Real-time data processing**
* **Non-blocking I/O**

---

## Why Use Streams?

* Prevents loading the **entire file into memory**
* Works well with **large files** or **data pipelines**
* Supports **piping**, which allows chaining readable and writable streams

---

## Types of Streams in Node.js

1. **Readable Streams** → read data
2. **Writable Streams** → write data
3. **Duplex Streams** → both read and write
4. **Transform Streams** → modify data during read/write (e.g., compression)

---

## `fs` Module and Streams

The `fs` module provides:

* `fs.createReadStream(path, options)` – for reading files
* `fs.createWriteStream(path, options)` – for writing files

---

## 1. **`fs.createReadStream()`**

### Purpose:

Read file contents as a stream.

### Syntax:

```js
fs.createReadStream(path, options)
```

### Example:

```js
const fs = require('fs');

const readStream = fs.createReadStream('largeFile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
```

### Events:

* `data`: emitted when a chunk is available
* `end`: when file reading is complete
* `error`: if an error occurs

---

## 2. **`fs.createWriteStream()`**

### Purpose:

Write data to a file using streaming.

### Syntax:

```js
fs.createWriteStream(path, options)
```

### Example:

```js
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('First line\n');
writeStream.write('Second line\n');
writeStream.end(); // must call to close the stream

writeStream.on('finish', () => {
  console.log('All data written to file');
});

writeStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
```

---

## 3. **Piping Streams (Read to Write)**

### Use Case:

Copying content from one file to another **without buffering whole file into memory**.

### Example:

```js
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

* `pipe()` connects output of one stream to input of another.
* Handles backpressure automatically.

---

## 4. **Options You Can Use**

### In `createReadStream()` or `createWriteStream()`:

| Option          | Description                               |
| --------------- | ----------------------------------------- |
| `encoding`      | Encoding type (e.g., `'utf8'`, `'ascii'`) |
| `start`         | Byte offset to start reading/writing      |
| `end`           | Byte offset to stop                       |
| `highWaterMark` | Buffer size (default 64KB)                |
| `flags`         | File open flags like `'r'`, `'w'`, `'a'`  |

---

## 5. **Real-World Use Cases**

* Reading logs line-by-line
* Uploading large files
* Media streaming
* Realtime file monitoring
* Compressing/decompressing using transform streams (e.g. `zlib.createGzip()`)
  
---

### `fs.createWriteStream(path, options)`

Writes data as a stream.

```js
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Streaming text');
writeStream.end();
```

---

## 4. **Watching Files and Directories**

### `fs.watch(filename, options, listener)`

Watches for changes in a file or directory.

```js
fs.watch('file.txt', (eventType, filename) => {
  console.log(`${filename} changed: ${eventType}`);
});
```

---

## 5. **Recursive Deletion Example**

```js
const deleteFolderRecursive = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};
```

---

## Common Constants

Available under `fs.constants`:

* `F_OK` – File is visible
* `R_OK` – Read permission
* `W_OK` – Write permission
* `X_OK` – Execute permission

Example:

```js
fs.access('script.sh', fs.constants.X_OK, (err) => {
  console.log(err ? 'Not executable' : 'Executable');
});
```

---

## Summary Table

| Function     | Sync Version     | Promise Version          | Description                 |
| ------------ | ---------------- | ------------------------ | --------------------------- |
| `readFile`   | `readFileSync`   | `fs.promises.readFile`   | Read file                   |
| `writeFile`  | `writeFileSync`  | `fs.promises.writeFile`  | Write to file               |
| `appendFile` | `appendFileSync` | `fs.promises.appendFile` | Append to file              |
| `mkdir`      | `mkdirSync`      | `fs.promises.mkdir`      | Create directory            |
| `rm`         | `rmSync`         | `fs.promises.rm`         | Remove file/directory       |
| `readdir`    | `readdirSync`    | `fs.promises.readdir`    | Read directory              |
| `rename`     | `renameSync`     | `fs.promises.rename`     | Rename file or directory    |
| `stat`       | `statSync`       | `fs.promises.stat`       | Get file/directory stats    |
| `copyFile`   | `copyFileSync`   | `fs.promises.copyFile`   | Copy a file                 |
| `access`     | `accessSync`     | `fs.promises.access`     | Check file/directory access |

---

# The HTTP Module in Node.js

The HTTP module in Node.js is a **built-in module** that allows you to create and handle HTTP servers and clients. It is used to build web servers and handle data exchanged over the HTTP protocol. 

---

## What is HTTP?

**HTTP (HyperText Transfer Protocol)** is the set of rules used by web browsers, servers, and other clients to communicate over the web.  

- When a **client** (browser, app, Postman, etc.) wants something, it sends an **HTTP request** (a message).  
- The **server** processes this request and sends back an **HTTP response**.  

An **HTTP request** has two main parts:  
- **Headers** → Metadata about the request (e.g., Content-Type, Authorization).  
- **Body** → The actual data being sent (e.g., JSON payload, form data).  

Example HTTP Request:
```

POST /login HTTP/1.1
Host: api.myapp.com
Content-Type: application/json

{
"email": "[harsh@example.com](mailto:harsh@example.com)",
"password": "123456"
}

````

Here:  
- `POST /login HTTP/1.1` → Request line (method, path, protocol).  
- `Host`, `Content-Type` → Headers.  
- `{ "email": "...", "password": "..." }` → Body (payload).  

---

## HTTP in Node.js

- **Server-side**: The HTTP module receives requests and sends responses.  
- **Client-side**: The HTTP module can make requests to other servers.  

### Key Features of the HTTP Module

- **Built-in Module**: No installation required; included with Node.js.  
- **Handles Requests and Responses**: Can both receive and send data.  
- **Event-Driven & Asynchronous**: Handles multiple requests efficiently.  
- **Low-Level Control**: Full access to headers, status codes, and data streams.  
- **Data Transmission**: Responses are sent as **strings or bytes**, not as objects. Objects must be converted with `JSON.stringify` before sending.

---

## MIME Types (Content-Type)

The **Content-Type** header tells the client the format of the data being sent.  

| MIME Type                | Description                           |
|--------------------------|---------------------------------------|
| `text/plain`             | Plain text content                    |
| `text/html`              | HTML content                          |
| `application/json`       | JSON-formatted data                   |
| `application/javascript` | JavaScript code                       |
| `image/png` / `image/jpeg` | Image data                          |
| `multipart/form-data`    | Form data with files                  |

**Example (sending JSON):**
```javascript
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: "Hello, World!" }));
````

Notes:

* `JSON.stringify()` converts an object into a JSON string for transmission.
* Clients (browsers, Postman, fetch, Axios) parse this string back into an object.

---

## How to Import the HTTP Module

```javascript
const http = require('http');
```

---

## Primary Use Cases

1. **Creating an HTTP Server** → Handle incoming requests and send responses.
2. **Making HTTP Requests** → Act as a client to get data from other servers.

---

## Example: Creating an HTTP Server

```javascript
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/json') {
    // Send JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello, JSON!" }));
  } else {
    // Send plain text response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

# HTTP Methods in Node.js

### `http.createServer(callback)`

* Creates an HTTP server instance.
* `callback` runs for **every incoming request**.

**Parameters of the callback:**

* `req` → Incoming request object

  * `req.url` → Path requested (e.g., `/json`).
  * `req.method` → HTTP method (e.g., `GET`, `POST`, `PUT`, `DELETE`).
* `res` → Outgoing response object

---

### `res.writeHead(statusCode, headers)`

* Sets HTTP status code (e.g., `200` = success, `404` = not found).
* Sets response headers (e.g., `Content-Type`).

---

### `res.end([data])`

* Ends the response and sends data to the client.
* Can send plain text, JSON strings, or any string/buffer.

---

### `server.listen(port, callback)`

* Starts the server on the specified port.
* Runs callback once the server is listening.

---

### Example with `req.method`:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/json' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello JSON!' }));
  } else if (req.url === '/json' && req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('POST request received!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

Here:

* `req.method` → lets you respond differently for GET, POST, etc.
* `req.url` → helps route requests to specific paths.

---

# JSON Web Token (JWT)

## What is JWT?
- **JWT (JSON Web Token)** is a compact, URL-safe way to represent claims between two parties.
- It is commonly used for:
  - Authentication
  - Information exchange

JWTs are digitally signed, so they can be verified and trusted.

---

## Structure of a JWT
A JWT has **three parts**, separated by dots (`.`):

```

header.payload.signature

```

Example:
```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VyX2lkIjoxMjMsIm5hbWUiOiJKb2huIERvZSJ9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

````

### 1. Header
- Specifies the token type and the signing algorithm.
- Example:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
````

### 2. Payload

* Contains **claims** (information about the user or other data).
* Types of claims:

  * **Registered claims**: `iss` (issuer), `exp` (expiration), `sub` (subject), `aud` (audience)
  * **Public claims**: Defined in IANA or shared across systems
  * **Private claims**: Custom claims defined between parties
* Example:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "exp": 1712345678
}
```

### 3. Signature

* Ensures the token hasn’t been tampered with.
* Created by taking:

  ```
  HMACSHA256(
    base64UrlEncode(header) + "." + base64UrlEncode(payload),
    secret
  )
  ```

---

## Example JWT Flow (Authentication)

1. **User logs in** with email and password.
2. **Server validates** credentials and creates a JWT.
3. Server sends JWT to client.
4. **Client stores** the token (usually in localStorage, sessionStorage, or cookies).
5. Client includes JWT in the **Authorization header** on future requests:

   ```
   Authorization: Bearer <JWT_TOKEN>
   ```
6. **Server verifies** the token before allowing access to protected routes.

---

## Advantages of JWT

* **Stateless**: Server does not need to store session info.
* **Scalable**: Works well in distributed systems.
* **Compact**: Small and URL-safe.
* **Secure**: Uses signing to verify authenticity.

---

## Disadvantages of JWT

* **No easy revocation**: Once issued, it remains valid until expiration.
* **Larger size than sessions**: Includes payload data in every request.
* **Must be stored securely**: Storing in localStorage/cookies can be vulnerable to XSS or CSRF.

---

## Example in Practice

### Login Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
            eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIn0.
            fYVz0R2-7nH2YJhCbt0x3Rk2lR5XbTr5yl31VfhgZtE"
}
```

### Authenticated Request

```
GET /profile HTTP/1.1
Host: api.myapp.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Decoded Payload

```json
{
  "id": 1,
  "name": "John Doe",
  "exp": 1712345678
}
```

---

## Summary

* JWT = `Header.Payload.Signature`
* Used for **authentication** and **information sharing**
* Should always be **signed** (and optionally encrypted)
* Common header for sending token:

  ```
  Authorization: Bearer <JWT>
  ```
---

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

**EventEmitter in Node.js**

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

---

## What is a Query 

A **query** is the part of a URL that contains **extra information or parameters** sent to the server. It usually comes **after a question mark `?`** in the URL.

---

### Structure of a URL with Query

```
https://example.com/search?term=javascript&sort=asc
                     ↑
                   Query starts here
```

* The part after the `?` is the **query string**:
  `term=javascript&sort=asc`
* It contains **key-value pairs** separated by `&`.
* Each key-value pair looks like `key=value`.

---

### What is Query used for?

* To send **parameters** or **filters** to the server.
* For example, in a search URL, the query specifies what you are searching for (`term=javascript`) and how results should be sorted (`sort=asc`).
* Commonly used in GET requests to pass data.

---

### Example URL with Query:

```
https://example.com/products?category=books&price=low
```

* Here, the query has two parameters:

  * `category` = `books`
  * `price` = `low`

---

### How to access query parameters in JavaScript?

Using the `URL` API:

```js
const url = new URL('https://example.com/products?category=books&price=low');
console.log(url.searchParams.get('category')); // Output: books
console.log(url.searchParams.get('price'));    // Output: low
```

---

### Summary

| Term         | Meaning                                     |
| ------------ | ------------------------------------------- |
| Query String | Part of URL after `?` containing parameters |
| Parameter    | Key-value pairs like `key=value`            |
| Separator    | `&` separates multiple parameters           |

---

## What is `searchParams`?

`searchParams` is a property of the **JavaScript `URL` object** that lets you easily work with the **query string parameters** in a URL.

---

### What does it do?

* It provides methods to **read, add, update, or delete** query parameters.
* Makes handling URL queries much easier than manually parsing the string.

---

### Example:

```js
const url = new URL('https://example.com/page?name=harsh&age=21');

console.log(url.searchParams.get('name')); // Output: harsh
console.log(url.searchParams.get('age'));  // Output: 21

// Add a new parameter
url.searchParams.append('city', 'Delhi');

console.log(url.toString());
// Output: https://example.com/page?name=harsh&age=21&city=Delhi

// Update an existing parameter
url.searchParams.set('age', '22');

console.log(url.toString());
// Output: https://example.com/page?name=harsh&age=22&city=Delhi

// Delete a parameter
url.searchParams.delete('name');

console.log(url.toString());
// Output: https://example.com/page?age=22&city=Delhi
```

---

### Key Methods of `searchParams`

| Method                | Description                                  |
| --------------------- | -------------------------------------------- |
| `get(name)`           | Get the value of a parameter.                |
| `set(name, value)`    | Set or update a parameter value.             |
| `append(name, value)` | Add a new parameter (can have duplicates).   |
| `delete(name)`        | Remove a parameter.                          |
| `has(name)`           | Check if a parameter exists.                 |
| `toString()`          | Get the full query string (without the `?`). |

---

### Why use `searchParams`?

* Simplifies reading and manipulating URL queries.
* Avoids manually splitting strings.
* Automatically encodes and decodes special characters.

---

## ** What is `URL` in JavaScript?**

* In JS, `URL` is a **built-in class** (part of the Web API) that represents and lets you work with URLs easily.
* Instead of manually splitting strings, you can use `URL` to **parse, read, and modify** different parts of a URL.

Think of it as:

> **String URL → Broken down into easy-to-use pieces.**

---

## ** Creating a `URL` object**

```js
const myUrl = new URL('https://www.example.com:8080/path/page.html?name=harsh&age=20#section2');
```

---

## ** Properties of a `URL` object**

Here’s a table:

| Property       | Example Output                                                             | What it Means                             |
| -------------- | -------------------------------------------------------------------------- | ----------------------------------------- |
| `href`         | `"https://www.example.com:8080/path/page.html?name=harsh&age=20#section2"` | Full URL string                           |
| `protocol`     | `"https:"`                                                                 | Protocol used (`http`, `https`, `ftp`...) |
| `hostname`     | `"www.example.com"`                                                        | Domain name only                          |
| `port`         | `"8080"`                                                                   | Port number if present                    |
| `pathname`     | `"/path/page.html"`                                                        | Path after domain                         |
| `search`       | `"?name=harsh&age=20"`                                                     | Query string (starts with `?`)            |
| `searchParams` | `URLSearchParams` object                                                   | Lets you get/set query parameters         |
| `hash`         | `"#section2"`                                                              | Fragment identifier after `#`             |
| `origin`       | `"https://www.example.com:8080"`                                           | Protocol + hostname + port                |

---

```js
const myURL = new URL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

console.log(myURL.href);        // Full URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
console.log(myURL.protocol);    // "https:"
console.log(myURL.host);        // "www.youtube.com"
console.log(myURL.hostname);    // "www.youtube.com"
console.log(myURL.pathname);    // "/watch"
console.log(myURL.search);      // "?v=dQw4w9WgXcQ"
console.log(myURL.searchParams);// URLSearchParams object
console.log(myURL.hash);        // ""
```

## **5 Modifying other parts**

You can directly change URL properties:

```js
myUrl.hash = '#top';
myUrl.pathname = '/new/page';
myUrl.port = '3000';
```

---

 **Why use `URL`?**

* Easy to extract specific parts (instead of messy `.split()`).
* Built-in validation — will throw error if invalid URL.
* Makes query parameter manipulation simple.

---


Got it. Let’s go step by step and break down the difference between `req.body` and `req.query` in Express.

---

### 1. `req.body`

* **What it is**: Data that comes in the **body of the HTTP request**.
* **When it is used**: Mostly with `POST`, `PUT`, and `PATCH` requests, where you send data to the server.
* **How to access it**: Requires body-parsing middleware (e.g., `app.use(express.json())`).
* **Format**: Can be JSON, form data, or raw text depending on headers.

**Example:**

```js
// Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(`User: ${username}, Pass: ${password}`);
});
```

**Request in Postman:**

* Method: `POST`
* URL: `http://localhost:4000/login`
* Body (raw JSON):

  ```json
  {
    "username": "harsh",
    "password": "12345"
  }
  ```

**Server receives in `req.body`:**

```json
{
  "username": "harsh",
  "password": "12345"
}
```

---

### 2. `req.query`

* **What it is**: Data sent in the **query string of the URL**.
* **When it is used**: Mostly with `GET` requests, where you want to filter or fetch data without sending a body.
* **How to access it**: Always available, no middleware required.
* **Format**: Key-value pairs appended to the URL after `?`.

**Example:**

```js
// Route
app.get("/search", (req, res) => {
  const { keyword, page } = req.query;
  res.send(`Search keyword: ${keyword}, Page: ${page}`);
});
```

**Request in Postman or browser:**

```
GET http://localhost:4000/search?keyword=node&page=2
```

**Server receives in `req.query`:**

```json
{
  "keyword": "node",
  "page": "2"
}
```

---

### 3. Key Differences

| Aspect               | `req.body`                                                                  | `req.query`                                    |
| -------------------- | --------------------------------------------------------------------------- | ---------------------------------------------- |
| Source of data       | Request body (payload)                                                      | Query string in the URL                        |
| Typical HTTP methods | `POST`, `PUT`, `PATCH`                                                      | `GET`                                          |
| Data size            | Can be large (JSON, file uploads, etc.)                                     | Small, since it’s part of URL                  |
| Encoding             | JSON, form-data, raw text, etc.                                             | Always key-value pairs in string form          |
| Requires middleware  | Yes (`express.json()`, `express.urlencoded()`)                              | No, directly available                         |
| Use case             | Sending structured or sensitive data (login, form submission, API payloads) | Filtering, sorting, pagination, search queries |

---

### 4. Example side by side

**POST with `req.body`:**

```
POST http://localhost:4000/api/users
Body:
{
  "name": "Harsh",
  "email": "harsh@example.com"
}
```

**GET with `req.query`:**

```
GET http://localhost:4000/api/users?name=Harsh&email=harsh@example.com
```

Both can represent the same data, but:

* `req.body` keeps it in the payload (cleaner, more secure, better for sensitive/long data).
* `req.query` puts it in the URL (good for filters, but visible in browser history).

---

# Event Loop: Synchronous Code, Microtasks, and Macrotasks

## 1. Event Loop Overview
Node.js executes code using an **event loop**, which handles **synchronous code** and **asynchronous tasks**.  
Tasks are categorized as:

- **Synchronous code** → runs immediately
- **Microtasks** → run after synchronous code, before macrotasks
- **Macrotasks** → run after all synchronous code and microtasks

---

## 2. Synchronous Code
- Runs **line by line**.
- Blocks the thread until finished.
- Example:

```javascript
console.log("Start");
console.log("End");
````

**Output:**

```
Start
End
```

---

## 3. Microtasks

* Run **immediately after the current synchronous code**.
* Examples:

  * `process.nextTick()`
  * `Promise.then()`
  * `queueMicrotask()`
* Executed **in order** of creation.

**Example:**

```javascript
console.log("Start");

process.nextTick(() => {
  console.log("Microtask 1: Next Tick");
});

Promise.resolve().then(() => {
  console.log("Microtask 2: Promise");
});

queueMicrotask(() => {
  console.log("Microtask 3: queueMicrotask");
});

console.log("End");
```

**Output:**

```
Start
End
Microtask 1: Next Tick
Microtask 2: Promise
Microtask 3: queueMicrotask
```

---

## 4. Macrotasks

* Run **after all synchronous code and microtasks**.
* Examples:

  * `setTimeout()`
  * `setInterval()`
  * `setImmediate()`
  * I/O operations

**Example:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

console.log("End");
```

**Output:**

```
Start
End
Macrotask: setTimeout
```

---

## 5. Execution Order Summary

1. **Synchronous code** → runs immediately
2. **Microtasks** → run after current synchronous code, in order
3. **Macrotasks** → run after all synchronous code and microtasks

**Analogy:**

* Cooking a dish → synchronous code
* Tasting/checking the dish → microtasks
* Serving the dish → macrotask

---

## Main methods : 

- Node.js APIs/Methods You Should Know

- process.nextTick(callback) → schedules a microtask

- Promise.then(callback) → schedules a microtask

- queueMicrotask(callback) → schedules a microtask

- setTimeout(callback, delay) → schedules a macrotask

- setImmediate(callback) → macrotask, similar to setTimeout but slightly different timing

- console.log() → helps you visualize execution order
  
```

Got it. Here’s a **detailed explanation of Axios methods, headers, tokens, and their use cases** in clean GitHub-style documentation.

---

# Axios Guide

Axios is a popular JavaScript library for making **HTTP requests** from both the browser and Node.js. It simplifies working with APIs and supports features like promises, interceptors, and automatic JSON handling.

---

## 1. Making Requests

Axios supports different HTTP methods:

### GET request

Used to **fetch data**.

```js
const res = await axios.get("http://localhost:5000/transcript?id=123");

console.log(res.data);
```

* The `id=123` is passed as a query parameter.
* No request body is sent in GET.

---

### POST request

Used to **send data** (e.g., forms, JSON).

```js
const res = await axios.post("http://localhost:5000/transcript", {
  youtubeurl: "https://youtu.be/dQw4w9WgXcQ"
});

console.log(res.data);
```

* The second argument is the request body (sent as JSON).
* Commonly used for creating or submitting data.

---

### PUT request

Used to **replace or update data**.

```js
const res = await axios.put("http://localhost:5000/user/123", {
  name: "Harsh",
  email: "harsh@example.com"
});

console.log(res.data);
```

---

### PATCH request

Used to **update partially**.

```js
const res = await axios.patch("http://localhost:5000/user/123", {
  email: "newemail@example.com"
});

console.log(res.data);
```

---

### DELETE request

Used to **delete data**.

```js
const res = await axios.delete("http://localhost:5000/user/123");

console.log(res.data);
```

---

## 2. Request Config

Axios allows passing a config object as the last parameter.

Example:

```js
const res = await axios.post(
  "http://localhost:5000/transcript",
  { youtubeurl: "https://youtu.be/dQw4w9WgXcQ" },
  {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer your_token_here"
    },
    timeout: 5000 // request fails if it takes more than 5 seconds
  }
);

console.log(res.data);
```

---

## 3. Headers

Headers carry **additional information** about a request.

Common headers:

* `Content-Type`: Tells the server the data format (e.g., `application/json`).
* `Authorization`: Used to send tokens for authentication.
* `Accept`: Specifies what response formats the client can handle (e.g., `application/json`).

Example:

```js
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

## 4. Authorization Tokens

Tokens are required when an API is **protected** (not open to the public). They ensure only authenticated users can access it.

### Common token types

1. **Bearer Token (JWT)**

   * Used in most modern APIs.
   * Example:

     ```http
     Authorization: Bearer <token_here>
     ```
2. **API Key**

   * Provided by the API service.
   * Example:

     ```http
     Authorization: ApiKey <your_key>
     ```
3. **Basic Auth**

   * Encodes username and password in Base64.
   * Example:

     ```http
     Authorization: Basic <base64encoded(username:password)>
     ```

---

## 5. Response Object

Axios returns a response object containing:

```js
{
  data: {},        // actual response body
  status: 200,     // HTTP status code
  statusText: 'OK',
  headers: {},     // response headers
  config: {},      // request configuration
  request: {}      // the request object
}
```

Example:

```js
const res = await axios.get("http://localhost:5000/transcript?id=123");
console.log(res.data);      // transcript data
console.log(res.status);    // 200
```

---

## 6. Error Handling

Axios errors can be caught with `try...catch`.

```js
try {
  const res = await axios.get("http://localhost:5000/wrong-url");
  console.log(res.data);
} catch (error) {
  if (error.response) {
    // server responded with status code outside 2xx
    console.log(error.response.status);
    console.log(error.response.data);
  } else if (error.request) {
    // request was made but no response
    console.log("No response:", error.request);
  } else {
    // something else
    console.log("Error:", error.message);
  }
}
```

---

## 7. When to Use Tokens

* **Public API (like open YouTube transcript API via backend)**: no token needed.
* **Private API (user data, payments, accounts)**: token required.
* Example:

  * A user logs in and gets a JWT token.
  * The token is sent with every request in the `Authorization` header.
  * The server verifies the token before allowing access.

---

## 8. Axios Interceptors

You can use interceptors to attach tokens automatically.

```js
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

This way, you don’t have to manually add the header for every request.

---

Do you want me to extend this into a **real-world workflow** example, like:

1. User logs in → gets JWT from backend.
2. Stores JWT in local storage.
3. Axios automatically attaches JWT for future requests.
4. Server verifies JWT and returns protected data.




