/* 
Description: Using the command npx playwright codegen https://ecommerce-playground.lambdatest.io to record the test 
Author Enrique A Decoss
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('link', { name: 'Blog', exact: true }).click();
});