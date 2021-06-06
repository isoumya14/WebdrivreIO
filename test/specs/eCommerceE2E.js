const expectchai = require('chai').expect
describe('Ecommerce Application',()=>
{
   it('End to End Test',()=>

   {
    var products = ["Blackberry","Nokia Edge"]
    browser.url("/loginpagePractise/#")
    $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    password.setValue("learning")
    $("#signInBtn").click()
    const link = $("*=Checkout")
    link.waitForExist()
    cards = $$("div[class='card h-100']")
    cards.filter(card=>products.includes(card.$("div h4 a").getText())) //it returns an array of 2 elements
    .map(productCard=>productCard.$(".card-footer button").click() )
    link.click()
    productPrices = $$("//tr/td[4]/strong")
    //getText()  
    //format it  and convert into Integer  ₹. 65000=> ₹,  65000
    // and apply sum on all the values
    const sumOfProducts = productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))//it returns an array of 2 elements
    .reduce((acc,price)=> acc + price,0) //1st argument , 2nd argument 
    //0+65000 = 65000
    //50,000 + 65000 =115000
    console.log(sumOfProducts)
    const TotalValue =$("h3 strong").getText()
    const totalIntValue = parseInt(TotalValue.split(".")[1].trim())
    expectchai(sumOfProducts).to.equal(totalIntValue)
    $(".btn-success").click()
    $("#country").setValue("ind")
    $(".lds-ellipsis").waitForExist({reverse:true})
    $("=India").click()
    $("[type='submit']").click()
    expect($(".alert-success")).toHaveTextContaining("Success")
















    
   })

})