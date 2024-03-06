import {loginPageElements} from "../POM/loginPage"

class VerifyLoginMethods{

succesfulLogin(username, password)
{
    loginPageElements.usernameInput().type(username)
    loginPageElements.passwordInput().type(password)
    loginPageElements.loginBtn().click()
    cy.url('include', '/inventory.html')
}

unsuccesfulLogin(username, password, text)
{
    loginPageElements.usernameInput().type(username)
    loginPageElements.passwordInput().type(password)
    loginPageElements.loginBtn().click()
    loginPageElements.errorTex().should('have.text', text)
}

}

export const verifyLoginMethods = new VerifyLoginMethods()