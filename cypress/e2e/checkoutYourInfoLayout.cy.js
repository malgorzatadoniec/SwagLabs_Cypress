import {checkYourInfoElements} from "../POM/chcecoutYourInformation"

describe('Verify Checkout: Your Information page layout', () => {

    beforeEach (() => {
        cy.visit('/checkout-step-one.html')
      })

it('Navigation bar content', () => {
    checkYourInfoElements.subHeader().should('have.text', 'Checkout: Your Information')
})

it('Form', () => {
    checkYourInfoElements.checkoutInfo().should('not.be.empty')
    checkYourInfoElements.firstName().should('have.value', '').and('have.attr', 'placeholder', 'First Name')
    checkYourInfoElements.lastName().should('have.value', '').and('have.attr', 'placeholder', 'Last Name')
    checkYourInfoElements.postalCode().should('have.value', '').and('have.attr', 'placeholder', 'Zip/Postal Code')
})

it('Buttons', () => {
    checkYourInfoElements.buttonsContainer().should('not.be.empty').and('contain', 'CANCEL').and('contain', 'CONTINUE')
    checkYourInfoElements.cancelBtn().should('be.visible').and('have.text', 'CANCEL')
    checkYourInfoElements.continueBtn().should('be.visible').and('have.value', 'CONTINUE')
})
})