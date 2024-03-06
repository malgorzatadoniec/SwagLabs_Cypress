// import {loginPageElements} from "../POM/loginPage"

class Methods{

loginCred(field, value)
{
    field.should('be.visible').and('have.value', "").and('have.attr', 'placeholder', value)
}

}

export const methods = new Methods()