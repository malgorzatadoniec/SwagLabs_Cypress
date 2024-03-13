
import {homePageElements} from "../POM/homePage"
import { methods } from "../methods/methods"
import {ProductMethod} from "../methods/specificMethods/productMethod"

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
    homePageElements.menuItemsList().should('not.be.empty')
    homePageElements.crossBtn().should('be.visible')
    homePageElements.menuAllItems().should('be.visible')
    homePageElements.menuAbout().should('be.visible')
    homePageElements.menuLogout().should('be.visible')
    homePageElements.menuReset().should('be.visible')
    })

it('Verify navigation bar elements', () => {
    homePageElements.scndheaderContainer().should('not.be.empty').and('be.visible')
    homePageElements.productLabel().should('be.visible').and('have.text', 'Products')
    homePageElements.peekIcon().should('be.visible')
    homePageElements.sortContainer().should('be.visible')
})

const prodId = [1, 2, 3, 4, 5, 6]

prodId.forEach(prodId => {
    it(`Verify elements of product container number ${prodId}`, () => {
        new ProductMethod(prodId).productContainer()
    })
});

it('Verify elements of footer', () => {
    methods.image(
        homePageElements.footerImage(),
        'img/SwagBot_Footer_graphic.png')
    homePageElements.footerCopyRights().should('be.visible').and('have.text', '© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    homePageElements.smIconsTwitter().should('be.visible')
    homePageElements.smIconsFacebook().should('be.visible')
    homePageElements.smIconsLinkedin().should('be.visible')
    })
})
