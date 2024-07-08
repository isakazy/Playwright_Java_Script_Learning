import {test, expect} from "@playwright/test"; 

test("assertionsTest", async({page}) =>{
await page.goto("https://demo.nopcommerce.com/register"); 

// asserting the url 
await expect(page).toHaveURL("https://demo.nopcommerce.com/register"); 

})

test("test title", async ({page})=> {
     await page.goto("https://demo.nopcommerce.com/register");
     await expect(page).toHaveTitle("nopCommerce demo store. Register"); 
})

test("enable", async ({page}) => {
    await page.goto("https://saucedemo.com"); 
     const emailInput = page.locator("//input[@id='user-name']");
     await expect(emailInput).toBeEnabled(); 
})

test("toHaveAttribute", async ({page})=>{
     await page.goto("https://saucedemo.com"); 
     const button = page.locator("//input[@id='login-button']"); 
     await expect(button).toHaveAttribute("name", "login-button"); 
})

test("tohaveText", async({page})=>{
     await page.goto("https://saucedemo.com"); 
     const pageLogo = page.locator("//div[@class='login_logo']"); 
     await expect(pageLogo).toHaveText("Swag Labs"); 
})

test("conteinText", async ({page})=>{
     await page.goto("https://saucedemo.com"); 
     const PartialLogo = page.locator("//div[@class='login_logo']"); 
     await expect(PartialLogo).toContainText("Labs"); 
})

test("toHaveValue", async({page})=>{
     await page.goto("https://saucedemo.com"); 
     const text = page.locator("//input[@id='user-name']"); 
     await text.fill("isakazy"); 
     await expect(text).toHaveValue("isakazy"); 

})

test("toHaveCount", async({page})=>{
     await page.goto("https://demo.nopcommerce.com/register"); 
     const dropDown = page.locator("//select[@name='DateOfBirthDay']/option"); 
     await expect(dropDown).toHaveCount(32);

})