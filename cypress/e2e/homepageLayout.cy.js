
import {elements} from "../POM/homePage"
import {methods} from "../methods/homepageLayputMethods"

 describe('Verifi Home page layout', () => {

    beforeEach (() => {
        cy.visit("/inventory.html")
      })

it('Main elements are not empty', () => {
    elements.pageWrapper().should('not.be.empty').and('be.visible')
    elements.headerContainer().should('not.be.empty').and('be.visible')
    elements.inventoryList().should('not.be.empty').and('be.visible')
    elements.footer().should('not.be.empty').and('be.visible')
})

it('Verify top header elements', () => {
    elements.menuBtn().should('exist')
    elements.headerLabel().should('not.be.empty').and('be.visible')
    elements.appLogo().should('be.visible')
    elements.shoppingCart().should('be.visible')
})

it('Verify navigation bar elements', () => {
    elements.scndheaderContainer().should('not.be.empty').and('be.visible')
    elements.productLabel().should('be.visible').and('have.text', 'Products')
    elements.peekIcon().should('be.visible')
    elements.sortContainer().should('be.visible')
})

it('Verify elements of first product container', () => {
    methods.productContainer
    (1, 
    4,
    './img/sauce-backpack-1200x1500.jpg',
    'Sauce Labs Backpack',
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    '$29.99',
    'ADD TO CART')
})

it('Verify elements of second product container', () => {
    methods.productContainer
    (2, 
    0,
    './img/bike-light-1200x1500.jpg',
    'Sauce Labs Bike Light',
    "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    '$9.99',
    'ADD TO CART')
})

it('Verify elements of third product container', () => {
    methods.productContainer
    (3, 
    1,
    './img/bolt-shirt-1200x1500.jpg',
    'Sauce Labs Bolt T-Shirt',
    "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
    '$15.99',
    'ADD TO CART')
})

it('Verify elements of fourth product container', () => {
    methods.productContainer
    (4, 
    5,
    './img/sauce-pullover-1200x1500.jpg',
    'Sauce Labs Fleece Jacket',
    "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    '$49.99',
    'ADD TO CART')
})

it('Verify elements of fifth product container', () => {
    methods.productContainer
    (5, 
    2,
    './img/red-onesie-1200x1500.jpg',
    'Sauce Labs Onesie',
    "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    '$7.99',
    'ADD TO CART')
})

it('Verify elements of sixth product container', () => {
    methods.productContainer
    (6, 
    3,
    './img/red-tatt-1200x1500.jpg',
    'Test.allTheThings() T-Shirt (Red)',
    "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
    '$15.99',
    'ADD TO CART')
})

it('Verify elements of footer', () => {
    elements.footerImage()
        .should('be.visible')
        .and('have.attr', 'src', 'img/SwagBot_Footer_graphic.png')
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    elements.footerCopyRights().should('be.visible').and('have.text', '© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    elements.footerSMIcons().should('not.be.empty')
    elements.smIconsTwitter().should('be.visible')
    elements.smIconsFacebook().should('be.visible')
    elements.smIconsLinkedin().should('be.visible')
})
})