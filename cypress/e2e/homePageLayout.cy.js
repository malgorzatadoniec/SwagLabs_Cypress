
import {homePageElements} from "../POM/homePage"
import {homePageLayoutMethods} from "../methods/homePageLayoutMethods"

 describe('Verify Home page layout', () => {

    beforeEach (() => {
        cy.visit("/inventory.html")
      })

it('Main elements are not empty', () => {
    homePageElements.pageWrapper().should('not.be.empty').and('be.visible')
    homePageElements.headerContainer().should('not.be.empty').and('be.visible')
    homePageElements.inventoryList().should('not.be.empty').and('be.visible')
    homePageElements.footer().should('not.be.empty').and('be.visible')
})

it('Verify top header elements', () => {
    homePageElements.menuBtn().should('exist')
    homePageElements.headerLabel().should('not.be.empty').and('be.visible')
    homePageElements.appLogo().should('be.visible')
    homePageElements.shoppingCart().should('be.visible')
})

it('Menu is visible and has all elements', () => {
    homePageElements.menuBtn().click()
    homePageElements.menuBar().should('be.visible')
    homePageElements.crossBtn().should('be.visible')
    homePageElements.menuAllItems().should('be.visible')
    homePageElements.menuAbout().should('be.visible')
    homePageElements.menuLogout().should('be.visible')
    homePageElements.menuResret().should('be.visible')
    })

it('Verify navigation bar elements', () => {
    homePageElements.scndheaderContainer().should('not.be.empty').and('be.visible')
    homePageElements.productLabel().should('be.visible').and('have.text', 'Products')
    homePageElements.peekIcon().should('be.visible')
    homePageElements.sortContainer().should('be.visible')
})

it('Verify elements of first product container', () => {
    homePageLayoutMethods.productContainer
    (1, 
    4,
    './img/sauce-backpack-1200x1500.jpg',
    'Sauce Labs Backpack',
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    '$29.99')
})

it('Verify elements of second product container', () => {
    homePageLayoutMethods.productContainer
    (2, 
    0,
    './img/bike-light-1200x1500.jpg',
    'Sauce Labs Bike Light',
    "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    '$9.99')
})

it('Verify elements of third product container', () => {
    homePageLayoutMethods.productContainer
    (3, 
    1,
    './img/bolt-shirt-1200x1500.jpg',
    'Sauce Labs Bolt T-Shirt',
    "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
    '$15.99')
})

it('Verify elements of fourth product container', () => {
    homePageLayoutMethods.productContainer
    (4, 
    5,
    './img/sauce-pullover-1200x1500.jpg',
    'Sauce Labs Fleece Jacket',
    "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    '$49.99')
})

it('Verify elements of fifth product container', () => {
    homePageLayoutMethods.productContainer
    (5, 
    2,
    './img/red-onesie-1200x1500.jpg',
    'Sauce Labs Onesie',
    "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    '$7.99')
})

it('Verify elements of sixth product container', () => {
    homePageLayoutMethods.productContainer
    (6, 
    3,
    './img/red-tatt-1200x1500.jpg',
    'Test.allTheThings() T-Shirt (Red)',
    "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
    '$15.99')
})

it('Verify elements of footer', () => {
    homePageElements.footerImage()
        .should('be.visible')
        .and('have.attr', 'src', 'img/SwagBot_Footer_graphic.png')
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
        homePageElements.footerCopyRights().should('be.visible').and('have.text', '© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        homePageElements.smIconsTwitter().should('be.visible')
        homePageElements.smIconsFacebook().should('be.visible')
        homePageElements.smIconsLinkedin().should('be.visible')
})
})
