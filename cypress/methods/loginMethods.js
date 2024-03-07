class LoginMethods{

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

export const loginMethods = new LoginMethods()