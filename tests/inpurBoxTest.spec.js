import {test, expect} from "@playwright/test"

test("action test", async ({page})=>{
     await page.goto("https://blazedemo.com/purchase.php"); 
     await expect(page.locator("//input[@id='inputName']")).toBeVisible();  //see if the element is visible 
     await expect(page.locator("//input[@id='inputName']")).toBeEmpty();   //see if the element is empty 
     await expect(page.locator("//input[@id='inputName']")).toBeEditable();   //see if the element is edditable 
     await expect(page.locator("//input[@id='inputName']")).toBeEnabled();  //see if the element is enabled  

     await page.locator("//input[@id='inputName']").fill("isakazy");

     await page.waitForTimeout(5000); // this pouses the execution for given time 

})