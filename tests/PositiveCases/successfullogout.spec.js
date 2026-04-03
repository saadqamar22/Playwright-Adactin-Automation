import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import SearchHotel from '../../pages/SearchHotel';
import SelectHotelPage from '../../pages/SelectHotelPage';
import BookHotelPage from '../../pages/BookHotelPage';

import loginData from '../../testdata/loginData.json' with { type: 'json' };
import searchData from '../../testdata/searchData.json' with { type: 'json' };
import bookingData from '../../testdata/bookingData.json' with { type: 'json' };

test('Successful logout', async ({ page }) => {

    const login = new LoginPage(page);
    const search = new SearchHotel(page);
    const select = new SelectHotelPage(page);
    const book = new BookHotelPage(page);

    const logindata = loginData.validUsers[0];

    await login.goto();
    await login.login(logindata.username, logindata.password);

    await search.search(searchData.validSearch[0]);

    await select.selectHotel();

    await book.book(bookingData.validBooking[0]);

    await page.getByRole('button', { name: 'Logout' }).click();
     await expect(page.locator('.reg_success').first()).toHaveText("You have successfully logged out. Click here to login again");

});