let test4 = function sum(a: number, b: number) {
    console.log("a+ b :: " + (a + b));
    return a + b;
}

test4(5, 10); // returns 15

let add = (a: number, b: number): number => {
    console.log("a + b :: " + (a + b));
    return a + b;
}

add(55, 100); // returns 15