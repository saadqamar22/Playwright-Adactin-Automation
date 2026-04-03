import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import SearchHotel from '../../pages/SearchHotel';
import loginData from '../../testdata/loginData.json' with { type: 'json' };
import searchData from '../../testdata/searchData.json' with { type: 'json' };

test('Valid hotel search with correct filters', async ({ page }) => {

    const login = new LoginPage(page);
    const search = new SearchHotel(page);

    const logindata = loginData.validUsers[0];

    await login.goto();
    await login.login(logindata.username, logindata.password);
    await search.search(searchData.validSearch[0]);

    await expect(page.locator('.login_title')).toHaveText("Select Hotel");

});