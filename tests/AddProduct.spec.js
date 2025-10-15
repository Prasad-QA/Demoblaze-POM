
import { test,expect } from "@playwright/test";
import { count } from "console";



test('Add product to cart ',async ({page})=>{



//Login 

await page.goto('https://demoblaze.com/');
await page.locator('#login2').click();
await page.locator('#loginusername').fill("pavanol");
await page.locator('#loginpassword').fill("test@123");

await page.getByRole('button',{name:'Log'}).click();



//Home page


await page.getByRole('link',{name:'Iphone 6 32gb'}).click();
 


//Cart page

await page.getByText('Add to cart ').click();

})