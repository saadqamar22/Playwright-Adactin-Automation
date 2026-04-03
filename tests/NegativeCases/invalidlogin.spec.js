import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import loginData from '../../testdata/loginData.json' with { type: 'json' };

test('Login with invalid username/password', async ({ page }) => {
    const login = new LoginPage(page);
    const data = loginData.invalidUsers[0];

    await login.goto();
    await login.login(data.username, data.password);

    await expect(page.locator('.auth_error').first()).toContainText("Invalid Login details or Your Password might have expired. ");


});