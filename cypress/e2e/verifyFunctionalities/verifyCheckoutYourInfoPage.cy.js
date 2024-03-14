import {checkYourInfoElements} from "../../POM/chcecoutYourInformation"
import {yourCartElements} from "../../POM/yourCart"
import {checkoutOverviewElements} from "../../POM/checkoutOverview"
import {methods} from "../../methods/methods"

describe('Verify Checkout: Your Information page layout', () => {

    beforeEach (() => {
        cy.visit('/checkout-step-one.html')
      })

    it('“CANCEL” button gets user back to Your Cart', () => {
        checkYourInfoElements.cancelBtn().click()
        yourCartElements.subHeader().should('have.text', 'Your Cart')
        cy.url().should('include', '/cart.html')
    })

    it('“CONTINUE” button gets user to Checkout: Overview page', () => {
        methods.userInput(
            checkYourInfoElements.firstName, 
            'Jan', 
            checkYourInfoElements.lastName, 
            'Kowal', 
            checkYourInfoElements.postalCode, 
            '00-00',
            checkYourInfoElements.continueBtn)
        checkoutOverviewElements.subHeader().should('have.text', 'Checkout: Overview')
        cy.url().should('include', '/checkout-step-two.html')
    })

    it('User doesn’t provide any personal info', () => {
        checkYourInfoElements.continueBtn().click()
        checkYourInfoElements.errorText().should('have.text', 'Error: First Name is required')
    })

    it('User doesn’t provide First Name', () => {
        methods.wrongUserInput(
            checkYourInfoElements.lastName,
            'Doe',
            checkYourInfoElements.postalCode,
            '11-111',
            checkYourInfoElements.continueBtn,
            checkYourInfoElements.errorText,
            'Error: First Name is required')
    })

    it('User doesn’t provide Last Name', () => {
        methods.wrongUserInput(
            checkYourInfoElements.firstName,
            'Joe',
            checkYourInfoElements.postalCode,
            '11-111',
            checkYourInfoElements.continueBtn,
            checkYourInfoElements.errorText,
            'Error: Last Name is required')
    })

    it('User doesn’t provide Zip/Postal Code', () => {
        methods.wrongUserInput(
            checkYourInfoElements.firstName,
            'Joe',
            checkYourInfoElements.lastName,
            'Doe',
            checkYourInfoElements.continueBtn,
            checkYourInfoElements.errorText,
            'Error: Postal Code is required')
    })
})