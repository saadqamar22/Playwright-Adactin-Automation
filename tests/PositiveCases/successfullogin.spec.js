import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import loginData from '../../testdata/loginData.json' with { type: 'json' };

test('Successful loginwith valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    const data = loginData.validUsers[0];

    await test.step('Login with valid credentials', async () => {
        await login.goto();
    });

    await test.step('Enter username and password, then click login', async () => {
        await login.login(data.username, data.password);
    });

    await test.step('Verify successful login', async () => {
        await expect(page.locator('.welcome_menu').first()).toHaveText("Welcome to Adactin Group of Hotels");
        await login.attachScreenshot('05-Login successful');
    });
});