import {homePageElements} from "../POM/homePage"
import {yourCartElements} from "../POM/yourCart"
import {ProductPageMethod} from "../methods/specificMethods/productPageMethod"

describe('Verify Home page funcionalities', () => {

    beforeEach (() => {
        cy.visit("/inventory.html")
      })

it('Cart icon gets user to Your Cart page (no product added)', () => {
    homePageElements.shoppingCart().click()
    yourCartElements.cartContent().should('not.contain', 'REMOVE')
    cy.url().should('include', '/cart.html')
    })

it('Cart icon gets user to Your Cart page (no product added)', () => {
    homePageElements.productAddBtn(3).click()
    homePageElements.shoppingCart().click()
    yourCartElements.cartContent().should('contain', 'REMOVE')
    cy.url().should('include', '/cart.html')
    })

it('Cart icon has no red circle next to it, when there is no product in cart', () => {
    homePageElements.inventoryList().should('not.contain', 'REMOVE')
    homePageElements.cartItemsCount().should('not.exist')
    })

it('After adding product to cart, cart icon has red circle with number of added products', () => {
    homePageElements.productAddBtn(2).click()
    homePageElements.productAddBtn(4).click()
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

it('Menu – clicking on About', () => {
    cy.visit('/cart.html')
    homePageElements.menuBtn().click()
    homePageElements.menuAbout().click()
    cy.request('GET', 'https://saucelabs.com/').then((response) =>{
        expect(response.status).to.eq(200)
        })
})

it('Menu – clicking on Logout', () => {
    homePageElements.menuBtn().click()
    homePageElements.menuLogout().click()
    cy.url().should('include', '/index.html')
})

it('Menu – clicking on Reset App state', () => {
    homePageElements.productAddBtn(4).click()
    homePageElements.cartItemsCount().should('exist').and('be.visible')
    homePageElements.menuBtn().click()
    homePageElements.menuReset().click()
    homePageElements.cartItemsCount().should('not.exist')
})

it('Sorting – A-Z', () => {
    homePageElements.sortContainer().select('az')
    homePageElements.inventoryList()
        .children()
        .eq(0).should('contain.text', 'Sauce Labs Backpack')
})

it('Sorting – Z-A', () => {
    homePageElements.sortContainer().select('za')
    homePageElements.inventoryList()
        .children()
        .eq(0).should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
})

it('Sorting – Price (low to high)', () => {
    homePageElements.sortContainer().select('lohi')
    homePageElements.inventoryList()
        .children()
        .eq(0).should('contain.text', 'Sauce Labs Onesie')
})

it('Sorting – Price (high to low)', () => {
    homePageElements.sortContainer().select('hilo')
    homePageElements.inventoryList()
        .children()
        .eq(0).should('contain.text', 'Sauce Labs Fleece Jacket')
})

it('Adding product to cart', () => {
    homePageElements.productAddBtn(3).click()
    homePageElements.productAddBtn(2).click()
    homePageElements.productRemoveBtn(3).should('contain.text', 'REMOVE').and('is.visible')
    homePageElements.productRemoveBtn(2).should('contain.text', 'REMOVE').and('is.visible')
    homePageElements.cartItemsCount().should('have.text', '2')
    homePageElements.shoppingCart().click()
    yourCartElements.itemName(1).should('have.text', 'Sauce Labs Bolt T-Shirt')
    yourCartElements.itemName(0).should('have.text', 'Sauce Labs Bike Light')
})

it('Removing product from cart using “REMOVE” button', () => {
    homePageElements.productAddBtn(3).click()
    homePageElements.productRemoveBtn(3).should('contain.text', 'REMOVE').and('is.visible')
    homePageElements.cartItemsCount().should('have.text', '1')
    homePageElements.productRemoveBtn(3).click()
    homePageElements.cartItemsCount().should('not.exist')
    homePageElements.productRemoveBtn(3).should('not.exist')
})

it('Having more than one product in cart and removing one of them using “REMOVE” button', () => {
    homePageElements.productAddBtn(3).click()
    homePageElements.productAddBtn(4).click()
    homePageElements.productRemoveBtn(3).should('contain.text', 'REMOVE').and('is.visible')
    homePageElements.productRemoveBtn(4).should('contain.text', 'REMOVE').and('is.visible')
    homePageElements.cartItemsCount().should('have.text', '2')
    homePageElements.productRemoveBtn(3).click()
    homePageElements.cartItemsCount().should('have.text', '1')
    homePageElements.productRemoveBtn(3).should('not.exist')
    homePageElements.shoppingCart().click()
    yourCartElements.cartContent().should('contain', 'Sauce Labs Fleece Jacket')
    yourCartElements.cartContent().should('not.contain', 'Sauce Labs Bolt T-Shirt')
})

const nameID = [4, 0, 1, 5, 2, 3]

nameID.forEach(nameID => {
it(`Going to product page (name id = ${nameID}) - clicking on product name`, () => {
    new ProductPageMethod(nameID).productPageCheck(homePageElements.productName(nameID))
    })
})

const imageID = [4, 0, 1, 5, 2, 3]

imageID.forEach(imageID => {
it(`Going to product (image id = ${imageID}) - clicking on product image`, () => {
    new ProductPageMethod(imageID).productPageCheck(homePageElements.productImg(imageID))
    })
})

})