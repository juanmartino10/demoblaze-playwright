const BasePage = require("./BasePage");

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Login selectors
    this.loginLink = "#login2";
    this.loginModal = "#logInModal";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = 'button[onclick="logIn()"]';
    this.welcomeUser = "#nameofuser";
  }

  async performLogin(username, password) {
    const responsePromise = this.page.waitForResponse(
      (response) =>
        response.url().includes("/login") &&
        response.request().method() === "POST"
    );

    await this.page.click(this.loginLink);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    const response = await responsePromise;
    return response;
  }
}

module.exports = HomePage;
