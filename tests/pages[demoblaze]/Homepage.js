
exports.Homepage =
class Homepage {

constructor(page){
this.page= page;
 this.product = "(//a[@href='prod.html?idp_=3'])[2]"


}


async homepage() {

//await this.page.getByRole('link',{name:'Iphone 6 32gb'}).click();
   
await this.page.locator(this.product).click();

}


}