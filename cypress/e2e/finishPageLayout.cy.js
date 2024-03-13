import {finishElements} from "../POM/finish"

import {methods} from "../methods/methods"

describe('Verify Finish page layout', () => {

    beforeEach (() => {
        cy.visit('/checkout-complete.html')
      })

it('Page title is visible on navigation bar', () => {
    finishElements.subHeader().should('have.text', 'Finish')
})

it('Text is visible and has correct content', () => {
    finishElements.checkoutContainer().should('not.be.empty')
    finishElements.compliteTitle().should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER')
    cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
    })

it('Finish picture is visible', () => {
    methods.image(
        finishElements.compliteImage(),
        'img/pony-express.png')
    })
})