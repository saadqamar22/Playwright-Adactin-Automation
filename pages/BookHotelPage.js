class BookHotelPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.address = page.locator('#address');
        this.ccNum = page.locator('#cc_num');
        this.ccType = page.locator('#cc_type');
        this.expMonth = page.locator('#cc_exp_month');
        this.expYear = page.locator('#cc_exp_year');
        this.cvv = page.locator('#cc_cvv');
        this.bookbutton = page.locator('#book_now');
    }

    async book(data) {
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.address.fill(data.address);
        await this.ccNum.fill(data.ccNum);
        await this.ccType.selectOption(data.ccType);
        await this.expMonth.selectOption(data.expMonth);
        await this.expYear.selectOption(data.expYear);
        await this.cvv.fill(data.cvv);
        await this.bookbutton.click();
    }
}

export default BookHotelPage;