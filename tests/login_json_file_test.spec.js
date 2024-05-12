//Login to Test Data with different sets of test Data 

const {test , expect} = require("@playwright/test");
const test_data = JSON.parse(JSON.stringify(require("../testData/TestData_Basic_login.json")));

const test_data_updated = JSON.parse(JSON.stringify(require("../testData/TestData_login.json"))) ;

test("Login Application with JSON_Data" , async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("//input[@id = 'email1']").fill(test_data.username) ;
    await page.locator("//input[@id = 'password1']").fill(test_data.password) ;

    //await page.pause() ;
})

// test.describe("Data Driven Login Test " , function () 
// {

// for (const data of test_data_updated) 
// {

//     test.describe(`Login with users ${data.id}`, function ()
//     {
     
//         test("Login to Application with different sets ", async ({page}) => 
//             {
            
//                 await page.goto("https://freelance-learn-automation.vercel.app/login");
//                 await page.locator("//input[@id = 'email1']").fill(data.userName) ;
//                 await page.locator("//input[@id = 'password1']").fill(data.password) ;
//             });

//     })

// }    

//    })








