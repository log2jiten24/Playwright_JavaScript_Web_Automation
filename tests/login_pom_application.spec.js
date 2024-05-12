const {test, expect} = require('@playwright/test')

const login_page_import = require('../pages/loginPage');//import the class 
const home_page_import =  require("../pages/homePage");
const login_credentials = require("../testData/login_cred.json")

test('Login Application test ' , async function ({page}) 
{

await page.goto("https://freelance-learn-automation.vercel.app/login");

//create the object of the class 
const page_object = new login_page_import(page) ;

//call the method from the class by the object reference 
await page_object.loginApplication(login_credentials.username , login_credentials.password) ;

//create the object of the HomePage class 
const home_page_obj = new home_page_import(page) ;
//acess the methods of the HomePage class 
await home_page_obj.logOutApplication() ;

//verify the header of login home  page is visible
await page_object.header_verify () ;

})

 