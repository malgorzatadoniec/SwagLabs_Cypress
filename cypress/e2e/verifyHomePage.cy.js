import {homePageElements} from "../POM/homePage"

describe('Verify Home page funcionalities', () => {

    beforeEach (() => {
        cy.visit("/inventory.html")
      })

it('Cart icon gets user to Your Cart page', () => {
    homePageElements.shoppingCart().click()
    cy.url().should('include', '/cart.html')
    })

it('Cart icon has no red circle next to it, when there is no product in cart', () => {
    homePageElements.inventoryList().should('not.contain', 'REMOVE')
    homePageElements.cartItemsCount().should('not.exist')
    })

it('After adding product to cart, cart icon has red circle with number of added products', () => {
    homePageElements.ProductAddBtn(2).click()
    homePageElements.ProductAddBtn(4).click()
    homePageElements.inventoryList().should('contain', 'REMOVE')
    homePageElements.cartItemsCount().should('exist').and('have.text', '2')
    })


})