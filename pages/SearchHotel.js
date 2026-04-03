class SearchHotel {
    constructor(page) {
        this.page = page;
        this.location = page.locator('#location');
        this.hotel = page.locator('#hotels');
        this.roomType = page.locator('#room_type');
        this.rooms = page.locator('#room_nos');
        this.checkIn = page.locator('#datepick_in');
        this.checkOut = page.locator('#datepick_out');
        this.adults = page.locator('#adult_room');
        this.child = page.locator('#child_room');
        this.searchbutton = page.locator('#Submit');
    }

    async search(data) {
        if (data.location) {
            await this.location.selectOption(data.location);
        }

        if (data.hotel) {
            await this.hotel.selectOption(data.hotel);
        }

        if (data.roomType) {
            await this.roomType.selectOption(data.roomType);
        }

        if (data.rooms) {
            await this.rooms.selectOption(data.rooms);
        }

        if (data.checkIn !== undefined) {
            await this.checkIn.fill('');
            if (data.checkIn) await this.checkIn.fill(data.checkIn);
        }

        if (data.checkOut !== undefined) {
            await this.checkOut.fill('');
            if (data.checkOut) await this.checkOut.fill(data.checkOut);
        }

        if (data.adults) {
            await this.adults.selectOption(data.adults);
        }

        if (data.children) {
            await this.child.selectOption(data.children);
        }
        await this.searchbutton.click();
    }

}

export default SearchHotel;