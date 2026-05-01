function enterUsername(username: string) {
    return new Promise((resolve, reject) => {
        resolve(username + " entered successfully");
    });
}

function enterPassword(password: string) {
    return new Promise((resolve, reject) => {
        resolve(password + " entered successfully");
    });
}

function clickLogin() {
    return new Promise((resolve, reject) => {
        resolve("Login button clicked successfully");
    });
}

enterUsername("John").then((username) => {
    console.log(username);
    return enterPassword("12345");
}).then((password) => {
    console.log(password);
    return clickLogin();
}).then(() => {
    console.log("Login process completed successfully");
}).catch((error) => {
    console.error("An error occurred during the login process: ", error);
});