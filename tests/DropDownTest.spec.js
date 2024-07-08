import { expect, test } from "@playwright/test";

test("handle practice", async ({page}) => {
     page.goto("https://testautomationpractice.blogspot.com/"); 
     //there are many ways to select an option in the dropdown 
     await page.locator("//select[@id='country']").selectOption({label : "Germany"}); //we use lable(visible text
     await page.waitForTimeout(4000); 
}); 


test("select option by visible text", async ({page}) => {
     await page.goto("https://testautomationpractice.blogspot.com/"); 
     await page.locator("//select[@id='country']").selectOption("Australia"); // select option by its visible text; 
     await page.waitForTimeout(4000); 
}); 

test("select an option by its value", async ({page}) => {
     await page.goto("https://testautomationpractice.blogspot.com/"); // select option by its value 
     await page.locator("//select[@id ='country']").selectOption({value : "uk"}); 
     await page.waitForTimeout(3000); 
})

test("select option by index", async ({page}) =>{
     await page.goto("https://testautomationpractice.blogspot.com/"); 
     await page.locator("//select[@id='country']").selectOption({index: 1 }); // select optiong by its index 
     await page.waitForTimeout(3000); 
})



test("short cut to select an option", async ({page}) =>{
     await page.goto("https://testautomationpractice.blogspot.com/"); 
     await page.selectOption("//select[@id='country']", "Australia");  // shortCut, select locator and option wright away 
     await page.waitForTimeout(3000); 

})


//assertions in the dropDown 

// 1. verify number of options in the drop Down 
test("verify the number of options", async ({page}) =>{
     await page.goto("https://testautomationpractice.blogspot.com/"); 
     const option = page.locator("#country option"); // storing all optons using CSS selector in one variable 
     await expect(option).toHaveCount(10);  // verify if its size is 10 
})


// 2. verify number of  options in the dropDown in Array format 

test("verify the number of options as an array",async ({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/"); 
const arrayOfCountries = await page.$$("#country option"); 
await expect(arrayOfCountries.length).toBe(10); 

console.log("the number of options: "+ arrayOfCountries.length);

}); 