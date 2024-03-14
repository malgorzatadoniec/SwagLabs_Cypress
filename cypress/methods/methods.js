class Methods {

/**
 * Checks if fields for user input are empty and have correct placeholders
 * @param {*} field field for user input
 * @param {*} value text of placeholder
 */
    placeholderValue(field, value)
    {
        field().should('be.visible').and('have.value', "").and('have.attr', 'placeholder', value)
    }

/**  
 * Verify if login is succesful
 * @param {*} fieldUser field to enter username
 * @param {*} username type in username
 * @param {*} fieldPassword field to enter password
 * @param {*} password type in password
 * @param {*} fieldBtn clicking on login button
*/
    succesfulLogin(fieldUser, username, fieldPassword, password, fieldBtn)
    {
        fieldUser().type(username)
        fieldPassword().type(password)
        fieldBtn().click()
        cy.url('include', '/inventory.html')
    }

/**
* Verify error message when login is unsuccesful
* @param {*} fieldUser field to enter username
* @param {*} username type in username
* @param {*} fieldPassword field to enter password
* @param {*} password type in password
* @param {*} fieldBtn clicking on login button
* @param {*} fieldText field showing error message
* @param {*} text error message text
*/
    unsuccesfulLogin(fieldUser, username, fieldPassword, password, fieldBtn, fieldText, text)
    {
        fieldUser().type(username)
        fieldPassword().type(password)
        fieldBtn().click()
        fieldText().should('have.text', text)
    }

/**
 * Checks image's visibility, source and size
 * @param {*} image image (f.ex. product image)
 * @param {*} src source of the image
 */
    image(image, src)
    {
        image.should('be.visible')
        .and('have.attr', 'src', src)
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    }

/**
 * Adds two products to cart and goes to Checkout: Your Information page
 * @param {*} addOne ADD button for first product
 * @param {*} addTwo ADD button for second product
 * @param {*} shoppingCart clicking on shopping cart icon
 * @param {*} checkout clicking on CHECKOUT button
 */
    addedProducts(addOne, addTwo, shoppingCart, checkout)
    {
        addOne.click()
        addTwo.click()
        shoppingCart().click()
        checkout().click()
    }
/**  
 * Fill in user personal info with COMPLETE data on Checkout: Your Information page and goes to Checkout: Overview page
 * @param {*} fieldFName field for entering First Name
 * @param {*} name type in First Name
 * @param {*} fieldLName field for entering Last Name
 * @param {*} lname type in Last Name
 * @param {*} fieldZip field for entering Postal Code/Zip
 * @param {*} zip type in Postal Code/Zip
 * @param {*} continueBtn clicking on CONTINUE button
*/
    userInput(fieldFName, name, fieldLName, lname, fieldZip, zip, continueBtn)
    {
        fieldFName().type(name)
        fieldLName().type(lname)
        fieldZip().type(zip)
        continueBtn().click()
    }
/**
 * Fill in user personal info with INCOMPLETE data on Checkout: Your Information page
 * @param {*} frstfield First field for user input
 * @param {*} text User input 
 * @param {*} scndfield Second field for user input
 * @param {*} input User input
 * @param {*} button clicking on CONTINUE button
 * @param {*} message field showing error message
 * @param {*} messageText error message text
 */
    wrongUserInput(frstfield, text, scndfield, input, button, message, messageText)
    {
        frstfield().type(text)
        scndfield().type(input)
        button().click()
        message().should('be.visible').and('have.text', messageText)
    }

}

export const methods = new Methods()