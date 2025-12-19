const BasePage = require("./BasePage");

class ContactPage extends BasePage {
  constructor(page) {
    super(page);

    this.contactLink = 'a[data-target="#exampleModal"]';
    this.emailInput = "#recipient-email";
    this.nameInput = "#recipient-name";
    this.messageTextarea = "#message-text";
    this.sendButton = 'button[onclick="send()"]';
  }

  async openContactModal() {
    await this.page.click(this.contactLink);
  }

  async fillContactForm(email, name, message) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.messageTextarea, message);
  }

  async sendMessage() {
    let dialogMessage = "";

    this.page.once("dialog", async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    await this.page.click(this.sendButton);

    return dialogMessage;
  }

  async sendContactMessage() {
    await this.openContactModal();
    await this.fillContactForm(
      "juan@martino.com",
      "Juan Martino",
      "This is a test message"
    );
    return await this.sendMessage();
  }
}

module.exports = ContactPage;
