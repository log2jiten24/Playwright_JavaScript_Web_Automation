const {test, expect} = require('@playwright/test')

test('Handling of Keyboard Events ' , async function ({page}) {

    await page.goto("https:///www.google.com") ;
    //await page.locator("[name = 'q']").fill("Playwright") ;
    //set the focus on the keyboard and then press enter 
    await page.locator("[name = 'q']").focus () ;
    await page.keyboard.type("Playwright test") ;
    await page.keyboard.press("ArrowLeft") ;
    await page.keyboard.down("Shift") ;

    for (let i = 0 ; i < 'test'.length ; i ++ ) 
    {
        await page.keyboard.press("ArrowLeft") ;
    }
    await page.keyboard.up("Shift") ;
    await page.keyboard.press("Backspace");
    //Press the Enter button 
   // await page.keyboard.press("Enter");
    await page.waitForTimeout(2000) ;
   /*
    await page.keyboard.press("Control+A") ;
    await page.keyboard.press("Control+C") ;
    await page.keyboard.press("Backspace") ;
    await page.keyboard.press("Control+V") ;
    */
})

test('Auto Suggestion  of Keyboard Events ' , async function ({page}) {

    await page.goto("https:///www.google.com") ;
    await page.locator("[name = 'q']").fill("Playwright Test") ;

    //wait for the selector to present 
    await page.waitForSelector("//li[@role = 'presentation']") ;

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

   
})


test('Auto Suggestion  of Keyboard Events using for loop' , async function ({page}) {

    await page.goto("https:///www.google.com") ;
    await page.locator("[name = 'q']").fill("Playwright Test") ;

    //get all the elements from the webpage 
    const all_links = await page.$$("//li[@role = 'presentation']") ;

    for (let i = 0 ; i < all_links.length ; i ++ ) 
    {
     const link_text = await all_links[i].textContent() ;
     
     if (link_text === "playwright testing") {
        await all_links[i].click() ;
        break;
        
     }
    }
   
   
})