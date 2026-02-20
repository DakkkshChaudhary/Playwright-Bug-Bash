# ShopHub Playwright Test Framework

This repository contains an end-to-end UI automation framework built with **Playwright** and **JavaScript**. The focus is on validating the login functionality of the ShopHub application (https://bugbash.syook.com/).

## ✅ Framework Features

- Page Object Model (POM) architecture
- Data-driven tests using JSON
- Cross-browser support (Chromium, Firefox, WebKit)
- Parallel execution with Playwright Test Runner
- Headless and headed modes
- Automatic waiting (no hard-coded sleeps)
- HTML reporting with screenshots/videos on failures
- Trace capture on first retry

## 📁 Project Structure

```
pages/         # Page object classes
tests/         # Test specifications
config/        # (Optional) additional configuration
test-data/     # JSON files containing input data
playwright.config.js
``` 

## 🛠️ Running the Tests

Install dependencies (if not already):

```bash
npm install
```

Execute all tests in headless mode:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/login.spec.js
```

Run in headed mode (useful for debugging):

```bash
npx playwright test --headed
```

Run against a specific browser:

```bash
npx playwright test --project=firefox
```

Generate the HTML report after execution:

```bash
npx playwright show-report
```

## 📊 Test Data

The `test-data/loginData.json` file contains both valid and invalid login combinations.  Adding new scenarios is as simple as editing this JSON file; the tests will automatically pick them up.

## 📹 Artifacts

On failure, Playwright will automatically save:

- A screenshot (`test-results/.../screenshot.png`)
- A video (`test-results/.../video.mp4`)
- A trace if the test is retried

These artifacts can be reviewed via the HTML report.

---

Feel free to extend the framework with additional pages and workflows!
