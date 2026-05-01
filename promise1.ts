let p1 = Promise.resolve(42);
let p2 = Promise.reject("Error occurred");

let p3 = true;
let p4 = 100;

let p5 = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully");
});


console.log(p1); // Promise { 42 }
console.log(p2); // Promise { <rejected> 'Error occurred' }
console.log(p3); // true
console.log(p4); // 100
console.log(p5); // Promise { 'Promise resolved successfully' }

p1.then((message) => { console.log(message) }); // 42
