export default class InventoryObjects {
    constructor(page) {
        this.page = page;

        // Menu, Reset, Logout
        this.hamburger = page.locator("//button[@id='react-burger-menu-btn']");
        this.resetAppState = page.locator("//a[@id='reset_sidebar_link' or @data-test='reset-sidebar-link']");
        this.menuClose = page.locator("//button[@id='react-burger-cross-btn']");
        this.logout = page.locator("//a[@id='logout_sidebar_link' or @data-test='logout-sidebar-link']");
        
        // Sorting
        this.sortSelect = page.locator("//select[@data-test='product-sort-container']");
        this.sortZAOption = page.locator("//select[@data-test='product-sort-container']/option[@value='za']");

        // Inventory lists
        this.inventoryItemContainers = page.locator("//div[@data-test='inventory-item-description']");
        this.inventoryItemNames = page.locator("//div[@data-test='inventory-item-name']");
        this.inventoryItemPrices = page.locator("//div[@data-test='inventory-item-price']");

        // Cart
        this.cartLink = page.locator("//a[contains(@class,'shopping_cart_link') and @data-test='shopping-cart-link']");
        this.cartBadge = page.locator("//span[@data-test='shopping-cart-badge']");
        this.cartItemNames = page.locator("//div[@class='cart_item']//div[@data-test='inventory-item-name']");
        this.cartItemPrices = page.locator("//div[@class='cart_item']//div[@data-test='inventory-item-price']");


        // Checkout 1
        this.checkoutBtn = page.locator("//button[@id='checkout' or @data-test='checkout']");
        this.firstName = page.locator("//input[@id='first-name' or @data-test='firstName']");
        this.lastName = page.locator("//input[@id='last-name' or @data-test='lastName']");
        this.postalCode = page.locator("//input[@id='postal-code' or @data-test='postalCode']");
        this.continueBtn = page.locator("//input[@id='continue' or @data-test='continue']");

        // Checkout 2
        this.summaryItemNames = page.locator("//div[@class='cart_item']//div[@data-test='inventory-item-name']");
        this.summaryItemPrices = page.locator("//div[@class='cart_item']//div[@data-test='inventory-item-price']");
        this.subtotalLabel = page.locator("//div[@data-test='subtotal-label']");
        this.taxLabel = page.locator("//div[@data-test='tax-label']");
        this.totalLabel = page.locator("//div[@data-test='total-label']");

         // Finish & confirmation
        this.finishBtn = page.locator("//button[@id='finish' or @data-test='finish']");
        this.completeHeader = page.locator("//h2[@data-test='complete-header']");
        this.completeText = page.locator("//div[@data-test='complete-text']");
        this.backHomeBtn = page.locator("//button[@id='back-to-products' or @data-test='back-to-products']");
    }

    // 1-based XPath index helpers
    nameByIndex(i1) {
        return this.page.locator(`(//div[@data-test='inventory-item-name'])[${i1}]`);
    }
    priceByIndex(i1) {
        return this.page.locator(`(//div[@data-test='inventory-item-price'])[${i1}]`);
    }
    addButtonByIndex(i1) {
        return this.page.locator(`(//div[@data-test='inventory-item-description'])[${i1}]//button[contains(@id,'add-to-cart')]`);
    }
}