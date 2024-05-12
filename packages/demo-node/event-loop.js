// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));
// process.nextTick(() => console.log("nextTick"));
// console.log("current event loop");

const fs = require("fs");

let counter = 0;

fs.readFile("./file.js", { encoding: "utf8" }, () => {
  console.log(`Inside I/O, counter = ${++counter}`);

  setImmediate(() => {
    console.log(`setImmediate 1 from I/O callback, counter = ${++counter}`);
  });

  setTimeout(() => {
    console.log(`setTimeout from I/O callback, counter = ${++counter}`);
  }, 0);

  setImmediate(() => {
    console.log(`setImmediate 2 from I/O callback, counter = ${++counter}`);
  });
});