module.exports = {
    'LogIn Page: verify Title and LogIn' : function (browser) {
      let loginPage =browser.page.LoginPage();  
      loginPage
        .navigate()
        .verifyLoginPageLoaded()
        .performLogin('ravi@thapovan-inc.com','KHS}k/b|7Wfh2Bp')
      browser
        .assert.titleContains('Juliette - App Users')
        .waitForElementPresent('.rmm-toggled-title')
        .end()
    }
  };