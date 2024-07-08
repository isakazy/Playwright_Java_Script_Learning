import {test, expect} from "@playwright/test"

test("handle radio button", async ({page})=>{
await page.goto("https://demo.nopcommerce.com/register"); 
const male = page.locator("//input[@id='gender-male']"); 
await male.check();  
await expect(male).toBeChecked(); 
await expect( await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy(); 
await page.waitForTimeout(2000); 


})