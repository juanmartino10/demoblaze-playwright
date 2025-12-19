const BasePage = require("./BasePage");

class ProductPage extends BasePage {
  constructor(page) {
    super(page);

    this.addToCartButton = 'a[onclick*="addToCart"]';
  }

  async selectProduct(productName) {
    await this.page.click(`a:has-text("${productName}")`);
  }

  async addToCart() {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });

    await this.page.click(this.addToCartButton);
  }

  async selectAndAddToCart() {
    await this.selectProduct("Samsung galaxy s6");
    await this.addToCart();
  }
}

module.exports = ProductPage;
