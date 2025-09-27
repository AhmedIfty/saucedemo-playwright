export default class InventoryObjects {
    constructor(page) {
        this.page = page;

        // Menu, Reset, Logout
        this.hamburger = page.locator("//button[@id='react-burger-menu-btn']");
        this.resetAppState = page.locator("//a[@id='reset_sidebar_link' or @data-test='reset-sidebar-link']");
        this.menuClose = page.locator("//button[@id='react-burger-cross-btn']");
        this.logout = page.locator("//a[@id='logout_sidebar_link' or @data-test='logout-sidebar-link']");
        
        // Add to cart
        this.addBackpack = page.locator("//button[@id='add-to-cart-sauce-labs-backpack' or @data-test='add-to-cart-sauce-labs-backpack']");
        this.addBikeLight = page.locator("//button[@id='add-to-cart-sauce-labs-bike-light' or @data-test='add-to-cart-sauce-labs-bike-light']");
        this.addBoltShirt = page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt' or @data-test='add-to-cart-sauce-labs-bolt-t-shirt']");
        
         // Inventory (generic names/prices if needed)
        this.inventoryItemNames = page.locator("//div[@data-test='inventory-item-name']");
        this.inventoryItemPrices = page.locator("//div[@data-test='inventory-item-price']");

        // Cart
        this.cartLink = page.locator("//a[contains(@class,'shopping_cart_link') and @data-test='shopping-cart-link']");
        this.cartBadge = page.locator("//span[@data-test='shopping-cart-badge']");
        this.cartItemNames = page.locator("//div[@class='cart_item']//div[@data-test='inventory-item-name']");

        // Checkout 1
        this.checkoutBtn = page.locator("//button[@id='checkout' or @data-test='checkout']");
        this.firstName = page.locator("//input[@id='first-name' or @data-test='firstName']");
        this.lastName = page.locator("//input[@id='last-name' or @data-test='lastName']");
        this.postalCode = page.locator("//input[@id='postal-code' or @data-test='postalCode']");
        this.continueBtn = page.locator("//input[@id='continue' or @data-test='continue']");

        // Checkout 2
        this.summaryItemNames = page.locator("//div[@class='cart_item']//div[@data-test='inventory-item-name']");
        this.subtotalLabel = page.locator("//div[@data-test='subtotal-label']");
        this.taxLabel = page.locator("//div[@data-test='tax-label']");
        this.totalLabel = page.locator("//div[@data-test='total-label']");

         // Finish & confirmation
        this.finishBtn = page.locator("//button[@id='finish' or @data-test='finish']");
        this.completeHeader = page.locator("//h2[@data-test='complete-header']");
        this.completeText = page.locator("//div[@data-test='complete-text']");
        this.backHomeBtn = page.locator("//button[@id='back-to-products' or @data-test='back-to-products']");
        
    }
}