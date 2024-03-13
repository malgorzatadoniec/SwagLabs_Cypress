class Methods {

    addedProducts(addOne, addTwo, shoppingCart, checkout)
    {
        addOne.click()
        addTwo.click()
        shoppingCart().click()
        checkout().click()
    }

    userInput(fieldFName, name, fieldLName, lname, fieldZip, zip, continueBtn)
    {
        fieldFName().type(name)
        fieldLName().type(lname)
        fieldZip().type(zip)
        continueBtn().click()
    }

    image(image, src)
    {
       image.should('be.visible')
       .and('have.attr', 'src', src)
       .and('have.prop', 'naturalWidth')
       .should('be.greaterThan', 0)
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