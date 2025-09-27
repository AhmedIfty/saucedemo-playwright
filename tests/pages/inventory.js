import InventoryObjects from "../pageObjects/inventoryObjects.js";

export default class Inventory {
    constructor(page) {
        this.page = page;
        this.loc = new InventoryObjects(page);
    }

    async resetApp() {
        await this.loc.hamburger.click();
        await this.loc.resetAppState.click();
        await this.loc.menuClose.click();
    }

    async sortByZA() {
        await this.loc.sortSelect.selectOption('za');
    }

    async addFirstItemAfterSort() {
        const firstName = (await this.loc.nameByIndex(1).textContent()).trim();
        await this.loc.addButtonByIndex(1).click();
        return firstName;
    }

    async addFirstThree() {
        await this.loc.addButtonByIndex(1).click();
        await this.loc.addButtonByIndex(2).click();
        await this.loc.addButtonByIndex(3).click();
    }

    async openCart() {
        await this.loc.cartLink.click();
    }

    async checkoutInfo(first, last, zip) {
        await this.loc.checkoutBtn.click();
        await this.loc.firstName.fill(first);
        await this.loc.lastName.fill(last);
        await this.loc.postalCode.fill(zip);
        await this.page.waitForTimeout(1000);
        await this.loc.continueBtn.click();
    }

    async finishOrder() {
        await this.loc.finishBtn.click();
    }

    async backHome() {
        await this.loc.backHomeBtn.click();
    }

    async logout() {
        await this.loc.hamburger.click();
        await this.loc.logout.click();
    }
}