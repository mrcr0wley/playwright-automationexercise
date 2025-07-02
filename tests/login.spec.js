const { test, expect } = require('@playwright/test');

test('Login with invalid credentials shows error', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', 'wrong@example.com');
  await page.fill('input[data-qa="login-password"]', 'wrongpass');
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator('.login-form p')).toContainText('Your email or password is incorrect!');
});
