const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const ProductPage = require("../pages/ProductPage");
const CartPage = require("../pages/CartPage");

test.describe("Purchase Tests", () => {
  let homePage;
  let productPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    await homePage.goto();
  });

  test("Should complete a purchase successfully", async ({ page }) => {
    await productPage.selectAndAddToCart();

    const successMessage = await cartPage.completePurchaseFlow();
    expect(successMessage).toContain("Thank you for your purchase!");
  });
});
