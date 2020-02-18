module.exports={
    url:'http://www.juliettelaundry.com/admin/login',
    elements:{
        logInPageHeader:'.header',
        userNameField:'#email',
        passwordField:'input[id="pwd"]',
        submitButton:'input[type="button"]'
    },
    commands:[{
        verifyLoginPageLoaded(){
            return this
                .waitForElementVisible('@logInPageHeader')
                .assert.titleContains('Juliette - Login')
        }, 
        performLogin(username,password){
            return this
                .setValue('@userNameField',username)
                .setValue('@passwordField',password)
                .click('@submitButton')
        }
    }]
};