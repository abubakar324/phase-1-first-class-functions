// index.js

// 1) Function that receives and calls a callback function
function receivesAFunction(callback) {
  callback();
}

// 2) Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}

// 3) Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("I'm an anonymous function!");
  };
}

// Export the functions if needed (for testing)
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};