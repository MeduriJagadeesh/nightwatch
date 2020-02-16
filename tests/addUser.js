module.exports = {
    'Login HomePage' : function login(browser) {
      browser
        .url("http://ec2-35-166-133-120.us-west-2.compute.amazonaws.com/admin/login")
        .waitForElementVisible('.header')
        .assert.titleContains('Juliette - Login')
        .setValue('#email', 'admin@juliettelaundry.com')
        .setValue('input[id="pwd"]','juliette')
        .click('input[type="button"]')
        .assert.titleContains('Juliette - App Users')
        .waitForElementPresent('.rmm-toggled-title')
    },

    'Add User' : function addUser(browser) {
        browser
        .useXpath()
        .click('//a[contains(text(),"Add New")]')
        .useCss()
        .setValue('#invite_id','TYU')
        .setValue('#apartment','104')
        .setValue('#acode','123')
        .setValue('#fname','scott')
        .setValue('#lname','William')
        .setValue('#email','mail1@mailinator.com')
        .setValue('#phone1','123')
        .setValue('#phone2','423')
        .setValue('#phone1','1232')
        .setValue('#zip','107325')
        .setValue('#password','cool@123')
        .setValue('#cpwd','cool@123')
        .setValue('#notes','Testing')
        //to do verify user is created
        .click('input[type="submit"]')

    },

    'Logout' : function logout(browser) {
        browser
        .useXpath()
        .click('//a[contains(text(),"logout")]')
        .useCss()
        .end()
      },
  };