/* 
Description: Using the command npx playwright codegen https://ecommerce-playground.lambdatest.io to make a search similar to cloud.js
Author Enrique A Decoss
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('Iphone');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('h1')).toContainText('Search - Iphone');
});