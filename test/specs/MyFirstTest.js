// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

describe('Ecommerce Application', () => {

    xit('Login Page title-smoke', () => {
        browser.url('loginpagePractise/#');
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('Rahul Shetty Academy');
        $('#username').setValue('rahulShettyAcademy');
        const password = $('#password');
        password.setValue('12345');
        $('#signInBtn').click();
        browser.waitUntil(() => $('#signInBtn').getAttribute('value') === 'Sign In',
            { timeout: 10000, timeoutMsg: 'Element not visible in given time', interval: 2000 });
        const errorMessage = $('.alert-danger').getText();
        console.log(`The error message is ${errorMessage}`);
        console.log($("p").getText());
        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)");

    })
    it('Login Success page title-smoke', function () {
        this.retries(2);
        browser.url("/loginpagePractise/");
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        const link = $("*=Checkout")
        link.waitForExist()
        expect(browser).toHaveTitle("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")


    })
});

