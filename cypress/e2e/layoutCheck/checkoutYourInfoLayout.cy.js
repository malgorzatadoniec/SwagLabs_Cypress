import {checkYourInfoElements} from "../../POM/chcecoutYourInformation"
import { methods } from "../../methods/methods"

describe('Verify Checkout: Your Information page layout', () => {

    beforeEach (() => {
        cy.visit('/checkout-step-one.html')
      })

    it('Navigation bar content', () => {
        checkYourInfoElements.subHeader().should('have.text', 'Checkout: Your Information')
    })

    it('Form', () => {
        checkYourInfoElements.checkoutInfo().should('not.be.empty')
        methods.placeholderValue(checkYourInfoElements.firstName, 'First Name')
        methods.placeholderValue(checkYourInfoElements.lastName, 'Last Name')
        methods.placeholderValue(checkYourInfoElements.postalCode, 'Zip/Postal Code')
    })

    it('Buttons', () => {
        checkYourInfoElements.buttonsContainer().should('not.be.empty').and('contain', 'CANCEL').and('contain', 'CONTINUE')
        checkYourInfoElements.cancelBtn().should('be.visible').and('have.text', 'CANCEL')
        checkYourInfoElements.continueBtn().should('be.visible').and('have.value', 'CONTINUE')
    })
})