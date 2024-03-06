
import {homePageElements} from "../POM/homePage"

class Methods{

productContainer(id, no, value, text, desc, price, text4)
{
    homePageElements.InventoryContainer(id).should('not.be.empty')
    homePageElements.ProductImg(no)
        .should('be.visible')
        .and('have.attr', 'src', value)
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    homePageElements.ProductInnerContainer(id).should('contain.text', text)
    homePageElements.ProductDesc(id).should('have.text', desc)
    homePageElements.ProductPrice(id).should('have.text', price)
    homePageElements.ProductAddBtn(id).should('contain.text', 'ADD TO CART')
}

}

export const methods = new Methods()
