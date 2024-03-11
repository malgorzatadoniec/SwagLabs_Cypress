import {productPageElements} from "../POM/productPage"
import {homePageElements} from "../POM/homePage"

describe('Verify product page funcionalities - on example of product with id = 1', () => {

    beforeEach(() => {
        cy.visit('/inventory-item.html?id=1')
    })

    it('Clicking on “ADD TO CART” button', () =>{
        productPageElements.addToCartBtn().should('be.visible').and('have.text', 'ADD TO CART').click()
        productPageElements.addToCartBtn().should('not.exist')
        productPageElements.removeBtn().should('be.visible').and('have.text', 'REMOVE')
        productPageElements.cartItemsCount().should('be.visible').and('have.text', '1')
    })

    it('Clicking on “REMOVE” button', () =>{
        productPageElements.addToCartBtn().click()
        productPageElements.cartItemsCount().should('be.visible').and('have.text', '1')
        productPageElements.removeBtn().click()
        productPageElements.cartItemsCount().should('not.exist')
    })

    // it('Clicking on “BACK” button', () =>{
    //     productPageElements.backBtn().click()
    //     cy.url().should('include', '/inventory.html')
    // })

    // it.only('Adding product from product page and going back to home page with “BACK” button', () =>{
    //     productPageElements.addToCartBtn().click()
    //     productPageElements.backBtn().click()
    //     cy.url().should('include', '/inventory.html')
    //     homePageElements.cartItemsCount().should('be.visible').and('have.text', '1')
    //     homePageElements.productRemoveBtn(3).should('be.visible')
    //     homePageElements.productAddBtn(3).should('not.exist')

    // })

    it('Adding product from product page and going back to home page with “All Items” button in menu', () =>{
        productPageElements.addToCartBtn().click()
        productPageElements.menuBtn().click()
        productPageElements.menuAllItems().click()
        cy.url().should('include', '/inventory.html')
        homePageElements.cartItemsCount().should('be.visible').and('have.text', '1')
        homePageElements.productRemoveBtn(3).should('be.visible')
        homePageElements.productAddBtn(3).should('not.exist')
    })

    // it.only('Removing product from cart from product page and going back to home page with “BACK” button', () =>{
    //     productPageElements.addToCartBtn().click()
    //     productPageElements.cartItemsCount().should('be.visible').and('have.text', '1')
    //     productPageElements.removeBtn().click()
    //     productPageElements.backBtn().click()
    //     cy.url().should('include', '/inventory.html')
    //     homePageElements.cartItemsCount().should('not.exist')
    //     homePageElements.productAddBtn(3).should('be.visible')
    //     homePageElements.productRemoveBtn(3).should('not.exist')
    // })

    it('Removing product from cart from product page and going back to home page with “All Items” button in menu', () =>{
        productPageElements.addToCartBtn().click()
        productPageElements.cartItemsCount().should('be.visible').and('have.text', '1')
        productPageElements.removeBtn().click()
        productPageElements.menuBtn().click()
        productPageElements.menuAllItems().click()
        cy.url().should('include', '/inventory.html')
        homePageElements.cartItemsCount().should('not.exist')
        homePageElements.productAddBtn(3).should('be.visible')
        homePageElements.productRemoveBtn(3).should('not.exist')
    })
})