
# 🌐 CloudBees Website Automation

This repository, UIautomation, showcases a UI automation framework developed using **TypeScript** and the **Playwright Test Runner**. It is designed to validate critical workflows and UI components on the CloudBees website. The framework ensures reliable and scalable browser automation, while **Allure** reporting is integrated to provide rich, interactive test reports. With support for end-to-end execution and cross-browser validation, this setup offers a modern and maintainable solution for frontend test automation.

---

## ✅ Features Automated

The following test scenarios are automated and validated:

1. Launch the browser and navigate to the CloudBees homepage.

2. Hover over the Products menu and select CloudBees CD/RO listed under the Other Products section.

   - ✅ Confirm that the "Cost Savings" metric is correctly shown as $2m by verifying the visibility and text content of the designated element.

3. Scroll to the relevant section and click on Auditors / Security.

   - ✅ Validate that the Release Governance area displays the expected message "Generate single-click audit reports" by asserting the text of the corresponding element.

4. From the Resources menu, click on Documentation.

   - ✅ Ensure that the documentation opens in a new browser tab by checking the title or URL of the new tab.

5. Locate and interact with the Search all CloudBees Resources input field.

   - ✅ Confirm that a full-screen modal appears by asserting its visibility in the DOM.

   - ✅ Enter the keyword "Installation" into the search and verify the presence of pagination controls at the bottom to ensure results navigation is available.

---

## 🔧 Prerequisites

Ensure the following are installed/configured on your system:

- Node.js (includes npm – Node Package Manager)
- TypeScript (installed via npm install typescript)
- Playwright (installed via npm install playwright)
- Allure Commandline (for generating and viewing test reports)
- A modern browser (e.g., Chromium, Firefox, or WebKit — all supported and handled automatically by Playwright)

> Frameworks & Tools Used:
> - Playwright Test Runner(test framework)
> - Allure (reporting)
> - TypeScript (programming language)

---

## 📁 Project Structure

```bash
cloudbeesUiAutomationAssignment/
│   
├── pages/
│     ├── headersPage.ts
│     ├── productPage.ts
│     └── resourcesPage.ts
│
├── base/
│     └── pomfixtures.ts
│
├── selectors/
│     ├── headerPageSelectors.json
│     ├── productPageSelectors.json
│     └── resourcesPageSelectors.json 
│
├── testData/
│     ├── documentationData.json
│     ├── pageTitle.json
│     └── productData.json    
│
├── test/
│     └── cloudbees.spec.ts
│
├── allure-report
├── allure-results
├── pom.xml
├── package.json
└── playwright.config.ts
```

---

## 📌 Key Components

### 1. **Page Classes (`pages` package)**
Encapsulate locators and methods for interacting with specific pages of the CloudBees website:
- `headerPage.ts`
- `productPage.ts`
- `resourcesPage.ts`

### 2. **Selectors Files (selectors folder)**
Centralized JSON files that store XPath locators for identifying web elements on specific pages. These files are used by the corresponding Page Classes to interact with the elements during test execution:
**
- `headerPageSelectors.json`: Contains XPath locators for elements in the header section (e.g., Products link, Resources link).
- `productPageSelectors.json`: Stores XPath locators for elements on the Products page (e.g., CloudBees CD/RO link, Cost Savings value).
- `resourcesPageSelectors.json`: Includes XPath locators for elements on the Resources page (e.g., Documentation link, Search field).

### 3. **Data Files (testData folder)**
Centralized JSON files that store test data for validating various functionalities of the CloudBees website. These files are used by the test scripts to provide input data and expected values during test execution:

- `documentationData.json`: Contains data related to the Documentation page (e.g., search terms, expected results).
- `pageTitle.json`: Stores expected page titles for different sections of the website.
- `productData.json`: Includes data for validating product-related information (e.g., "Cost Savings" value, product names).

### 4. **Test Class Files (test folder)**
The test folder contains the actual test scripts that validate the functionalities of the CloudBees website. These files use the Page Object Model (POM) to interact with the web pages and perform assertions.

- `cloudbees.spec.ts`: Contains Playwright test cases for validating key functionalities of the CloudBees website, such as:
      - Navigating to the Products page and verifying the "Cost Savings" value.
      - Clicking on "Auditors / Security" and validating the text under "Release Governance."
      - Navigating to the Resources page, opening the Documentation link in a new tab, and verifying the search functionality.
### 5. **Base Files (`base` folder)**
The `base` folder contains foundational files that set up the test environment and provide shared functionality for the test scripts. These files ensure consistency and reusability across the test suite.

- **`pomFixture.ts`**: 
  - Extends the Playwright `test` object to include custom fixtures for the Page Object Model (POM).
  - Initializes and provides instances of the following page classes:
    - `HeaderPage`: Handles interactions with the header section of the website.
    - `ProductPage`: Manages interactions with the Products page.
    - `ResourcesPage`: Facilitates interactions with the Resources page.
  - Uses Playwright's `extend` method to create reusable fixtures for these page objects, ensuring they are available in all test scripts.
  - Exports the custom `test` and `expect` objects for use in test files.

### Key Responsibilities of Base Files:
- **Page Object Initialization**: Automatically initializes page objects for use in tests.
- **Reusable Fixtures**: Provides shared functionality for interacting with different sections of the website.
- **Simplified Test Setup**: Reduces boilerplate code by making page objects readily available in test scripts.

### 6. **Configuration File (playwright.config.ts)**
The playwright.config.ts file is the central configuration file for the Playwright framework. It defines the browser settings, test environment, and other configurations required for running the tests.

- Browser Settings: Specifies the browser(s) to be used for testing (e.g., Chromium, Firefox, WebKit).
   - Base URL: Defines the base URL of the application under test (e.g., https://www.cloudbees.com/).
   - Test Timeout: Configures the maximum time allowed for each test to run.
   - Reporters: Sets up reporting options, such as generating Allure reports.
   - Screenshots and Videos: Enables capturing screenshots and videos for debugging failed tests.
   - Retries: Configures the number of retries for failed tests.

---

## ▶️ How to Run the Tests

### Step 1: Install Dependencies

Ensure all required dependencies are installed by running the following command:

```bash
npm install```

### Step 2: Execute the Test Suite and Generate the Allure Report
Run the Playwright test suite and generate the Allure report in one step using the following command:


```npm run allure:full
```
This command is a custom script defined in the package.json file. It performs the following actions:

Runs the Test Suite: Executes all Playwright test cases.
Generates the Allure Report: Processes the test results and creates a detailed Allure report.
Serves the Allure Report: Opens the generated Allure report in your default browser for easy viewing.

This single command simplifies the workflow by automating the entire process of running tests and generating reports.
---

## 📊 Reporting and Logging

- **Allure Report**: Rich test report with step logs, screenshots, and test details.

---

## 📌 Summary

This Playwright-based automation project ensures reliable and scalable validation of key functionalities on the CloudBees website. It is designed with the following principles:

- **Modularity**: Organized structure with separate folders for pages, selectors, test data, and base files.
- **Reusability**: Implements the Page Object Model (POM) to encapsulate page-specific logic and interactions.
- **Maintainability**: Centralized configuration and selectors ensure easy updates and scalability.
- **Comprehensive Reporting**: Generates detailed Allure reports with step logs, screenshots, and test results for better traceability.
- **Streamlined Workflow**: Simplifies test execution and reporting with custom scripts like `npm run allure:full`.

