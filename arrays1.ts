let versions: number[] = [1.1, 4.4, 4.4, 5.5, 5.5];
let automationTools: string[] = ["Selenium", "Playright", "Cypress", "TestCafe", "Puppeteer"];

versions.push(6.6);
automationTools.push("WebDriverIO");

console.log(versions);
console.log(automationTools);

let userData: [number, string, boolean, number] = [10, "Siva", true, 13242526];
console.log(userData);

//let uniqueValues: (number | string)[] = [1, "Selenium", 4.4, "Playwright", 5.5, "Cypress"];

let uniqueValues: Set<number> = new Set([1.1, 4.4, 5.5, 1.1, 4.4, 5.5]);

console.log(uniqueValues);

let empdata: Map<number, string> = new Map();
empdata.set(101, "Siva");
empdata.set(102, "Kumar");
empdata.set(103, "Reddy");
empdata.set(103, "Reddy");

console.log(empdata);
