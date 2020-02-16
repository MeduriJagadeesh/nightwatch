module.exports = {
    'verify Title' : function (browser) {
      browser
        .url("http://www.juliettelaundry.com/admin/login")
        .waitForElementVisible('.header')
        .assert.titleContains('Juliette - Login')
    },

    'verify login' : function (browser) {
        browser
        .setValue('#email', 'ravi@thapovan-inc.com')
        .setValue('input[id="pwd"]','KHS}k/b|7Wfh2Bp')
        .click('input[type="button"]')
        .assert.titleContains('Juliette - App Users')
        .waitForElementPresent('.rmm-toggled-title')
        .end();
        
    },
  };