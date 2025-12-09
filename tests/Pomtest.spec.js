
import {test} from "@playwright/test"
import { loginpage } from './pages/loginpage';
import { HomePage, Homepage } from './pages/Homepage';
import { Cartpage } from './pages/Cartpage';


test('test',async({page})=>{


    //login

const login = new loginpage(page);
await login.gotoLogInpage();
await login.login();


    //homepage\

const home = new HomePage(page);
await home.openProduct();

    //cart

const cart = new Cartpage(page)

await cart.addcart();



});
