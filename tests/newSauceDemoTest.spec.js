import { test, expect } from '@playwright/test';
import exp from 'constants';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator("[data-test='username']").fill('standard_user');

  await page.locator("[data-test='password']").fill('Secret_sauce');

  await page.locator("[data-test='login-button']").click();

  const expecterURL = "https://www.saucedemo.com/"; 

  await expect(page).toHaveURL(expecterURL); 
});


