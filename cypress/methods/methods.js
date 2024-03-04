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

    exist(field)
    {
        field.should('exist')
    }

    isVisible(field)
    {
        field.should('be.visible')
    }

    isNotEmpty(field)
    {
        field.should('not.be.empty')
    }

    haveText(field, text)
    {
        field.should('have.text', text)
    }

    haveValue(field, value)
    {
        field.should('have.value', value)
    }

    haveAttr(field, attr, value)
    {
        field.should('have.attr', attr, value)
    }

    haveClass(field, className)
    {
        field.should('have.class', className)
    }

    contain(field, value)
    {
        field.should('contain', value)
    }

}

export const methods = new Methods()