const elements = {

        loginLogo : () => cy.get('.login_logo'),
        loginWrapper : () => cy.get('.login_wrapper'),
        loginInnerWrapper : () => cy.get('.login_wrapper-inner'),
        loginForm : () => cy.get('form'),
        usernameInput : () => cy.get('[data-test="username"]'),
        passwordInput : () => cy.get('[data-test="password"]'),
        loginBtn : () => cy.get('#login-button'),
        loginImage : () => cy.get('.bot_column'),
        credInnerWrapper : () => cy.get('.login_credentials_wrap-inner'),
        usernameCredTitle : () => cy.get('#login_credentials > h4'),
        passwordCredTitle : () => cy.get('.login_password > h4'),
        usernameCred : () => cy.get('#login_credentials'),
        passwordCred : () => cy.get('.login_password'),
        errorTex : () => cy.get('[data-test="error"]')

}
export {elements};