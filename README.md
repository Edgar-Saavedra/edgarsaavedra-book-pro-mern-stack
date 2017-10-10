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