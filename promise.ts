function isWelcomeMessageDisplayed() {
    // Animal animal = new Animal();
    // new Animal();
    return new Promise((resolve, reject) => {
        resolve("Welcome message is displayed");
    });
}

function isElementPresent() {
    return new Promise((resolve, reject) => {
        reject("Element is not present");
    });

}

isWelcomeMessageDisplayed().then((message) => {
    console.log(message);
});

isElementPresent().catch((message) => {
    console.log(message);
});