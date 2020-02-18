module.exports = {
    '@tags':['sanity'],
    'LogIn Page: verify Title and LogIn' : function (browser) {
      var loginPage =browser.page.LoginPage();  
      loginPage
        .navigate()
        .verifyHeaderLoaded()
        .performLogin('ravi@thapovan-inc.com','KHS}k/b|7Wfh2Bp')
      browser
        .assert.titleContains('Juliette - App Users')
        .waitForElementPresent('.rmm-toggled-title')
        .end()
    }
  };