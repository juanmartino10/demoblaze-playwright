const BasePage = require("./BasePage");

class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.cartLink = "#cartur";
    this.placeOrderButton = 'button[data-target="#orderModal"]';
    this.nameInput = "#name";
    this.countryInput = "#country";
    this.cityInput = "#city";
    this.cardInput = "#card";
    this.monthInput = "#month";
    this.yearInput = "#year";
    this.purchaseButton = 'button[onclick="purchaseOrder()"]';
    this.successModal = ".sweet-alert.showSweetAlert.visible";
    this.successMessage = "h2";
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }

  async openPlaceOrderModal() {
    await this.page.click(this.placeOrderButton);
  }

  async fillOrderForm(name, country, city, card, month, year) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.countryInput, country);
    await this.page.fill(this.cityInput, city);
    await this.page.fill(this.cardInput, card);
    await this.page.fill(this.monthInput, month);
    await this.page.fill(this.yearInput, year);
  }

  async completePurchase() {
    await this.page.click(this.purchaseButton);
  }

  async getSuccessMessage() {
    await this.page.waitForSelector(this.successModal, { state: "visible" });
    return await this.page
      .locator(`${this.successModal} ${this.successMessage}`)
      .textContent();
  }

  async completePurchaseFlow() {
    await this.goToCart();
    await this.openPlaceOrderModal();
    await this.fillOrderForm(
      "Juan Martino",
      "Uruguay",
      "Montevideo",
      "1234567890",
      "12",
      "2025"
    );
    await this.completePurchase();
    return await this.getSuccessMessage();
  }
}

module.exports = CartPage;
