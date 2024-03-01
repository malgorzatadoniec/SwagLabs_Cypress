
import {elements} from "../POM/loginPage"
import Methods from "../methods/methods"

describe('Verify login page layout', () => {

  const loginObj = new Methods();
  
  it('Correct login page layout', () => {
    cy.visit("/index.html")
    loginObj.isVisible(elements.loginLogo())
    loginObj.isNotEmpty(elements.loginWrapper())
    loginObj.isNotEmpty(elements.loginInnerWrapper())
  

    // loginObj.elements.loginWrapper().should('not.be.empty').within(() => {

    //     loginObj.elements.loginInnerWrapper().should('not.be.empty').within(() => {

    //         loginObj.elements.loginForm().should('be.visible').within(() => {
    //                 loginObj.elements.usernameInput().should('be.visible').and('have.value', '')
    //                 .and('have.attr', 'placeholder', 'Username')
    //                 loginObj.elements.passwordInput().should('be.visible').and('have.value', '')
    //                 .and('have.attr', 'placeholder', 'Password')
    //                 loginObj.elements.loginBtn().should('be.visible').and('have.class', 'btn_action').and('have.value', 'LOGIN')
    //         })
    //         loginObj.elements.loginImage().should('be.visible').and('have.attr', 'src', 'img/Login_Bot_graphic.png')
    //     })
    //     loginObj.elements.credInnerWrapper().should('not.be.empty').within(() => {
    //         loginObj.elements.usernameCredTitle().should('be.visible').and('have.text', 'Accepted usernames are:')
    //         loginObj.elements.passwordCredTitle().should('be.visible').and('have.text', 'Password for all users:')
    //         loginObj.elements.usernameCred().should('be.visible').and('not.be.empty')
    //         loginObj.elements.passwordCred().should('be.visible').and('not.be.empty')
    //     })
    // })
  })
})