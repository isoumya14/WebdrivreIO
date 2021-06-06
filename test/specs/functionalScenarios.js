const expectchai = require('chai').expect
describe('Functional Testing on  Application',()=>
{
   xit('Scrolling and Mouse hover',()=>
   {

    browser.url("/AutomationPractice/")
    $("#mousehover").scrollIntoView()
     $("#mousehover").moveTo()
    $("=Top").click()
    browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
    $("button").doubleClick()
    console.log(browser.isAlertOpen()) //true
    expectchai(browser.isAlertOpen()).to.be.true
    console.log(browser.getAlertText())//
    expectchai(browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    browser.acceptAlert() //clicks on ok button
    browser.pause(3000)


})

it('Web Tables Sort validation Smoke',()=>
{
    browser.url("/seleniumPractise/#/offers")
    $("tr th:nth-child(1)").click()
    //retrive list of veggie names into array A
    //sort the array A ->Array B
    //compare Array A and Array B //fail
    const veggiesLocators = $$("tr td:nth-child(1)")
    const OriginalveggiesNames =veggiesLocators.map(veggie=>veggie.getText())
    console.log(OriginalveggiesNames)
    veggies =OriginalveggiesNames.slice()
     //Arrays are pass by reference
    sortedVeggies = veggies.sort()
    console.log(sortedVeggies)
    expectchai(OriginalveggiesNames).to.eql(sortedVeggies)


})

xit('Web Tables Filter validation',()=>
{
    browser.url("/seleniumPractise/#/offers")
    $("input[type='search']").setValue("tomato")
    const veggieLocators = $$("tr td:nth-child(1)")
    expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
    console.log(veggieLocators[0].getText())
    expect(veggieLocators[0]).toHaveTextContaining("Tomto")



})



})