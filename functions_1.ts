function login() {
    console.log("Login function called");
}

() => {
    console.log("Arrow function called");
}

let test1 = function signIn(): void {
    console.log("Sign In function called");
}

// arrow functions

let test2 = (): void => {
    console.log("Arrow function called");
}

let test3 = (): string => {
    return "TypeScript is great!";
}



login();
test1();
test2();
test3();
console.log(test3());