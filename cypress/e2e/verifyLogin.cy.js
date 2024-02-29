
import loginPage from "../pageobjects/loginPage"

describe(' Verify Login', () => {
  
  beforeEach (() => {
    cy.visit("/index.html")
  })
  
  it('Succesful login', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('standard_user')
    loginObj.enterPassword('secret_sauce')
    loginObj.clickSubmit()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })

  it('Wrong password', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('standard_user')
    loginObj.enterPassword('password123')
    loginObj.clickSubmit()
    loginObj.elements.errorTex().should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Wrong username', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('standard_user123')
    loginObj.enterPassword('secret_sauce')
    loginObj.clickSubmit()
    loginObj.elements.errorTex().should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Wrong username and wrong password', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('user_user123')
    loginObj.enterPassword('hkoiuysd')
    loginObj.clickSubmit()
    loginObj.elements.errorTex().should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Locked out user', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('locked_out_user')
    loginObj.enterPassword('secret_sauce')
    loginObj.clickSubmit()
    loginObj.elements.errorTex().should('be.visible')
    .and('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Problem user', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('problem_user')
    loginObj.enterPassword('secret_sauce')
    loginObj.clickSubmit()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })

  it('Performance glitch user', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('performance_glitch_user')
    loginObj.enterPassword('secret_sauce')
    loginObj.clickSubmit()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })
})