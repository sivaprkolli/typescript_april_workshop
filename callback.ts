// callback - passing a function as parameter to another function

// regular function with parameters 
function addition(a: number, b: number): number {
    console.log("Addition function called");
    return a + b;
}

function mtest(verify: () => void) {
    console.log("mtest function called");
    verify();
}

function verify() {
    console.log("Verify function called");
}

mtest(verify);

