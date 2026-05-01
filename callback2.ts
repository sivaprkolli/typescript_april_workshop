function step1(value: number, callback: (result: number, isDisplayed:boolean) => void) {
    console.log("Step 1");
    callback(value + 10, true);
}

function step2(value: number, callback: (result: number, isDisplayed:boolean) => void) {
    console.log("Step 2");
    callback(value + 10, false);
}

function step3(value: number, callback: (result: number, isDisplayed:boolean) => void) {
    console.log("Step 3");
    callback(value + 10, true);
}

step1(10, (result, isDisplayed) => {
    if (isDisplayed) {
        step2(result, (result, isDisplayed) => {
            if(isDisplayed){
                step3(result, (result, isDisplayed) => {
                    if(isDisplayed){
                        console.log("Final result: " + result);
                    }
                });
            }
        });
    }
});