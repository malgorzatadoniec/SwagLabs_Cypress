import { checkYourInfoElements } from "../POM/chcecoutYourInformation"
import {checkoutOverviewElements} from "../POM/checkoutOverview"
import {homePageElements} from "../POM/homePage"
import {yourCartElements} from "../POM/yourCart"

import {methods} from "../methods/methods"

describe('Verify Checkout: Overview page layout', () => {

    beforeEach (() => {
        cy.visit('/checkout-step-two.html')
      })

it('Page title is visible on navigation bar', () => {
    checkoutOverviewElements.subHeader().should('have.text', 'Checkout: Overview')
})

it('Products description is visible', () => {
    checkoutOverviewElements.quantityLabel().should('be.visible').and('have.text', 'QTY')
    checkoutOverviewElements.descriptionLabel().should('be.visible').and('have.text', 'DESCRIPTION')
})

it('Payment information is visible', () => {
    checkoutOverviewElements.summaryInfo().should('not.be.empty')
    checkoutOverviewElements.paymentInfoTitle().should('be.visible').and('have.text', 'Payment Information:')
    checkoutOverviewElements.paymentInfo().should('be.visible').and('have.text', 'SauceCard #31337')
})

it('Shipping Information is visible', () => {
    checkoutOverviewElements.shippingInfoTitle().should('be.visible').and('have.text', 'Shipping Information:')
    checkoutOverviewElements.shippingInfo().should('be.visible').and('have.text', 'FREE PONY EXPRESS DELIVERY!')
})

it('Price information is visible', () => {
    checkoutOverviewElements.itemTotal().should('be.visible').and('contain.text', 'Item total: $')
    checkoutOverviewElements.tax().should('be.visible').and('contain.text', 'Tax: $')
    checkoutOverviewElements.totalPrice().should('be.visible').and('contain.text', 'Total: $')
})

it('Buttons are visibe and have correct text', () => {
    checkoutOverviewElements.cancelBtn().should('be.visible').and('have.text', 'CANCEL')
    checkoutOverviewElements.finishBtn().should('be.visible').and('have.text', 'FINISH')
    })
})

describe('Summary contains of ordered products', () => {
    
    it('Ordered products are in summary ', () => {
        cy.visit('/inventory.html')
        methods.addedProducts(
            homePageElements.productAddBtn(1),
            homePageElements.productAddBtn(2),
            homePageElements.shoppingCart,
            yourCartElements.checkoutBtn)
        methods.userInput(
            checkYourInfoElements.firstName,
            'Jenny',
            checkYourInfoElements.lastName,
            'Moore',
            checkYourInfoElements.postalCode,
            '11-111',
            checkYourInfoElements.continueBtn)
        checkoutOverviewElements.itemName(4).should('have.text', 'Sauce Labs Backpack')
        checkoutOverviewElements.itemName(0).should('have.text', 'Sauce Labs Bike Light')
    })
})