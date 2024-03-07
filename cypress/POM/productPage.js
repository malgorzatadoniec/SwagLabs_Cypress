const productPageElements = {

    headerContainer : () => cy.get('#header_container'),
    headerLabel : () => cy.get('.header_label'),
    menuBtn : () => cy.get('.bm-burger-button > button'),
    menuBar : () => cy.get('.bm-menu'),
    crossBtn : () => cy.get('.bm-cross-button > button'),
    menuAllItems : () => cy.get('#inventory_sidebar_link'),
    menuAbout : () => cy.get('#about_sidebar_link'),
    menuLogout : () => cy.get('#logout_sidebar_link'),
    menuResret : () => cy.get('#reset_sidebar_link'),
    shoppingCart : () => cy.get('.shopping_cart_container'),
    cartItemsCount : () => cy.get('.fa-layers-counter'),
    itemContainer : () => cy.get('#inventory_item_container'),
    itemDetailsContainer : () => cy.get('.inventory_details_container'),
    productImage : () => cy.get('.inventory_details_img'),
    descContainer : () => cy.get('.inventory_details_desc_container'),
    itemName : () => cy.get('.inventory_details_name'),
    itemDesc : () => cy.get('.inventory_details_desc'),
    itemPrice : () => cy.get('.inventory_details_price'),
    addToCartBtn : () => cy.get('.btn_primary'),
    backBtn : () => cy.get('.inventory_details_back_button')

}
export {productPageElements};