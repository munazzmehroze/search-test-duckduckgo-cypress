# 🧪 DuckDuckGo Search Verification - Cypress Suite

Automated end-to-end tests to verify that DuckDuckGo returns the correct link when searching for "The dev-friendly football API".

---

## 🔧 Tech Stack

- ✅ Cypress (E2E Testing)
- ✅ Mochawesome Reporter (HTML Reports)
- ✅ Screenshots on pass/fail
- ✅ URL navigation verification

---

## 📂 Project Structure

```
duckduckgo-search-verification/
├── cypress/
│   └── e2e/
│       └── duckduckgo_search_spec.cy.js   # Main test suite
├── cypress.config.js                      # Cypress configuration with Mochawesome
├── package.json                           # Project dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/duckduckgo-search-verification.git
cd duckduckgo-search-verification
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

```bash
npx cypress run
```

### 4. View the HTML Report

After running, open the report from:

```
cypress/reports/mochawesome.html
```

---

## ✅ Test Scenarios

### 🔹 Positive Test
- Searches for `"The dev-friendly football API"`
- Clicks the first result
- Verifies final URL is `https://www.football-data.org/`

### 🔹 Negative Test
- Asserts that the first result is **not** `https://www.football-data.org/`

### 🔹 Edge Case
- Uses gibberish input to verify graceful failure when no results are found

---

## 🧑‍💻 Author

Made with ❤️ by Munazza

---

## 📸 Screenshots

Screenshots are auto-captured and saved to:

```
cypress/screenshots/
```

---

## 🛠 CI/CD (Optional)

To run Cypress in GitHub Actions, add this to `.github/workflows/cypress.yml`:

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx cypress run
      - uses: actions/upload-artifact@v3
        with:
          name: cypress-report
          path: cypress/reports
```

---