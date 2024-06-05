import { test, expect } from '@playwright/test';
import exp from 'constants';

// npx --help contains all the info 

test("this is navigation test ", async ({page}) => {
await page.goto("https://saucedemo.com"); 
await page.locator("//input[@id='user-name']").fill("standard_user"); 
await page.locator("//input[@id='password']").fill("secret_sauce"); 
await page.locator("//input[@id='login-button']").click(); 
}); 

test("add to cart", async ({page})=> {
     await page.goto("https://saucedemo.com"); 

await page.locator("//input[@id='user-name']").fill("standard_user"); 

await page.locator("//input[@id='password']").fill("secret_sauce"); 

await page.locator("//input[@id='login-button']").click(); 

const expectedUrl = "https://www.saucedemo.com/inventory.html"; 

await expect(page).toHaveURL(expectedUrl); 

await page.locator("//button[@name='add-to-cart-sauce-labs-bolt-t-shirt']").click(); 

const element = page.locator("//span[@class='shopping_cart_badge']"); 

await expect(element).toBeVisible(); 

await page.locator("//div[@id='shopping_cart_container']").click(); 

const expectedCartUrl = "https://www.saucedemo.com/cart.html"; 

await expect(page).toHaveURL(expectedCartUrl); 

})

test("checkout test", async({page}) => {
     await page.goto("https://saucedemo.com"); 

     await page.locator("//input[@id='user-name']").fill("standard_user"); 
     
     await page.locator("//input[@id='password']").fill("secret_sauce"); 
     
     await page.locator("//input[@id='login-button']").click(); 
     
     const expectedUrl = "https://www.saucedemo.com/inventory.html"; 
     
     await expect(page).toHaveURL(expectedUrl); 
     
     await page.locator("//button[@name='add-to-cart-sauce-labs-bolt-t-shirt']").click(); 
     
     const element = page.locator("//span[@class='shopping_cart_badge']"); 
     
     await expect(element).toBeVisible(); 
     
     await page.locator("//div[@id='shopping_cart_container']").click(); 
     
     const expectedCartUrl = "https://www.saucedemo.com/cart.html"; 
     
     await expect(page).toHaveURL(expectedCartUrl); 

     const removeButtom = page.locator("//button[.='Remove']");

     await expect(removeButtom).toBeVisible(); 

     const checkoutButton = page.locator("//button[.='Checkout']");

     await expect(checkoutButton).toBeVisible(); 

     const price = page.locator("//div[.='$15.99']");

     await expect(price).toBeVisible(); 

     await checkoutButton.click(); 

     const personalIfoUrl = "https://www.saucedemo.com/checkout-step-one.html"; 

     await expect(page).toHaveURL(personalIfoUrl); 

     const personalIfoField = page.locator("//div[@class='checkout_info']"); 

     await expect(personalIfoField).toBeVisible();

     const continueButton = page.locator("//input[@id='continue']"); 

     await continueButton.click(); 

     const errorMessage = page.locator("//h3[.='Error: First Name is required']"); 

     await expect(errorMessage).toBeVisible();

     await page.locator("//input[@id='first-name']").fill("Isakazy"); 

     await page.locator("//input[@id='last-name']").fill("Amanbaev"); 

     await page.locator("//input[@id='postal-code']").fill("60656"); 
     
     await continueButton.click(); 

     const stepTwoUrl = "https://www.saucedemo.com/checkout-step-two.html"; 

     await expect(page).toHaveURL(stepTwoUrl); 

     const product = page.locator("//div[@class='cart_item']"); 

     await expect(product).toBeVisible(); 

     const finishButton = page.locator("//button[.='Finish']"); 

     await expect(finishButton).toBeVisible(); 

     finishButton.click(); 

     const expectedText = "Thank you for your order!"; 

      await expect(page.locator("//h2[@class='complete-header']")).toHaveText(expectedText); 

      const button = page.locator("//button[@id='back-to-products']"); 
      
      expect(button).toBeVisible(); 

      await button.click(); 

      await expect(page).toHaveURL(expectedUrl);



})