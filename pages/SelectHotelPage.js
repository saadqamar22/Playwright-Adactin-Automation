class SelectHotelPage {
    constructor(page) {
        this.page = page;
        this.firstOption = page.locator('#radiobutton_0');
        this.continuebutton = page.locator('#continue');
    }

    async selectHotel() {
        await this.firstOption.check();
        await this.continuebutton.click();
    }
}

export default SelectHotelPage;