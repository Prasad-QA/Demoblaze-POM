
exports.BasePage = class BasePage { 


    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
       
    }

  


    async wait(seconds) {
        await this.page.waitForTimeout(seconds * 1000);


    }

    async screenshot(name = 'screenshot') {
    await this.page.screenshot({ path: `./screenshots/${name}.png` });

}

};