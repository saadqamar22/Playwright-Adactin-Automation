import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import loginData from '../../testdata/loginData.json' with { type: 'json' };

test('Successful loginwith valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    const data = loginData.validUsers[0];

    await login.goto();
    await login.login(data.username, data.password);

    await expect(page.locator('.welcome_menu').first()).toHaveText("Welcome to Adactin Group of Hotels");


});