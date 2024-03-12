class YourInfoMethods {

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
}

export const yourInfoMethods = new YourInfoMethods()