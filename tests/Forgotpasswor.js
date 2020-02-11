module.exports = {
    'verify forgot password' : function (browser) {
      browser
        .url("http://www.juliettelaundry.com/admin/forgotpassword")
        .waitForElementVisible('.header')
        .assert.titleContains('Juliette - Forgot Password')
        .useXpath()
        .waitForElementVisible('//span[contains(text(),"Forgot Password")]')
        .useCss()
    }
}