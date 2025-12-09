// Homepage.js
const { BasePage } = require('./BasePage');

exports.HomePage = class HomePage extends BasePage {

    constructor(page) {
        super(page);

        this.product = "(//a[@href='prod.html?idp_=3'])[2]";
    }

    async openProduct() {
        await this.page.locator(this.product).click();
        await this.wait(5)
    }
};
