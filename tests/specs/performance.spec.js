import { test, expect } from "@playwright/test";
import Login from "../pages/login.js";
import Inventory from "../pages/inventory.js";

test.describe("performance_glitch_user flow", () => {
    test("performance_glitch_user sort and buy first item", async ({ page }) => {
        const login = new Login(page);
        await login.goto();
        await login.login("performance_glitch_user", "secret_sauce");

        const inv = new Inventory(page);

        // Reset App State
        await inv.resetApp();

        // Sort by Name (Z to A)
        await inv.sortByZA();

        // Add first product
        const expectedName = await inv.addFirstItemAfterSort();
        await expect(inv.loc.cartBadge).toHaveText("1");

        // Cart, details
        await inv.openCart();
        await expect(inv.loc.cartItemNames).toHaveText([expectedName]);
        await inv.checkoutInfo("Iftekhar", "Ahmed", "1209");

        // Overview
        await expect(inv.loc.summaryItemNames).toHaveText([expectedName]);

        // Verify totals
        const priceText = await inv.loc.summaryItemPrices.first().textContent();
        const subtotalText = await inv.loc.subtotalLabel.textContent();  
        const taxText = await inv.loc.taxLabel.textContent();   
        const totalText = await inv.loc.totalLabel.textContent(); 

        const getMoney = (s) => Number((s.match(/([\d.]+)/) || [])[1]);

        const price = getMoney(priceText);
        const uiSubtotal = getMoney(subtotalText);
        const uiTax = getMoney(taxText);
        const uiTotal = getMoney(totalText);

        expect(uiSubtotal).toBeCloseTo(price, 2);
        expect(uiTotal).toBeCloseTo(uiSubtotal + uiTax, 2);

        // Finish and verify confirmation
        await inv.finishOrder();
        await expect(inv.loc.completeHeader).toHaveText("Thank you for your order!");
        await expect(inv.loc.completeText).toContainText("dispatched");

        // Back home, reset, logout
        await inv.backHome();
        await inv.resetApp();
        await inv.logout();
    });
});