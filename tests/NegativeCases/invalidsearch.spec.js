import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import SearchHotel from '../../pages/SearchHotel';
import loginData from '../../testdata/loginData.json' with { type: 'json' };
import searchData from '../../testdata/searchData.json' with { type: 'json' };

test('Search hotel without selecting mandatory fields', async ({ page }) => {

    const login = new LoginPage(page);
    const search = new SearchHotel(page);

    const logindata = loginData.validUsers[0];

    await login.goto();
    await login.login(logindata.username, logindata.password);
    await search.search(searchData.invalidSearch[0]);

    await expect(page.locator('#location_span').first()).toContainText("Please Select a Location");

});