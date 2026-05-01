// console.log("food is ordered");
// setTimeout(() => {
//     console.log("food is being prepared");
// }, 1000);
// console.log("food is served");

function preparingFood() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("food is being prepared");
            resolve("food is prepared");
        }, 2000);
    });
}

console.log("------------------------------------")
async function foodOrder() {
    await console.log("food is ordered");
    await preparingFood();
    await console.log("food is served");
}

foodOrder();