const {test, expect} = require("@playwright/test"); 

test("Home Page", async({page}) => { // we use asynk and await keywords because javascript is not sencronized language 

await page.goto("https://demoblaze.com/"); //using page that comes from playwright we utilize goto method to navigate to the web page 

let pageTitle = await page.title(); 
console.log("page title is: "+ pageTitle); 

await expect(page).toHaveTitle("STORE"); // we use expect that we imported on line #1 to do the assertion

await expect(page).toHaveURL("https://demoblaze.com/"); 

let pageURL = page.url(); 
console.log("Page url is: "+pageURL); 

await page.close();


}); 