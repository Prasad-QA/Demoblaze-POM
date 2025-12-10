const { BasePage } = require('./BasePage');

exports.loginpage = class loginpage extends BasePage {

    constructor(page, envData) {
        super(page);

        // Store environment data
        this.envData = envData;

        // locators
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = '//button[normalize-space()="Log in"]';
    }

    async gotoLogInpage() {
        await this.goto(this.envData.baseURL);
    }

    async login() {
        await this.page.locator(this.loginLink).click();

        await this.page.locator(this.usernameInput).fill(this.envData.username);
        await this.page.locator(this.passwordInput).fill(this.envData.password);

        await this.page.locator(this.loginButton).click();
        await this.wait(3);
    }
};
