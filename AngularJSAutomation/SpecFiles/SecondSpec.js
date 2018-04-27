// Create First spec in Protractor

describe("Login End to End Scenario", function()
    {

        it("Register new user to application", function () {
            browser.get("http://amasik.com/demo/angularjs/angular-app")
            browser.driver.manage().window().maximize()
            browser.findElement(by.partialLinkText(browser.params.testdata.login.login_register)).click()
            browser.driver.sleep(4000)
            browser.findElement(by.name(browser.params.testdata.registratio.register_firstname)).sendKeys('Hello')
            browser.findElement(by.name(browser.params.testdata.registratio.register_lastname)).sendKeys('Testing')
            browser.findElement(by.name('email')).sendKeys('HelloTesting1@test.com')
            browser.findElement(by.name('password')).sendKeys('123456')
            browser.findElement(by.id('confirm_password')).sendKeys('123456')
            browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
            browser.findElement(by.buttonText('Register')).click()
            browser.driver.sleep(4000)
            //browser.findElement(by.partialLinkText('Login to your account')).click()
        });


    });