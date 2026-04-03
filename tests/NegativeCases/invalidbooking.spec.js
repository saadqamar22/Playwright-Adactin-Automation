import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import SearchHotel from '../../pages/SearchHotel';
import SelectHotelPage from '../../pages/SelectHotelPage';
import BookHotelPage from '../../pages/BookHotelPage';

import loginData from '../../testdata/loginData.json' with { type: 'json' };
import searchData from '../../testdata/searchData.json' with { type: 'json' };
import bookingData from '../../testdata/bookingData.json' with { type: 'json' };

test('Booking with missing personal details', async ({ page }) => {

    const login = new LoginPage(page);
    const search = new SearchHotel(page);
    const select = new SelectHotelPage(page);
    const book = new BookHotelPage(page);

    const logindata = loginData.validUsers[0];

    await login.goto();
    await login.login(logindata.username, logindata.password);

    await search.search(searchData.validSearch[0]);

    await select.selectHotel();

    await book.book(bookingData.invalidBooking[0]);

    await expect(page.locator('#first_name_span').first()).toContainText("Please Enter your First Name");


});