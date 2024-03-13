import {checkoutOverviewElements} from "../POM/checkoutOverview"
import {homePageElements} from "../POM/homePage"
import {finishElements} from "../POM/finish"
import {yourCartElements} from "../POM/yourCart"
import {checkYourInfoElements} from "../POM/chcecoutYourInformation"

import {methods} from "../methods/methods"

describe('Verify Finish page functionalities', () => {

it('Cart icon has no red circle next to it after completing an order', () => {
    cy.visit('/inventory.html')
    methods.addedProducts(
        homePageElements.productAddBtn(2),
        homePageElements.productAddBtn(5),
        homePageElements.shoppingCart,
        yourCartElements.checkoutBtn)
    methods.userInput(
        checkYourInfoElements.firstName,
        'Jenny',
        checkYourInfoElements.lastName,
        'Moore',
        checkYourInfoElements.postalCode,
        '55-555',
        checkYourInfoElements.continueBtn)
    checkoutOverviewElements.finishBtn().click()
    finishElements.cartItemsCount().should('not.exist')
})
})