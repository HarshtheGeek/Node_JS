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

```


