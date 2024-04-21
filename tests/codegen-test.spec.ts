/* 
Description: Using the command npx playwright codegen https://ecommerce-playground.lambdatest.io to record an add to cart flow 
Author Enrique A Decoss
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('macbook');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mz-product-grid-image-43-212469').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'View Cart ' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
});