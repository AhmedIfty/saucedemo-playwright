export default class LoginObjects {
    constructor(page) {
        this.page = page;
        this.username = page.locator("//input[@data-test='username' or @id='user-name']");
        this.password = page.locator("//input[@data-test='password' or @id='password']");
        this.loginButton = page.locator("//input[@data-test='login-button' or @id='login-button']");
        this.error = page.locator("//h3[@data-test='error']");
        this.errorClose = page.locator("//button[@data-test='error-button']");
    }
}