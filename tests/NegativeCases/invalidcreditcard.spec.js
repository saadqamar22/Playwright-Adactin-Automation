import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import SearchHotel from '../../pages/SearchHotel';
import SelectHotelPage from '../../pages/SelectHotelPage';
import BookHotelPage from '../../pages/BookHotelPage';

import loginData from '../../testdata/loginData.json' with { type: 'json' };
import searchData from '../../testdata/searchData.json' with { type: 'json' };
import bookingData from '../../testdata/bookingData.json' with { type: 'json' };

test('Invalid credit card details during payment', async ({ page }) => {

    const login = new LoginPage(page);
    const search = new SearchHotel(page);
    const select = new SelectHotelPage(page);
    const book = new BookHotelPage(page);

    const logindata = loginData.validUsers[0];

    await login.goto();
    await login.login(logindata.username, logindata.password);

    await search.search(searchData.validSearch[0]);

    await select.selectHotel();

    await book.book(bookingData.invalidBooking[1]);

    await expect(page.locator('#cc_num_span').first()).toContainText("Please Enter your 16 Digit Credit Card Number");


});