# Demoblaze - Playwright Automation Project

Test automation project for [Demoblaze](https://www.demoblaze.com/) using Playwright with Page Object Model pattern.

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## 🧪 Tests Included

### 1. Login Tests (`tests/login.spec.js`)

- ✅ Successful login with valid credentials
- ✅ API response validation (200 status code)

### 2. Purchase Tests (`tests/purchase.spec.js`)

- ✅ Select product and add to cart
- ✅ Complete purchase flow
- ✅ Fill order form with customer details
- ✅ Validate purchase success message

### 3. Contact Tests (`tests/contact.spec.js`)

- ✅ Open contact modal
- ✅ Fill contact form
- ✅ Send message
- ✅ Validate success dialog

## 🏗️ Architecture

This project uses the **Page Object Model (POM)** pattern for better maintainability and code reusability.

### Page Objects Structure

```
pages/
├── BasePage.js           # Base class for all page objects
├── HomePage.js           # Home page and login functionality
├── ProductPage.js        # Product selection and cart operations
├── CartPage.js           # Cart and checkout operations
└── ContactPage.js        # Contact form functionality
```

### Key Features

- **High-level workflow methods**: Each page object contains business logic methods
- **API validation**: Login validates API response status
- **Dialog handling**: Automatic handling of Chrome alerts
- **Clean tests**: Tests are simple and readable, all logic in page objects

## 🏃 Running Tests

### Run all tests

```bash
npm test
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
npx playwright test tests/purchase.spec.js
npx playwright test tests/contact.spec.js
```

### Run in UI mode (interactive)

```bash
npx playwright test --ui
```

### Run with headed mode (see browser)

```bash
npx playwright test --headed
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

## 📊 Reports

### View HTML report

```bash
npx playwright show-report
```

## 📁 Project Structure

```
demoblaze-playwright-tests/
├── pages/
│   ├── BasePage.js           # Base page object
│   ├── HomePage.js           # Home page + Login
│   ├── ProductPage.js        # Product selection + Add to cart
│   ├── CartPage.js           # Cart + Checkout
│   └── ContactPage.js        # Contact form
├── tests/
│   ├── login.spec.js         # Login tests
│   ├── purchase.spec.js      # Purchase flow tests
│   └── contact.spec.js       # Contact form tests
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # Documentation
```

## 🛠️ Technologies Used

- **Playwright**: Test automation framework
- **Node.js**: JavaScript runtime
- **Page Object Model**: Design pattern for test organization

## 📝 Notes

- Tests are configured to run on Chromium by default
- Chrome password manager alerts are disabled in configuration
- All business logic is encapsulated in Page Objects
- Tests validate both API responses and UI elements
