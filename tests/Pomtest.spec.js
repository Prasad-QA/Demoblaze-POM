
import {test,expect} from '@playwright/test';
import { loginpage } from './pages[demoblaze]/loginpage';
import { Homepage } from './pages[demoblaze]/Homepage';
import { Cartpage } from './pages[demoblaze]/Cartpage';

test('test',async({page})=>{


    //login

const login = new loginpage(page);
await login.gotoLogInpage();
await login.login('pavanol','test@123')


    //homepage\

const home = new Homepage(page);
await home.homepage();

    //cart

const cart = new Cartpage(page)

await cart.addcart();


});
