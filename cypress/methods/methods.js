class Methods{

    typeIn(field, text)
    {
        field.type(text).should('have.value', text)
    }

    clickIn(field) 
    {
        field.click()
    }

    urlEq(url)
    {
        cy.url().should('eq', url)
    }

    errorText(field, text)
    {
        field.should('be.visible').and('have.text', text)
    }

    isVisible(field)
    {
        field.should('be.visible')
    }

    isNotEmpty(field)
    {
        field.should('not.be.empty')
    }

}

export default Methods;