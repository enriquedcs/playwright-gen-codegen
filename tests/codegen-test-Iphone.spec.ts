import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('iphone');
  await page.getByRole('button', { name: 'Search' }).click();
});