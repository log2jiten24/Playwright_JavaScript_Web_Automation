const {test , expect } = require('@playwright/test') ;

test.use({viewport: {width : 1500 , height : 600}}) //to set the viewport size at the test level 
//it will not take the viewport size defined inside the playwright.config.js file 


test('Playwright Demo First Test' , async function ({page}) {

await page.goto('https://www.google.com') ;
const url_page = page.url() ;
console.log('URL Login Page Fetched :' , url_page); 

//print the title of the page 
const title_page = await page.title() ;
console.log('Title of the Page :' , title_page);

//write the assertions with expect keyword 
await expect(page).toHaveTitle('Google') ;
});



test('Playwright Login Demo Test' , async function ({page}) {
    //navigate to the following url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') ;
    //fill up the username and password with a delay of 200 milliseconds  
    await page.locator("input[name = 'username']").fill('Admin', {delay :200});
    await page.getByPlaceholder('Password').type('admin123' , {delay :100}) ;

    //click on login button 
    await page.locator("//button[@type = 'submit']").click() ;

    //add some external timeout to wait 
   // await page.waitForTimeout(3000) ;// this should only be used for debugging the tests 

    //write assertion to have the url matching once login is done - to ensure the page is navigated to
    //particular url 
    await expect(page).toHaveURL(/dashboard/) ;

    //click on logout button 
    await page.getByAltText("profile picture").first().click() ;
    await page.getByText('Logout').click();

    await expect(page).toHaveURL(/loginn/) ;
    //await page.waitForTimeout(3000) ;

});

test('Playwright Invalid Login Message capture ' , async function ({page}) {
    //navigate to the following url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') ;
    //get the width and height of the page using the viewPort Method 
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);


    //fill up the username and password with a delay of 200 milliseconds  
    await page.locator("input[name = 'username']").fill('Admin', {delay :100});
    await page.getByPlaceholder('Password').type('admin1234' , {delay :100}) ;

    //click on login button 
    await page.locator("//button[@type = 'submit']").click() ;

    //validate the invalid credentials text
    const error_message = await page.locator("//p[contains(@class , 'alert-content-text')]").textContent();
    console.log('Error Message Captured :' , error_message); 

    //add the assertion for the error message to verify 
    expect(error_message.includes("Invalid")).toBeTruthy() ;
    //add the assertion to verify the exact message 
    expect(error_message === 'Invalid credentials').toBeTruthy();


});
