import {test, expect} from "@playwright/test"; 

test("locate multiple elements", async ({page})=>{

    await page.goto("https://demoblaze.com/"); // navigate to the page
    await page.waitForSelector("//a[@class='hrefch']") // the follwing method waits for a web element 
    let listOfProducts = await page.$$("//a[@class='hrefch']"); // here using $$ i am storing multiple web elements in the variable


    // for each loop to get text and print 
for(let links of listOfProducts){ // in java we use : but here we user of 
let linkText =  await links.textContent(); // storing text of each element in the variabel
console.log(linkText); // print
}

})