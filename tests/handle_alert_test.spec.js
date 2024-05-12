//Handling of Alert inside the Playwright 

const {test , expect} = require("@playwright/test")

test("Handling of Alert in Playwright" , async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //to handle the alert 
    page.on('dialog' , async (d) => {
        expect(d.type()).toContain("alert") ;
        //capture the alert message 
        expect(d.message()).toContain("I am a JS Alert");
       //close the alert 
        await d.accept() ;

    })

    await page.locator("//button[text() = 'Click for JS Alert']").click();

    




})