# SauceDemo Automation Tests

This project contains Playwright automation tests for [saucedemo.com](https://www.saucedemo.com/).  
The tests follow a Page Object Model (POM) structure.

## Setup
npm install
npx playwright install

Run Tests

Run all tests:
npm test

Run Q1 only:
npm run test:q1

Run Q1 with browser visible:
npm run test:q1:headed

Reports
Playwright HTML Report
npm run report

Allure Report
Run tests
npm run test:q1

Generate and open report
npm run allure:gen
npm run allure:open

Or in one step:
npm run test:q1:allure
