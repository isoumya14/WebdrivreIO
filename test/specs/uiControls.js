const expectchai = require("chai").expect;

describe("Ecommerce Application", () => {
  it("UI Controls sanity", () => {
    browser.url("/loginpagePractise/#");
    $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    password.setValue("learning");
    const radioButtons = $$(".customradio");
    userDropdown = radioButtons[1];
    userDropdown.$(".radiotextsty").click(); //chain of locators
    const modal = $(".modal-body");
    modal.waitForDisplayed();
    $("#cancelBtn").click();
    console.log(userDropdown.$(".radiotextsty").isSelected());
    userDropdown.$(".radiotextsty").click();
    $(".modal-body").waitForDisplayed();
    $("#okayBtn").click();
    radioButtons[0].$(".radiotextsty").click();
    //step which will tell that pop up is not displayed
    expect(modal).not.toBeDisplayed();
    const dropdown = $("select.form-control");
    dropdown.selectByAttribute("value", "teach");
    dropdown.selectByVisibleText("Consultant");
    dropdown.selectByIndex(0);
    dropdown.getValue(); //stud chai is one library which supports assertions
    expectchai(dropdown.getValue()).to.equal("stud");
  });

  xit("Dynamic Dropdown Controls Smoke", () => {
    browser.url("/AutomationPractice/");
    $("#autocomplete").setValue("ind");
    browser.pause(3000);
    let items = $$("[class='ui-menu-item'] div");
    //    for(var i =0;i<items.length;i++)
    //    {
    //        console.log(items[i].getText())

    //    }
    const desiredLocator = items.filter((item) => item.getText() === "India");
    desiredLocator[0].click();
  });

  it("Checkboxes Identification-smoke", () => {
    browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = $$("input[type='checkbox']");
    element[1].click();
    console.log(element[1].isSelected());
    console.log(element[2].isSelected());
    browser.saveScreenshot("screenshot.png");
  });
});
