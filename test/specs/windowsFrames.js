describe('Windows and Frames Miscellanous',()=>
{
   xit('Parent and Child windows switch',()=>

   {
    browser.url("/AutomationPractice/")
    $("[onclick*='openWindow']").click()
   var  handles =browser.getWindowHandles()
   //0th index parent window, 1st index child window
   browser.switchToWindow(handles[1])
   console.log(browser.getTitle())
   browser.maximizeWindow()
   browser.closeWindow()
   browser.switchToWindow(handles[0])
   console.log(browser.getTitle())
   browser.newWindow("https://rahulshettyacademy.com/#/index") //switch
   const title = browser.getTitle()
   browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
   $("#name").setValue(title)
   browser.pause(3000)
   browser.switchWindow(title)
   console.log(browser.getUrl())


   })

   it('Frames switch',()=>

   {
    browser.url("/AutomationPractice/")
    $("#mousehover").scrollIntoView()
    console.log($$("a").length)
    browser.switchToFrame($("[id='courses-iframe']"))
    console.log($("=Courses").getTagName())
    console.log($$("a").length)
    browser.switchToFrame(null)
    console.log($$("a").length)







   })

})