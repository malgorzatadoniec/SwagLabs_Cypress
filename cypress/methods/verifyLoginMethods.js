import {elements} from "../POM/loginPage"

class Methods{

succesfulLogin(username, password)
{
    elements.usernameInput().type(username)
    elements.passwordInput().type(password)
    elements.loginBtn().click()
    cy.url('include', '/inventory.html')
}

unsuccesfulLogin(username, password, text)
{
    elements.usernameInput().type(username)
    elements.passwordInput().type(password)
    elements.loginBtn().click()
    elements.errorTex().should('have.text', text)
}

}

export const methods = new Methods()