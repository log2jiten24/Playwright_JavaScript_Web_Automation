//Handling of Multiple Browser tab  inside the Playwright 

const {test , expect} = require("@playwright/test")

test("Handling Multiple Browser Tabs in Playwright " , async  ({browser})=> {

    const context = await browser.newContext() ;//create a separate Browser Profile 
    const page =    await context.newPage() ; //create a new page inside the Browser  
    
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    //create a new Page Conttext
       const [new_Page] = await  Promise.all(
            [
                context.waitForEvent("page") ,
                page.locator("(//a[contains(@href, 'facebook')])[1]").click()
            ]
        )

        await new_Page.locator("//input[@name = 'email']").fill("log2jeet@gmail.com");

});

test("Handling of Network call " , async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New user? Signup").click();
    //to make the Network calls idle and stable
    await page.waitForLoadState("networkidle") ;

    const count = await page.locator("//input[@type = 'checkbox']").count() ;
    expect(count).toBe(3)

});
