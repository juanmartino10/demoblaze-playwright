const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const ContactPage = require("../pages/ContactPage");

test.describe("Contact Tests", () => {
  let homePage;
  let contactPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactPage = new ContactPage(page);
    await homePage.goto();
  });

  test("Should send a contact message successfully", async ({ page }) => {
    const dialogMessage = await contactPage.sendContactMessage();
    expect(dialogMessage).toContain("Thanks for the message");
  });
});
