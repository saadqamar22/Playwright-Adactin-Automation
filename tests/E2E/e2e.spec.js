import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import SearchHotel from '../../pages/SearchHotel';
import SelectHotelPage from '../../pages/SelectHotelPage';
import BookHotelPage from '../../pages/BookHotelPage';

import loginData from '../../testdata/loginData.json' with { type: 'json' };
import searchData from '../../testdata/searchData.json' with { type: 'json' };
import bookingData from '../../testdata/bookingData.json' with { type: 'json' };

test('e2e test', async ({ page }) => {

    test.setTimeout(60000); // ✅ THIS WORKS

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
    const orderId = await page.locator('#order_no').inputValue();
    expect(orderId).not.toBe('');


    //await page.locator('#my_itinerary').click();
    await page.locator('#my_itinerary').click({ timeout: 60000 });

    await page.locator('#order_id_text').fill(orderId);

    await page.locator('#search_hotel_id').click({ timeout: 60000 });
    await page.waitForSelector(`input[value="${orderId}"]`);

    await expect(page.locator(`input[value="${orderId}"]`)).toBeVisible();

    await page.locator('#logout').click();

    await expect(page.locator('text=You have successfully logged out'))
        .toBeVisible();


});