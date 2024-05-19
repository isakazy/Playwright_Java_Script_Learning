import {test, expect} from "@playwright/test"; 

test("Locators", async ({page}) => {
    await page.goto("https://demoblaze.com/"); // navigate to the page
    await page.click("//a[.='Log in']"); // click on the link 
    await page.locator("//input[@id='loginusername']").fill("pavanol"); // provide a username
    await page.locator("//input[@id='loginpassword']").fill("test@123"); // provide a password
    await page.click("//button[.='Log in']");  // click on login button

    let LogOutLink = await page.locator("//a[.='Log out']"); // store the web element in the let variable 

    await expect(LogOutLink).toBeVisible(); // assert if the logout variable is visible 

    await page.close();  // close the browser 

});