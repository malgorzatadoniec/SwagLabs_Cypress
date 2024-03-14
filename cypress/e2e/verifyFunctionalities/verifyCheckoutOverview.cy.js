import {checkoutOverviewElements} from "../../POM/checkoutOverview"
import {homePageElements} from "../../POM/homePage"
import {finishElements} from "../../POM/finish"
import {yourCartElements} from "../../POM/yourCart"
import {checkYourInfoElements} from "../../POM/chcecoutYourInformation"

import {methods} from "../../methods/methods"

describe('Verify Checkout: Overview page functionalities', () => {

    context('Starting from Verify Checkout: Overview page', () => {

    beforeEach (() => {
        cy.visit('/checkout-step-two.html')
      })

        it('“CANCEL” button gets user back to home page', () => {
            checkoutOverviewElements.cancelBtn().click()
            homePageElements.productLabel().should('have.text', 'Products')
            cy.url().should('include', '/inventory.html')
        })

        it('“FINISH” button gets user to Finish page', () => {
            checkoutOverviewElements.finishBtn().click()
            finishElements.subHeader().should('have.text', 'Finish')
            cy.url().should('include', '/checkout-complete.html')
        })
})

    context('Starting from home page', () => {
        it('Total sum of item price, tax and total', () => {
            cy.visit('/inventory.html')
            methods.addedProducts(
                homePageElements.productAddBtn(3),
                homePageElements.productAddBtn(2),
                homePageElements.shoppingCart,
                yourCartElements.checkoutBtn)
            methods.userInput(
                checkYourInfoElements.firstName,
                'John',
                checkYourInfoElements.lastName,
                'Snow',
                checkYourInfoElements.postalCode,
                '22-222',
                checkYourInfoElements.continueBtn)
            checkoutOverviewElements.itemTotal().should('have.text', 'Item total: $25.98')
            checkoutOverviewElements.tax().should('have.text', 'Tax: $2.08')
            checkoutOverviewElements.totalPrice().should('have.text', 'Total: $28.06')
        })
    })
})

