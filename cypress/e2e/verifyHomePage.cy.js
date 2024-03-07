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

it('Clicking on cross button to close menu', () => {
    homePageElements.menuBtn().click()
    homePageElements.menuBar().should('be.visible')
    homePageElements.crossBtn().click()
    homePageElements.menuBar().should('not.be.visible')
})

it('Closing menu by clicking on area outside the menu', () => {
    homePageElements.menuBtn().click()
    homePageElements.outsideMenu().click()
    homePageElements.menuBar().should('not.be.visible')
})

it('Menu – clicking on All Items', () => {
    cy.visit('/cart.html')
    homePageElements.menuBtn().click()
    homePageElements.menuAllItems().click()
    cy.url().should('include', '/inventory.html')
})

// miejsce na scenariusz do About - do zrobienia

it('Menu – clicking on Logout', () => {
    homePageElements.menuBtn().click()
    homePageElements.menuLogout().click()
    cy.url().should('include', '/index.html')
})

it.only('Menu – clicking on Reset App state', () => {
    homePageElements.ProductAddBtn(4).click()
    homePageElements.cartItemsCount().should('exist').and('be.visible')
    homePageElements.menuBtn().click()
    homePageElements.menuResret().click()
    homePageElements.cartItemsCount().should('not.exist')
})


})