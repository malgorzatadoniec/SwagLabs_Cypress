import {yourCartElements} from "../../POM/yourCart"
import {homePageElements} from "../../POM/homePage"

describe('Verify Your Cart page layout', () => {

    beforeEach (() => {
        cy.visit('/inventory.html')
        homePageElements.productAddBtn(4).click()
        homePageElements.productAddBtn(2).click()
        cy.visit('/cart.html')
      })

    it('Page title is visible on navigation bar', () => {
        yourCartElements.subHeader().should('be.visible').and('have.text', 'Your Cart')
    })

    it('Titles of chosen products are visible', () => {
        yourCartElements.quantityLabel().should('be.visible').and('have.text', 'QTY')
        yourCartElements.descLabel().should('be.visible').and('have.text', 'DESCRIPTION')
    })

    it('Added products are visible in the cart', () => {
        yourCartElements.cartContent().should('contain.text', 'Sauce Labs Fleece Jacket')
    })

    it('Quantity number is visible', () => {
        yourCartElements.itemQuantity(3).should('be.visible').and('have.text', '1')
    })

    it('“REMOVE” button is visible', () => {
        yourCartElements.removeBtn(3).should('be.visible').and('have.text', 'REMOVE')
    })

    it('“CONTINUE SHOPPING” button is visible', () => {
        yourCartElements.continueBtn().should('be.visible').and('have.text', 'Continue Shopping')
    })

    it('“CHECKOUT” button is visible', () => {
        yourCartElements.checkoutBtn().should('be.visible').and('have.text', 'CHECKOUT')
    })
})