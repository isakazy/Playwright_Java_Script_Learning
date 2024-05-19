import {test, expect} from "@playwright/test"; 


test("login to sauceDemo", async({page}) => {
await page.goto("https://saucedemo.com"); 
let loginPageUrl = "https://www.saucedemo.com/";
await expect(page).toHaveURL(loginPageUrl);

await page.getByPlaceholder("Username").fill("standard_user"); 
await page.getByPlaceholder("Password").fill("secret_sauce"); 
await page.locator("//input[@id='login-button']").click(); 

await page.click("//button[@id='add-to-cart-sauce-labs-backpack']"); 


});