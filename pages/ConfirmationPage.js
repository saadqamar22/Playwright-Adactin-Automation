class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.orderNo = page.locator('#order_no');
    this.itineraryButton = page.locator('#my_itinerary');
  }

  async getOrderNo() {
    await this.orderNo.waitFor();
    return await this.orderNo.inputValue();
  }
}

export default ConfirmationPage;