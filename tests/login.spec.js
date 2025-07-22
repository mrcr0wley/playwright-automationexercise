const { test, expect } = require('@playwright/test');

// Test case 1: Login page is accessible from header
test('Login page is accessible from header', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await expect(page).toHaveURL('https://automationexercise.com/login');
  await expect(page.locator('input[data-qa="login-email"]')).toBeVisible();
});


// Test case 2: Login with both fields empty
test('Login with both fields empty', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.click('button[data-qa="login-button"]');

  // Проверяем, что форма не отправилась (URL не изменился)
  await expect(page).toHaveURL('https://automationexercise.com/login');

  // Проверяем, что из-за встроенной HTML5-валидации (атрибут required)
  // форма не отправляется, и фокус остаётся на первом пустом поле email
  await expect(page.locator('input[data-qa="login-email"]')).toBeFocused();
});

// Test case 3: Login with only email
test('Login with only email', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', 'mr.crowleyit@gmail.com');
  await page.fill('input[data-qa="login-password"]', '');
  await page.click('button[data-qa="login-button"]');
  
  // Проверяем, что форма не отправилась
  await expect(page).toHaveURL('https://automationexercise.com/login');

  // Фокус должен перейти на пустое поле пароля
  await expect(page.locator('input[data-qa="login-password"]')).toBeFocused();
});

// Test case 4: Login with only password
test('Login with only password', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', '');
  await page.fill('input[data-qa="login-password"]', 'qwerty');
  await page.click('button[data-qa="login-button"]');
  
  // Проверяем, что форма не отправилась
  await expect(page).toHaveURL('https://automationexercise.com/login');

  // Проверяем, что фокус остался на поле email из-за валидации required
  await expect(page.locator('input[data-qa="login-email"]')).toBeFocused();
});

// Test case 5: Login with invalid email
test('Login with invalid email shows error', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', 'wrong@example.com');
  await page.fill('input[data-qa="login-password"]', 'qwerty');
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator('.login-form p')).toContainText('Your email or password is incorrect!');
});

// Test case 6: Login with invalid password
test('Login with invalid password shows error', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', 'mr.crowleyit@gmail.com');
  await page.fill('input[data-qa="login-password"]', 'wrongpassword');
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator('.login-form p')).toContainText('Your email or password is incorrect!');
});

// Test case 7: Login with valid credentials
test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', 'mr.crowleyit@gmail.com');
  await page.fill('input[data-qa="login-password"]', 'qwerty');
  
  await Promise.all([
        page.waitForURL('https://automationexercise.com/'),
        page.click('button[data-qa="login-button"]'),
  ]);
  await expect(page.getByText('Logged in as')).toBeVisible();
});