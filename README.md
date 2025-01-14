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



