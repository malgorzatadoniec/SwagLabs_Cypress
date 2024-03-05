import {elements} from "../POM/homePage"

class Methods{

productContainer(id, no, value, text, text2, text3, text4)
{
    elements.InventoryContainer(id).should('not.be.empty')
    elements.ProductImg(no)
        .should('be.visible')
        .and('have.attr', 'src', value)
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    elements.ProductInnerContainer(id).should('contain.text', text)
    elements.ProductDesc(id).should('have.text', text2)
    elements.ProductPrice(id).should('have.text', text3)
    elements.ProductAddBtn(id).should('contain.text', text4)
}

}

export const methods = new Methods()