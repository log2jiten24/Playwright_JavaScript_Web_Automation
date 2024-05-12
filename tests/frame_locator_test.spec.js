//Handling of Frames  inside the Playwright 

const {test , expect} = require("@playwright/test")

test("Handling of Frames  in Playwright" , async function ({page}) {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    //switch to frame locator 
    const iframes = await page.frameLocator("//frame[@name = 'packageListFrame']");
    iframes.locator("//a[text()= 'java.applet']").click ();

    //await page.pause() ;//it pauses the script execution for a while 

})