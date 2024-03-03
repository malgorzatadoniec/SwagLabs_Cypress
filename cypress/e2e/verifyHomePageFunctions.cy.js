import {elements} from "../POM/homePage"
import Methods from "../methods/methods";

describe('Homepage layout', () => {

const homePageObj = new Methods;
    
    it('Verify homepage layout', () => {
        cy.visit("/inventory.html")
        homePageObj.clickIn(elements.ProductImgLink(2))
    })
})