import { test, expect } from "@playwright/test";
import Login from "../pages/login.js";
import Inventory from "../pages/inventory.js";

test.describe("Q2 - standard_user purchase flow", () => {
    test("reset -> add 3 -> verify names & total -> finish -> reset -> logout", async ({ page }) => {
        // Login
        const login = new Login(page);
        await login.goto();
        await login.login("standard_user", "secret_sauce");
        await page.waitForTimeout(1000);

        const inv = new Inventory(page);

        // Reset App State
        await inv.resetApp();
        await page.waitForTimeout(1000);

        // Add three items
        await inv.addFirstThree();
        await expect(inv.loc.cartBadge).toHaveText("3");
        await page.waitForTimeout(1000);

        // Go to cart and verify chosen product names
        await inv.openCart();
            const expectedNames = [
                "Sauce Labs Backpack",
                "Sauce Labs Bike Light",
                "Sauce Labs Bolt T-Shirt",
            ];

        await expect(inv.loc.cartItemNames).toHaveText(expectedNames);
        await page.waitForTimeout(500);
        
        // Checkout, fill info, go to overview
        await inv.checkoutInfo("Iftekhar", "Ahmed", "1209");

        // Verify names
        await expect(inv.loc.summaryItemNames).toHaveText(expectedNames);

        // Verify totals
        const expectedSubtotal = 29.99 + 9.99 + 15.99;
        const subtotalText = await inv.loc.subtotalLabel.textContent();
        const taxText = await inv.loc.taxLabel.textContent();
        const totalText = await inv.loc.totalLabel.textContent();

        const getMoney = (s) => Number((s.match(/([\d.]+)/) || [])[1]);

        const uiSubtotal = getMoney(subtotalText);
        const uiTax = getMoney(taxText);
        const uiTotal = getMoney(totalText);

        expect(uiSubtotal).toBeCloseTo(expectedSubtotal, 2);
        expect(uiTotal).toBeCloseTo(uiSubtotal + uiTax, 2);

        // Finish + confirm message
        await inv.finishOrder();
        await expect(inv.loc.completeHeader).toHaveText("Thank you for your order!");
        await expect(inv.loc.completeText).toContainText("dispatched");
        await page.waitForTimeout(1000);

        // Back home, reset, logout
        await inv.backHome();
        await inv.resetApp();
        await inv.logout();
    });
});