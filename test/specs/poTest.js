 const loginPage = require('../pageObjects/loginPage')
 const shopPage = require('../pageObjects/shop')
 const reviewPage = require('../pageObjects/reviewPage')
 const expectchai = require('chai').expect
 const fs =require('fs')
let credentials =JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eCredentials =JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))
describe('Ecommerce Application',()=>
{

    credentials.forEach(  ({username,password})  =>{
   it('Login Fail page title',()=>

   {
       //webdriverIO code
       browser.url("/loginpagePractise/#")
       console.log(browser.getTitle())

       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    loginPage.Login(username,password)
       console.log(loginPage.alert.getText() +"is the text am seeing on the screen")
     //signing-dont checck   (Check after button turns to Sign In)
     browser.waitUntil(()=>    loginPage.signIn.getAttribute('value') === 'Sign In', 
      { timeout: 4000, timeoutMsg: 'Error message did not appear' })
     console.log(loginPage.alert.getText()+"is the text am seeing on the screen")
     expect(loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")

       
   })
})
e2eCredentials.forEach(  ({products})  =>{
   it('End to End Test',()=>

   {
   // var products = ["Blackberry","Nokia Edge"]
    browser.url("/loginpagePractise/#")
    loginPage.Login("rahulshettyacademy","learning")
    shopPage.checkout.waitForExist()
    shopPage.addProductToCart(products)
    shopPage.checkout.click()
    const sumOfProducts = reviewPage.sumOfProducts()
   const totalIntValue = reviewPage.totalFormattedPrice()
    expectchai(sumOfProducts).to.equal(totalIntValue)
    $(".btn-success").click()
    $("#country").setValue("ind")
    $(".lds-ellipsis").waitForExist({reverse:true})
    $("=India").click()
    $("[type='submit']").click()
    expect($(".alert-success")).toHaveTextContaining("Success")

})  
})

})