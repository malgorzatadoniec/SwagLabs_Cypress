import {loginPageElements} from "../../POM/loginPage"
import {methods} from "../../methods/methods"

describe(' Verify Login', () => {
  
  beforeEach (() => {
    cy.visit("/index.html")
  })

  it('Succesful login', () => {
    methods.succesfulLogin(
      loginPageElements.usernameInput, 
      'standard_user',  
      loginPageElements.passwordInput,
      'secret_sauce',
      loginPageElements.loginBtn)
  })

  it('Unsuccesful login - wrong password', () => {
    methods.unsuccesfulLogin(
      loginPageElements.usernameInput,
      'standard_user', 
      loginPageElements.passwordInput,
      'secret_secret', 
      loginPageElements.loginBtn,
      loginPageElements.errorTex,
      'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - wrong username', () => {
    methods.unsuccesfulLogin(
      loginPageElements.usernameInput,
      'user123', 
      loginPageElements.passwordInput,
      'secret_sauce', 
      loginPageElements.loginBtn,
      loginPageElements.errorTex,
      'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - wrong username and wrong password', () => {
    methods.unsuccesfulLogin(
      loginPageElements.usernameInput,
      'user123', 
      loginPageElements.passwordInput,
      'secret_secret', 
      loginPageElements.loginBtn,
      loginPageElements.errorTex,
      'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - locked out user', () => {
    methods.unsuccesfulLogin(
      loginPageElements.usernameInput,
      'locked_out_user', 
      loginPageElements.passwordInput,
      'secret_sauce', 
      loginPageElements.loginBtn,
      loginPageElements.errorTex,
      'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Succesful login - problem user', () => {
    methods.succesfulLogin(
      loginPageElements.usernameInput, 
      'problem_user',  
      loginPageElements.passwordInput,
      'secret_sauce',
      loginPageElements.loginBtn)
    })

  it('Succesful login - performance glitch user', () => {
    methods.succesfulLogin(
      loginPageElements.usernameInput, 
      'performance_glitch_user',  
      loginPageElements.passwordInput,
      'secret_sauce',
      loginPageElements.loginBtn)
  })
})