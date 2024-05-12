const { expect } = require("@playwright/test");
const { throws } = require("assert");

class LoginPage {


    //create a parameterized constructor of the page
    constructor(page)
    {
     //creating the instance of the page inside the constructor    
     this.page = page ;
     this.header = "//h2[text() = 'Sign In']" ;
     this.username = "//input[@id = 'email1']" ;
     this.password = "#password1" ;
     this.login_button = "//button[text() = 'Sign in']"

    }
    
    //create the reusable methods 
    async loginApplication (userName , password) 
    {
     await this.page.fill(this.username, userName) ;
     await this.page.fill(this.password, password) ;
     await this.page.click(this.login_button) ;
    }

    //create method for click 
    async header_verify () 
    {
    await expect(this.page.locator(this.header)).toBeVisible() ;
    }


}

//to use this class in another class - we need to use the export functionality 
module.exports = LoginPage ;