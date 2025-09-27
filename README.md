# SauceDemo Automation Tests

Playwright tests for https://www.saucedemo.com

## Setup
```bash
npm install
npm init playwright@latest
```

## Run Tests

**Run all scenarios (sequential)**
```bash
npm run test:all
# headed:
npm run test:all:headed
```

**Q1 only (locked_out_user error)**
```bash
npm run test:q1
# headed:
npm run test:q1:headed
```

**Q2 only (standard_user checkout flow)**
```bash
npm run test:q2
# headed:
npm run test:q2:headed
```

**Q3 only (performance_glitch_user)**
```bash
npm run test:q3
# headed:
npm run test:q3:headed
```

## Reports

### Allure
Run any test or suite, then:
```bash
npm run allure:gen
npm run allure:open
```

**One-step examples**
```bash
npm run test:q1:allure
npm run test:q2:allure
npm run test:q3:allure
npm run test:all:allure
```
