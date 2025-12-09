const { BasePage } = require("./BasePage");

exports.Cartpage = class Cartpage extends BasePage {

constructor(page){
super(page);
    
}

async addcart(){

await this.page.getByText('Add to cart ').click();

this.page.on('dialog', dialog => dialog.accept());

await this.page.getByRole('link', { name: 'Home' }).click();

await this.page.getByRole('link', { name: 'Cart' }).click();

await this.screenshot('items')

}


}