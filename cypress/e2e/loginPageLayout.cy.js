import {loginPageElements} from "../POM/loginPage"
import {methods} from "../methods/methods"

describe('Verify login page layout', () => {

  beforeEach (() => {
    cy.visit("/index.html")
  })
  
  it('Main elements are not empty', () => {
    loginPageElements.loginLogo().should('be.visible')
    loginPageElements.loginWrapper().should('not.be.empty').and('be.visible')
    loginPageElements.loginInnerWrapper().should('not.be.empty').and('be.visible')
    loginPageElements.credInnerWrapper().should('not.be.empty').and('be.visible')
  })

  it('Login form is visible and have all elements', () => {
    loginPageElements.loginForm().should('be.visible').and('not.be.empty')
    methods.loginCred(loginPageElements.usernameInput, 'Username')
    methods.loginCred(loginPageElements.passwordInput, 'Password')
    loginPageElements.loginBtn().should('be.visible').and('have.value', 'LOGIN')
    loginPageElements.loginImage()
      .should('be.visible')
      .and('have.attr', 'src', 'img/Login_Bot_graphic.png')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)

  })

  it('Credential data are visible and correct', () => {
    loginPageElements.usernameCredTitle().should('be.visible').and('have.text', 'Accepted usernames are:')
    loginPageElements.passwordCredTitle().should('be.visible').and('have.text', 'Password for all users:')
    loginPageElements.usernameCred().should('not.be.empty').and('be.visible')
    loginPageElements.passwordCred().should('not.be.empty').and('be.visible')
  })
})
