import {elements} from "../POM/loginPage"
import Methods from "../methods/methods"

describe(' Verify Login', () => {
  
  beforeEach (() => {
    cy.visit("/index.html")
  })
  
  const loginObj = new Methods();

  it('Succesful login', () => {
    loginObj.typeIn(elements.usernameInput(), 'standard_user')
    loginObj.typeIn(elements.passwordInput(), 'secret_sauce')
    loginObj.clickIn(elements.loginBtn())
    loginObj.urlEq('https://www.saucedemo.com/v1/inventory.html')
  })

  it('Wrong password', () => {
    loginObj.typeIn(elements.usernameInput(), 'standard_user')
    loginObj.typeIn(elements.passwordInput(), 'secret_secret')
    loginObj.clickIn(elements.loginBtn())
    loginObj.errorText(elements.errorTex(), 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Wrong username', () => {
    loginObj.typeIn(elements.usernameInput(), 'user123')
    loginObj.typeIn(elements.passwordInput(), 'secret_sauce')
    loginObj.clickIn(elements.loginBtn())
    loginObj.errorText(elements.errorTex(), 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Wrong username and wrong password', () => {
    loginObj.typeIn(elements.usernameInput(), 'user123')
    loginObj.typeIn(elements.passwordInput(), 'secret_secret')
    loginObj.clickIn(elements.loginBtn())
    loginObj.errorText(elements.errorTex(), 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Locked out user', () => {
    loginObj.typeIn(elements.usernameInput(), 'locked_out_user')
    loginObj.typeIn(elements.passwordInput(), 'secret_sauce')
    loginObj.clickIn(elements.loginBtn())
    loginObj.errorText(elements.errorTex(), 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Problem user', () => {
    loginObj.typeIn(elements.usernameInput(), 'problem_user')
    loginObj.typeIn(elements.passwordInput(), 'secret_sauce')
    loginObj.clickIn(elements.loginBtn())
    loginObj.urlEq('https://www.saucedemo.com/v1/inventory.html')
  })

  it('Performance glitch user', () => {
    loginObj.typeIn(elements.usernameInput(), 'performance_glitch_user')
    loginObj.typeIn(elements.passwordInput(), 'secret_sauce')
    loginObj.clickIn(elements.loginBtn())
    loginObj.urlEq('https://www.saucedemo.com/v1/inventory.html')
  })
})