import { test, expect } from "@playwright/test";
import Login from "../pages/login.js";

test.describe("Locked user error", () => {
    test("locked_out_user shows correct error text", async ({ page }) => {
        const login = new Login(page);
        await login.goto();
        await login.login("locked_out_user", "secret_sauce");
        await page.waitForTimeout(2000);

        const expected = "Epic sadface: Sorry, this user has been locked out.";

        await expect(login.loc.error).toBeVisible();
        await expect(login.loc.error).toHaveText(expected);
    });
});