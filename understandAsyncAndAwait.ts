function setOrder(product: string, myFunction: (orderId: number) => void) {
    myFunction(1234);
}

function orderGettingReady() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("order is getting ready");
            resolve("order is ready");
        }, 2000);
    });
}

setOrder("chair", async (orderId) => {
    console.log("Order ID: " + orderId);
    const status = await orderGettingReady();
    console.log(status);
    console.log("Order is ready to be delivered");
});