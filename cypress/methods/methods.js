import { homePageElements } from "../POM/homePage"
import { yourCartElements } from "../POM/yourCart"
import { checkYourInfoElements } from "../POM/chcecoutYourInformation"

class Methods {

    addedProducts(addOne, addTwo, shoppingCart, checkout, fieldFName, fieldLName, fieldZip, continueBtn)
    {
        addOne.click()
        addTwo.click()
        shoppingCart().click()
        checkout().click()
        fieldFName().type('John')
        fieldLName().type('Snow')
        fieldZip().type('22-222')
        continueBtn().click()
    }

    addedProductsV2(id, no)
    {
        homePageElements.productAddBtn(id).click()
        homePageElements.productAddBtn(no).click()
        homePageElements.shoppingCart().click()
        yourCartElements.checkoutBtn().click()
        checkYourInfoElements.firstName().type('John')
        checkYourInfoElements.lastName().type('Snow')
        checkYourInfoElements.postalCode().type('22-222')
        checkYourInfoElements.continueBtn().click()
    }

    userInput(fieldFName, name, fieldLName, lname, fieldZip, zip )
    {
        fieldFName().type(name)
        fieldLName().type(lname)
        fieldZip().type(zip)
    }

    wrongUserInput(frstfield, text, scndfield, input, button, message, messageText)
    {
        frstfield().type(text)
        scndfield().type(input)
        button().click()
        message().should('be.visible').and('have.text', messageText)
    }

    succesfulLogin(fieldUser, username, fieldPassword, password, fieldBtn)
    {
        fieldUser().type(username)
        fieldPassword().type(password)
        fieldBtn().click()
        cy.url('include', '/inventory.html')
    }

    unsuccesfulLogin(fieldUser, username, fieldPassword, password, fieldBtn, fieldText, text)
    {
        fieldUser().type(username)
        fieldPassword().type(password)
        fieldBtn().click()
        fieldText().should('have.text', text)
    }

    loginCred(field, value)
    {
        field().should('be.visible').and('have.value', "").and('have.attr', 'placeholder', value)
    }

}

export const methods = new Methods()