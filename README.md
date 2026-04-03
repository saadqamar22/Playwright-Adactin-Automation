# Adactin Hotel Automation Framework

## Project Overview

End-to-end test automation of the Adactin Hotel web application in Playwright.  
This repository covers full user workflows and validation for successful and negative hotel booking scenarios.

- Project name: **Adactin Hotel Automation Framework**
- Description: **End-to-end test automation of the Adactin Hotel web application**
- Pattern: **Page Object Model (POM)**
- Data-driven: **JSON-based test data**

---

## Tech Stack

- JavaScript (Node.js)
- [Playwright](https://playwright.dev) (`@playwright/test`)
- Page Object Model (POM)
- Data-driven tests using JSON files
- HTML reporter (Playwright built-in)

---

## Features

- Automated flows:
  - login
  - hotel search
  - hotel selection
  - booking
  - itinerary validation
  - logout
- 10 test cases (5 positive, 5 negative)
- Assertions for UI validation, error messages, page navigation, and booking confirmation (Order ID)
- Browser coverage: Chromium / Firefox / WebKit (configurable)
- Retry logic for CI and first-retry trace capture
- Base URL configuration for environment flexibility
- Video recording on failure and screenshots for debugging
- Configurable timeouts and headless execution

---

## Folder Structure

```
.
├── pages/
│   ├── LoginPage.js
│   ├── SearchHotel.js
│   ├── SelectHotelPage.js
│   ├── BookHotelPage.js
│   ├── ConfirmationPage.js
│   └── ItineraryPage.js
├── tests/
│   ├── E2E/e2e.spec.js
│   ├── PositiveCases/
│   │   ├── validsearch.spec.js
│   │   ├── selectionandbook.spec.js
│   │   ├── successfullogin.spec.js
│   │   └── successfullogout.spec.js
│   └── NegativeCases/
│       ├── invalidlogin.spec.js
│       ├── invalidsearch.spec.js
│       ├── invalidbooking.spec.js
│       └── logout.spec.js
├── testdata/
│   ├── loginData.json
│   ├── searchData.json
│   └── bookingData.json
├── playwright.config.js
├── package.json
└── README.md
```

---

## Installation & Setup

```bash
git clone <your-repo-url>
cd AdactinAutomation

# install dependencies
npm install

# optional: install Playwright browsers
npx playwright install
```

---

## How to Run Tests

### Run all tests

```bash
npm test
```

### Run a specific test file

```bash
npm test -- tests/E2E/e2e.spec.js
```

### Run only one project (e.g., chromium)

```bash
npm test -- --project=chromium
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Open HTML report after run

```bash
npm run test:report
```

---

## Test Scenarios

### Positive Cases (5)
- `successfullogin.spec.js` - valid user login
- `validsearch.spec.js` - valid hotel search
- `selectionandbook.spec.js` - select and book hotel
- `successfullogout.spec.js` - successful logout
- `E2E/e2e.spec.js` - full end-to-end workflow + itinerary check

### Negative Cases (5)
- `invalidlogin.spec.js` - invalid login credentials
- `invalidsearch.spec.js` - invalid search (missing required fields)
- `invalidbooking.spec.js` - invalid booking data (credit card / fields)
- `logout.spec.js` - logout behavior (edge conditions)
- plus one more negative path in invalid booking data matrix

---

## Configuration

### Playwright Config (`playwright.config.js`)

- **Base URL**: `https://adactinhotelapp.com` - All relative URLs resolve to this base
- **Timeouts**:
  - Test timeout: 30 seconds
  - Action timeout: 10 seconds
  - Navigation timeout: 30 seconds
  - Expect timeout: 5 seconds
- **Execution**: Runs headless by default, with video recording on failures
- **Browsers**: Chromium, Firefox, and WebKit support
- **Parallel execution**: Tests run in parallel for faster execution

### Test Data

Test data is stored in JSON files under `testdata/` directory:
- `loginData.json` - Login credentials
- `searchData.json` - Hotel search parameters
- `bookingData.json` - Booking form data

---

## Commands Summary

```bash
npm install
npm run install:browsers
npm test
npm run test:headed -- --project=chromium
npm run test:debug
npm run test:report
```