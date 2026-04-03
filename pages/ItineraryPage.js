class ItineraryPage {
  constructor(page) {
    this.page = page;
    this.searchOrder = page.locator('#order_id_text');
    this.gobutton = page.locator('#search_hotel_id');
  }

  async searchOrderId(orderId) {
    await this.searchOrder.fill(orderId);
    await this.gobutton.click();
  }
}

export default ItineraryPage;