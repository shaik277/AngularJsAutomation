describe("Login Functionality", function(){

    beforeEach(function(){
        browser.get("http://amasik.com/demo/angularjs/angular-app")
        console.log("************** Test Case Started ****************")
    });

    afterEach(function(){
        console.log("*****************Test Case Ended ***************")
    })

    it("Login Data", function(){


        browser.driver.manage().window().maximize()
        browser.findElement(by.model('login.email')).clear()
        browser.findElement(by.model('login.email')).sendKeys("hello")
        browser.findElement(by.model('login.password')).sendKeys("hello")


    });

    it("Register User", function(){

        browser.findElement(by.partialLinkText('have an account?')).click()
        browser.driver.sleep(4000)
        browser.findElement(by.name('firstname')).sendKeys('Hello')
        browser.findElement(by.name('lastname')).sendKeys('Testing')
        browser.findElement(by.name('email')).sendKeys('HelloTesting1@test.com')
        browser.findElement(by.name('password')).sendKeys('123456')
        browser.findElement(by.id('confirm_password')).sendKeys('123456')
        browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
        browser.findElement(by.buttonText('Register')).click()
        browser.driver.sleep(4000)

    });

    })