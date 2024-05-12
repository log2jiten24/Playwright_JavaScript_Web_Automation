const {test , expect} = require ('@playwright/test') 


test('My First Test Suite :' , async function ({page}){

expect(100).toBe(100) ;
})

test('My Second Test Suite :' , async function ({page}){

expect(100).toBe(101) ;
})


test('My Third Test Suite :' , async function ({page}){

expect("Jitendra").toContain("Jiten");   
})

test('My Fourth Test Suite :' , async function ({page}){

expect(true).toBeTruthy()  ;
})

test('My Fifth Test Suite :' , async function ({page}){

expect(false).toBeFalsy() ;
})

test('My Sixth Test Suite :' , async function ({page}){

expect('Kumar Jitendra'.includes('Kumar')).toBeTruthy() ;
    
})



