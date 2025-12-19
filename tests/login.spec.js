const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/HomePage");

test.describe("Login Tests", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test("Should login successfully with valid credentials", async ({ page }) => {
    const response = await homePage.performLogin("testuser", "testpass123");

    expect(response.status()).toBe(200);
  });
});
