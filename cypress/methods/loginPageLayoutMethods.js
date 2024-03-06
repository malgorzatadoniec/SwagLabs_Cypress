// import {loginPageElements} from "../POM/loginPage"

class LoginPageLayoutMethods{

loginCred(field, value)
{
    field.should('be.visible').and('have.value', "").and('have.attr', 'placeholder', value)
}

}

export const loginPageLayoutMethods = new LoginPageLayoutMethods()