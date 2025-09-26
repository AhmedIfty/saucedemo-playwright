import LoginObjects from "../pageObjects/loginObjects.js";

export default class Login {
    constructor(page) {
        this.page = page;
        this.loc = new LoginObjects(page);
    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username, password) {
        await this.loc.username.fill(username);
        await this.loc.password.fill(password);
        await this.loc.loginButton.click();
    }
}