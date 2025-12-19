const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html"],
    [
      "allure-playwright",
      {
        outputFolder: "allure-results",
        detail: true,
        suiteTitle: true,
      },
    ],
  ],
  use: {
    baseURL: "https://www.demoblaze.com",
    trace: "on-first-retry",
    screenshot: "on",
    video: "retain-on-failure",
    launchOptions: {
      args: [
        "--disable-blink-features=AutomationControlled",
        "--disable-features=PasswordManager",
        "--disable-save-password-bubble",
      ],
    },
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
