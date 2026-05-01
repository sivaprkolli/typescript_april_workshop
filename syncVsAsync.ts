
// synchronous code example
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

console.log("-------------");

// asynchronous code example
console.log("Step 1");
setTimeout(() => {
    console.log("Step 2");
}, 100);
console.log("Step 3");

