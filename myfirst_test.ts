let a = 20;
var b = 30; // avoid
const c = 40;

var b = 50;

console.log(b);

if (true) {
    var d = 60;
}
console.log(d);


if (true) {
    let e = 60;
    console.log(e);
}

