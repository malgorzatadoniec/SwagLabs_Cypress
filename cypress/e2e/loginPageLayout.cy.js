import {elements} from "../POM/loginPage"
import {methods} from "../methods/loginPageLayoutMethods"

describe('Verify login page layout', () => {

  beforeEach (() => {
    cy.visit("/index.html")
  })
  
  it('Main elements are not empty', () => {
    elements.loginLogo().should('be.visible')
    elements.loginWrapper().should('not.be.empty').and('be.visible')
    elements.loginInnerWrapper().should('not.be.empty').and('be.visible')
    elements.credInnerWrapper().should('not.be.empty').and('be.visible')
  })

  it('Login form is visible and have all elements', () => {
    elements.loginForm().should('be.visible').and('not.be.empty')
    elements.usernameInput
    methods.loginCred(elements.usernameInput(), 'Username')
    methods.loginCred(elements.passwordInput(), 'Password')
    elements.loginBtn().should('be.visible').and('have.value', 'LOGIN')
    elements.loginImage()
      .should('be.visible')
      .and('have.attr', 'src', 'img/Login_Bot_graphic.png')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)

  })

  it('Credential data are visible and correct', () => {
    elements.usernameCredTitle().should('be.visible').and('have.text', 'Accepted usernames are:')
    elements.passwordCredTitle().should('be.visible').and('have.text', 'Password for all users:')
    elements.usernameCred().should('not.be.empty').and('be.visible')
    elements.passwordCred().should('not.be.empty').and('be.visible')
  })
})
