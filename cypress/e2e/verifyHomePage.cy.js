import {homePageElements} from "../POM/homePage"
import {yourCartElements} from "../POM/yourCart"
import { homePageMethods } from "../methods/homePageMethods"
import { productPageElements } from "../POM/productPage"

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
    homePageElements.menuResret().click()
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

it("Going to product 1 page - clicking on product name", () => {
    homePageMethods.productPageCheck(
        homePageElements.productName(4),
        productPageElements.itemName, 
        'Sauce Labs Backpack', 
        'id=4')
})

it("Going to product 1 page - clicking on product image", () => {
    homePageMethods.productPageCheck(
        homePageElements.productImg(4), 
        productPageElements.itemName, 
        'Sauce Labs Backpack',
        'id=4')
})

it("Going to product 2 page - clicking on product name", () => {
    homePageMethods.productPageCheck(
        homePageElements.productName(0),
        productPageElements.itemName,
        'Sauce Labs Bike Light',
         'id=0')
})

it("Going to product 2 page - clicking on product image", () => {
    homePageMethods.productPageCheck(
        homePageElements.productImg(0),
        productPageElements.itemName,
        'Sauce Labs Bike Light',
        'id=0')
})

it("Going to product 3 page - clicking on product name", () => {
    homePageMethods.productPageCheck(
        homePageElements.productName(1),
        productPageElements.itemName,
        'Sauce Labs Bolt T-Shirt',
        'id=1')
})

it("Going to product 3 page - clicking on product image", () => {
    homePageMethods.productPageCheck(
        homePageElements.productImg(1), 
        productPageElements.itemName,
        'Sauce Labs Bolt T-Shirt',
        'id=1')
})

it("Going to product 4 page - clicking on product name", () => {
    homePageMethods.productPageCheck(
        homePageElements.productName(5),
        productPageElements.itemName,
        'Sauce Labs Fleece Jacket',
        'id=5')
})

it("Going to product 4 page - clicking on product image", () => {
    homePageMethods.productPageCheck(
        homePageElements.productImg(5), 
        productPageElements.itemName,
        'Sauce Labs Fleece Jacket',
        'id=5')
})

it("Going to product 5 page - clicking on product name", () => {
    homePageMethods.productPageCheck(
        homePageElements.productName(2),
        productPageElements.itemName,
        'Sauce Labs Onesie',
        'id=2')
})

it("Going to product 5 page - clicking on product image", () => {
    homePageMethods.productPageCheck(
        homePageElements.productImg(2),
        productPageElements.itemName,
        'Sauce Labs Onesie', 
        'id=2')
})

it("Going to product 6 page - clicking on product name", () => {
    homePageMethods.productPageCheck(
        homePageElements.productName(3), 
        productPageElements.itemName,
        'Test.allTheThings() T-Shirt (Red)',
        'id=3')
})

it("Going to product 6 page - clicking on product image", () => {
    homePageMethods.productPageCheck(
        homePageElements.productImg(3), 
        productPageElements.itemName,
        'Test.allTheThings() T-Shirt (Red)',
        'id=3')
})
})