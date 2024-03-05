import {LoginPageElements} from "../POM/loginPage"
import {methods} from "../methods/loginPageLayoutMethods"

describe('Verify login page layout', () => {

  beforeEach (() => {
    cy.visit("/index.html")
  })
  
  it('Main elements are not empty', () => {
    LoginPageElements.loginLogo().should('be.visible')
    LoginPageElements.loginWrapper().should('not.be.empty').and('be.visible')
    LoginPageElements.loginInnerWrapper().should('not.be.empty').and('be.visible')
    LoginPageElements.credInnerWrapper().should('not.be.empty').and('be.visible')
  })

  it('Login form is visible and have all elements', () => {
    LoginPageElements.loginForm().should('be.visible').and('not.be.empty')
    methods.loginCred(LoginPageElements.usernameInput(), 'Username')
    methods.loginCred(LoginPageElements.passwordInput(), 'Password')
    LoginPageElements.loginBtn().should('be.visible').and('have.value', 'LOGIN')
    LoginPageElements.loginImage()
      .should('be.visible')
      .and('have.attr', 'src', 'img/Login_Bot_graphic.png')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)

  })

  it('Credential data are visible and correct', () => {
    LoginPageElements.usernameCredTitle().should('be.visible').and('have.text', 'Accepted usernames are:')
    LoginPageElements.passwordCredTitle().should('be.visible').and('have.text', 'Password for all users:')
    LoginPageElements.usernameCred().should('not.be.empty').and('be.visible')
    LoginPageElements.passwordCred().should('not.be.empty').and('be.visible')
  })
})
