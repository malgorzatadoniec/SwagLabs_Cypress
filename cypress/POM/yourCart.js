const elements = {

// header
    menuBtn : () => cy.get('.bm-burger-button > button'),
    headerContainer : () => cy.get('#header_container'),
    headerLabel : () => cy.get('.header_label'),
    appLogo : () => cy.get('.app_logo'),
    shoppingCart : () => cy.get('.shopping_cart_container'),
    cartItemsCount : () => cy.get('.fa-layers-counter'),
    subHeader : () => cy.get('.subheader'),
// cart container
    pageContent : () => cy.get('#cart_contents_container'),
    cartContent : () => cy.get('.cart_list'),
    quantityLabel : () => cy.get('.cart_quantity_label'),
    descLabel : () => cy.get('.cart_desc_label'), 
    cartContainer : (childID) => cy.get(`.cart_list > :nth-child(${childID})`),
    itemQuantity : (childID) => cy.get(`:nth-child(${childID}) > .cart_quantity`),
    itemInnerContainer : (childID) => cy.get(`:nth-child(${childID}) > .cart_item_label`),
    itemName : (itemNo) => cy.get(`#item_${itemNo}_title_link > .inventory_item_name`),
    itemDesc : (childID) => cy.get(`:nth-child(${childID}) > .cart_item_label > .inventory_item_desc`),
    itemPricebar : (childID) => cy.get(`:nth-child(${childID}) > .cart_item_label > .item_pricebar`),
    itemPrice : (childID) => cy.get(`:nth-child(${childID}) > .cart_item_label > .item_pricebar > .inventory_item_price`),
    removeBtn : (childID) => cy.get(`:nth-child(${childID}) > .cart_item_label > .item_pricebar > .btn_secondary`),
    cartFooter : () => cy.get('.cart_footer'),
    continueBtn : () => cy.get('.cart_footer > .btn_secondary'),
    checkoutBtn : () => cy.get('.btn_action'),
// footer
    footer : () => cy.get('.footer'),
    footerImage : () => cy.get('.footer_robot'),
    footerCopyRights : () => cy.get('.footer_copy'),
    footerSMIcons : () => cy.get('.social'),
    smIconsTwitter : () => cy.get('.social_twitter'),
    smIconsFacebook : () => cy.get('.social_facebook'),
    smIconsLinkedin : () => cy.get('.social_linkedin')
}

export {elements};