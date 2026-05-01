function ntest(testName: string, testf: () => void) {
    console.log("ntest function called with testName: " + testName);
    testf();
}

function ntest1(testName: string, testf: (value: any) => void) {
    console.log("ntest1 function called with testName: " + testName);
    testf(42);
}

ntest("Login scenario", () => {
    console.log("Test function called");
})

ntest1("Registration scenario", (value: any) => {
    console.log("Test function called with value: " + value);
})