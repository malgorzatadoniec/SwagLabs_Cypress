import { describe } from "mocha"
import {productPageElements} from "../POM/productPage"

describe('Verify product page layout - by example of Sauce Labs Backpack product', () => {

    beforeEach(() => {
        cy.visit('/inventory-item.html?id=4')
    })

it('Item image is visible', () => {
    productPageElements.productImage('is.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
})

it('Item name is visible', () => {
    productPageElements.itemName('is.visible').and('have.text', 'Sauce Labs Backpack')
})

it('Item description is visible', () => {
    productPageElements.itemDesc('is.visible').and('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
})

it('Item price is visible', () => {
    productPageElements.itemPrice('is.visible').and('have.text', '$29.99')
})

it('“ADD TO CART” button is visible', () => {
    productPageElements.addToCartBtn('is.visible').and('have.text', 'ADD TO CART')
})

it('“<- Back” button is visible', () => {
    productPageElements.backBtn('is.visible').and('have.text', '<- Back')
})

})