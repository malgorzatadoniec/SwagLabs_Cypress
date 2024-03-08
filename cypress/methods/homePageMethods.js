class HomePageMethods{

    productPageCheck(prodlink, field, text, url)
    {
        prodlink.click()
        field().should('have.text', text)
        cy.url().should('include', url)
    }
    
    }
    
    export const homePageMethods = new HomePageMethods()