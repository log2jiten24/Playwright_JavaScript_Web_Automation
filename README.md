# Playwright_JavaScript_Web_Automation

This Repository is about the Playwright with JavaScript use for automating the web Applications.

Clone the above Repository. 

Precondition :- 
a) Node.js and npm package should be installed .(recommended above 18 version).

After the precondition is done , please follow the following steps to install dependency and run the tests.

a) To install the dependencies , run the following command in the terminal - npm install.

b) To execute the test - npx playwright tests 

c) To execute test on the browser in headed mode - npx playwright tests --headed project = 'chromium'

d) To execute specific test name - npx playwright test ./tests/fileName -- headed 

e) If we dont give the headed tag - by default the playwright runs all the tests in the headed mode.

f) Git Hub Actions workflow will get triggered - whenever any push/pull is triggered on the main branch.

g) By default - playwright will generate the html report. 

h) To view the allure report - run the following commands -
Generate Allure Report 

allure generate allure-results -o allure-report --clean

Open Allure Report 

allure open allure-report
