
//import {test} from "@playwright/test"
import { loginpage } from './pages/loginpage';
import { HomePage, Homepage } from './pages/Homepage';
import { Cartpage } from './pages/Cartpage';
const { test, expect } = require("./fixtures/envFixture");


test('test',async({page,envData})=>{


    //login

const login = new loginpage(page ,envData);
await login.gotoLogInpage();
await login.login();


    //homepage\

const home = new HomePage(page);
await home.openProduct();

    //cart

const cart = new Cartpage(page)

await cart.addcart();



});
