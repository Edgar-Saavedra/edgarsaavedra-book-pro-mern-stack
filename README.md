# edgarsaavedra-book-pro-mern-stack
Working along side the book Pro Mern Stack

see [book repo](https://github.com/vasansr/pro-mern-stack)

# Chapter 2 notes

* The babel library is a JSX transformer. I will not go into the details of how this is done, because soon we will stop using the browser-based transformer, and instead have a build step during the development
* With npm, even an application is considered a package. A package defines various attributes of the application.
* While installing, you can give a specific version to install using the suffix @<version>, for example, npm install express@4.14.10. When not specified, it installs the latest version.
* type npm ls --depth=0 to check all the currently installed packages. Clean up any packages you do not need.
* Express is a framework that does minimal work by itself; instead, it gets most of the job done by functions called middleware.
  * A middleware is a function that takes in an HTTP request and response object, plus the next middleware function in the chain.
  * The function can look at and modify the request and response objects, respond to requests, or decide to continue with middleware chain by calling the next function.
* require is a JavaScript keyword specific to Node.js, and it is used to import other modules
  * const express = require('express');
* ```
  const app = express();
  app.use(express.static('static'));
  // This instantiates the application and then mounts a middleware.
  // The middleware generator takes the parameter static to indicate that this is the directory where all the static files reside
  //  The express.static generated middleware function is also smart enough to translate a request to “/” (the root of the website)
  // This is similar to what other static web servers such as Apache would have done
  ```
* $ npm install --save-dev babel-cli babel-preset-react
  * To transform the JSX, we need to install some babel tools. In this case, we need a couple of tools: babel-cli (the command line tool that invokes the transformation) and babel-preset-react (the plugin that handles React JSX transformation).
* $ node_modules/.bin/babel src --presets react --out-dir static
* You can define your own npm commands by specifying them in the scripts section of package.json
  * These commands can then be called using npm run <script> from the console
* Auto recompile babel
  *  babel supports this out of the box via the option --watch
  * `$  babel src –presets react –out-dir static –watch`
* To use es6 : `$ npm install --save-dev babel-preset-es2015`
* ES6
  * ES2015 also comes with many built-in objects and extensions, which are not syntactic changes. For example, the Promise object is an ES2015 specification, as is the array find() method. These are not supported by older browsers such as Internet Explorer 11 and earlier. And, a transpile is not enough to add these new capabilities.
  * If you must support those browsers and want to use these built-in functions, you need to add support to the browser via a JavaScript library. These are called polyfills,
  * But rather than install individual polyfills, let’s use the babel recommended polyfill that emulates a full ES2015 environment. This is called babel-polyfill.
  * You use const to declare constants (variables that don’t change once assigned).
  * You use let to declare and initialize a variable that may take other values during the course of the script execution.
  * template string : You can plug in variables using ${} within the string, and the variables will be expanded inline, just like string interpolation in perl and python.
