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