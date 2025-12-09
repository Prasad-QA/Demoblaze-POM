// loginpage.js
const { BasePage } = require('./BasePage');

exports.loginpage = class loginpage extends BasePage {

    //private credentials (Encapsulation)
    #username = 'pavanol';
    #password = 'test@123';

    constructor(page) {
        super(page); // inheritance → using BasePage constructor

        // locators
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = '//button[normalize-space()="Log in"]';
    }

    async gotoLogInpage() {
        await this.goto('https://demoblaze.com');
    }

    async login() {
         await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(this.#username);
        
        await this.page.locator(this.passwordInput).fill(this.#password);
        
        await this.page.locator(this.loginButton).click();
        await this.wait(3)
    }
};

