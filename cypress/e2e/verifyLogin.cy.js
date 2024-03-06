import {loginPageElements} from "../POM/loginPage"
import {methods} from "../methods/verifyLoginMethods"

describe(' Verify Login', () => {
  
  beforeEach (() => {
    cy.visit("/index.html")
  })

  it('Succesful login', () => {
    methods.succesfulLogin('standard_user', 'secret_sauce')
  })

  it('Unsuccesful login - wrong password', () => {
    methods.unsuccesfulLogin('standard_user', 'secret_secret', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - wrong username', () => {
    methods.unsuccesfulLogin('user123', 'secret_sauce', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - wrong username and wrong password', () => {
    methods.unsuccesfulLogin('user123', 'secret_secret', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Unsuccesful login - locked out user', () => {
    methods.unsuccesfulLogin('locked_out_user', 'secret_sauce', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Succesful login - problem user', () => {
    methods.succesfulLogin('problem_user', 'secret_sauce')
  })

  it('Succesful login - performance glitch user', () => {
    methods.succesfulLogin('problem_user', 'secret_sauce')
  })
})