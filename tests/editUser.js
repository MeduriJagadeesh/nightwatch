module.exports = {
    'Login HomePage' : function login(browser) {
        browser
          .url("http://www.juliettelaundry.com/admin/login")
          .waitForElementVisible('.header')
          .assert.titleContains('Juliette - Login')
          .setValue('#email', 'ravi@thapovan-inc.com')
          .setValue('input[id="pwd"]','KHS}k/b|7Wfh2Bp')
          .click('input[type="button"]')
          .assert.titleContains('Juliette - App Users')
          .waitForElementPresent('.rmm-toggled-title')
      },
'Edit User' : function editUser(browser) {
    browser
    .useXpath()
    .waitForElementVisible('//ul[@id="user-list"]/li/span[contains(text(),"space@mailinator.com")]/parent::li//a[@title="Edit"]')
    .click('//ul[@id="user-list"]/li/span[contains(text(),"space@mailinator.com")]/parent::li//a[@title="Edit"]')
    .useCss()
    .waitForElementVisible('#lname')
    .clearValue('#lname')
    .setValue('#lname','friend')
    .click('input[value="Submit"]')
    .pause(1000)
    .acceptAlert()
    .assert.titleContains('Juliette - App Users')
  }
}