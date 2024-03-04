import {elements} from "../POM/loginPage"
import {methods} from "../methods/methods"

describe(' Verify Login', () => {
  
  beforeEach (() => {
    cy.visit("/index.html")
  })


  it('Succesful login', () => {
    methods.typeIn(elements.usernameInput(), 'standard_user')
    methods.typeIn(elements.passwordInput(), 'secret_sauce')
    methods.clickIn(elements.loginBtn())
    methods.urlEq('https://www.saucedemo.com/v1/inventory.html')
  })

  it('Wrong password', () => {
    methods.typeIn(elements.usernameInput(), 'standard_user')
    methods.typeIn(elements.passwordInput(), 'secret_secret')
    methods.clickIn(elements.loginBtn())
    methods.haveText(elements.errorTex(), 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Wrong username', () => {
    methods.typeIn(elements.usernameInput(), 'user123')
    methods.typeIn(elements.passwordInput(), 'secret_sauce')
    methods.clickIn(elements.loginBtn())
    methods.haveText(elements.errorTex(), 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Wrong username and wrong password', () => {
    methods.typeIn(elements.usernameInput(), 'user123')
    methods.typeIn(elements.passwordInput(), 'secret_secret')
    methods.clickIn(elements.loginBtn())
    methods.haveText(elements.errorTex(), 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Locked out user', () => {
    methods.typeIn(elements.usernameInput(), 'locked_out_user')
    methods.typeIn(elements.passwordInput(), 'secret_sauce')
    methods.clickIn(elements.loginBtn())
    methods.haveText(elements.errorTex(), 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Problem user', () => {
    methods.typeIn(elements.usernameInput(), 'problem_user')
    methods.typeIn(elements.passwordInput(), 'secret_sauce')
    methods.clickIn(elements.loginBtn())
    methods.urlEq('https://www.saucedemo.com/v1/inventory.html')
  })

  it('Performance glitch user', () => {
    methods.typeIn(elements.usernameInput(), 'performance_glitch_user')
    methods.typeIn(elements.passwordInput(), 'secret_sauce')
    methods.clickIn(elements.loginBtn())
    methods.urlEq('https://www.saucedemo.com/v1/inventory.html')
  })
})