import {yourCartElements} from "../POM/yourCart"
import {homePageElements} from "../POM/homePage"
import {checkYourInfoElements} from "../POM/chcecoutYourInformation"

describe('Verify Your Cart page functionalities', () => {

    beforeEach (() => {
        cy.visit('/inventory.html')
        homePageElements.productAddBtn(4).click()
        homePageElements.productAddBtn(2).click()
        cy.visit('/cart.html')
      })

it('“CONTINUE SHOPPING” button gets user back to home page', () => {
   yourCartElements.continueBtn().click()
   homePageElements.productLabel().should('have.text', 'Products')
   cy.url().should('include', '/inventory.html')
})

it('“CHECKOUT” button gets user to Checkout: Your Information page', () => {
    yourCartElements.checkoutBtn().click()
    checkYourInfoElements.subHeader().should('contain.text', 'Checkout: Your Information')
    cy.url().should('include', '/checkout-step-one.html')
 })

it('After removing all product from the cart, cart icon has no red circle next to it', () => {
    yourCartElements.cartItemsCount().should('have.text', '2')
    yourCartElements.removeBtn(4).click()
    yourCartElements.oneItemRemoveBtn().click()
    yourCartElements.cartItemsCount().should('not.exist')
 })

 it('After removing some product from the cart, cart icon has no red circle with current number of products added to cart', () => {
    yourCartElements.cartItemsCount().should('have.text', '2')
    yourCartElements.removeBtn(4).click()
    yourCartElements.cartItemsCount().should('have.text', '1')
 })

 it('After removing some product from the cart, cart icon has no red circle with current number of products added to cart', () => {
    yourCartElements.cartItemsCount().should('have.text', '2')
    yourCartElements.removeBtn(4).click()
    yourCartElements.cartItemsCount().should('have.text', '1')
 })
})
