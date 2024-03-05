import {LoginPageElements} from "../POM/loginPage"

class Methods{

succesfulLogin(username, password)
{
    LoginPageElements.usernameInput().type(username)
    LoginPageElements.passwordInput().type(password)
    LoginPageElements.loginBtn().click()
    cy.url('include', '/inventory.html')
}

unsuccesfulLogin(username, password, text)
{
    LoginPageElements.usernameInput().type(username)
    LoginPageElements.passwordInput().type(password)
    LoginPageElements.loginBtn().click()
    LoginPageElements.errorTex().should('have.text', text)
}

}

export const methods = new Methods()