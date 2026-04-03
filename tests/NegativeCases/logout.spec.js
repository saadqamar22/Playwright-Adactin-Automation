import { test, expect } from '@playwright/test';

test('Logout attempt without logging in', async ({ page }) => {
    await page.goto('/Logout.php');

    const successMessage = page.locator('td.reg_success');
    await expect(successMessage).toContainText('You have successfully logged out.');
    await expect(successMessage.locator('a')).toHaveText('Click here to login again');
});