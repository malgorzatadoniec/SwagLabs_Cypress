import {loginPageElements} from "../POM/loginPage"
import {verifyLoginMethods} from "../methods/verifyLoginMethods"

describe(' Verify Login', () => {
  
  beforeEach (() => {
    cy.visit("/index.html")
  })

  it('Succesful login', () => {
    verifyLoginMethods.succesfulLogin('standard_user', 'secret_sauce')
  })

  it('Unsuccesful login - wrong password', () => {
    verifyLoginMethods.unsuccesfulLogin('standard_user', 'secret_secret', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - wrong username', () => {
    verifyLoginMethods.unsuccesfulLogin('user123', 'secret_sauce', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - wrong username and wrong password', () => {
    verifyLoginMethods.unsuccesfulLogin('user123', 'secret_secret', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - locked out user', () => {
    verifyLoginMethods.unsuccesfulLogin('locked_out_user', 'secret_sauce', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Succesful login - problem user', () => {
    verifyLoginMethods.succesfulLogin('problem_user', 'secret_sauce')
  })

  it('Succesful login - performance glitch user', () => {
    verifyLoginMethods.succesfulLogin('problem_user', 'secret_sauce')
  })
})