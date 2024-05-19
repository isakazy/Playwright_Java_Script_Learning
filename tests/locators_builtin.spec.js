import {test, expect} from "@playwright/test"; 


// page.getByAltText()- is used to locate an element, usually an image by altText 
//page.getByPlaceHolder - is used to locate an input by placeholder 
// page.getByRole - is used to locate an explicit or emplicit eccessibility attrebutes 

//page.getByLable is used to locate by controll assosiated label's attributes



test("builtInLocators",async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
let image = await page.getByAltText("company-branding"); // locating image by altText 
await expect(image).toBeVisible(); // assert if the text isVisible 
page.close(); 
})



test("login To Orange", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin"); 
    await page.getByPlaceholder("Password").fill("admin123"); 
    await page.getByRole("button", {type: "submit"}).click(); 

    let textOfUser =  await page.locator("//span[@class='oxd-userdropdown-tab']/p").textContent(); 
    await expect(page.getByText(textOfUser)).toBeVisible(); 
    page.close(); 

})