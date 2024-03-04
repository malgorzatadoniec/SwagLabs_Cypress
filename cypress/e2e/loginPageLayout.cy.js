
import {elements} from "../POM/loginPage"
import {methods} from "../methods/methods"

describe('Verify login page layout', () => {

  beforeEach (() => {
    cy.visit("/index.html")
  })
  
  it('Main elements are not empty', () => {
    methods.isVisible(elements.loginLogo())
    methods.isNotEmpty(elements.loginWrapper())
    methods.isNotEmpty(elements.loginInnerWrapper())
    methods.isNotEmpty(elements.credInnerWrapper())
  })

  it('Login form is visible and have all elements', () => {
    methods.isVisible(elements.loginForm())
    methods.isVisible(elements.usernameInput())
    methods.haveValue(elements.usernameInput(), "")
    methods.haveAttr(elements.usernameInput(), 'placeholder', 'Username')
    methods.isVisible(elements.passwordInput())
    methods.haveValue(elements.passwordInput(), "")
    methods.haveAttr(elements.passwordInput(), 'placeholder', 'Password')
    methods.isVisible(elements.loginBtn())
    methods.haveClass(elements.loginBtn(), 'btn_action')
    methods.haveValue(elements.loginBtn(), 'LOGIN')
    methods.isVisible(elements.loginImage())
    methods.haveAttr(elements.loginImage(), 'src', 'img/Login_Bot_graphic.png')
  })

  it('Credential data are visible and correct', () => {
    methods.haveText(elements.usernameCredTitle(), 'Accepted usernames are:')
    methods.haveText(elements.passwordCredTitle(), 'Password for all users:')
    methods.isNotEmpty(elements.usernameCred())
    methods.isNotEmpty(elements.passwordCred())
  })
})
