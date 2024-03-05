const elements = {

// header
    menuBtn : () => cy.get('.bm-burger-button > button'),
    headerContainer : () => cy.get('#header_container'),
    headerLabel : () => cy.get('.header_label'),
    appLogo : () => cy.get('.app_logo'),
    shoppingCart : () => cy.get('.shopping_cart_container'),
    cartItemsCount : () => cy.get('.fa-layers-counter'),
    subHeader : () => cy.get('.subheader'),
// summary container - list of items
    summaryContainer : () => cy.get('#checkout_summary_container'),
    cartList : () => cy.get('.cart_list'),
    quantityLabel : () => cy.get('.cart_quantity_label'),
    descriptionLabel : () => cy.get('.cart_desc_label'),
    itemContainer : (id) => cy.get(`.cart_list > :nth-child(${id})`),
    itemQuantity : (id) => cy.get(`:nth-child(${id}) > .summary_quantity`),
    itemName : (id) => cy.get(`#item_${id}_title_link > .inventory_item_name`),
    itemDesc : (id) => cy.get(`:nth-child(${id}) > .cart_item_label > .inventory_item_desc`),
    itemPrice : (id) => cy.get(`:nth-child(${id}) > .cart_item_label > .inventory_item_price`), 
// summary container - info
    summaryInfo : () => cy.get('.summary_info'),
    paymentInfoTitle : () => cy.get('.summary_info > :nth-child(1)'),
    paymentInfo : () => cy.get('.summary_info > :nth-child(2)'),
    shippingInfoTitle : () => cy.get('.summary_info > :nth-child(3)'),
    shippingInfo : () => cy.get('.summary_info > :nth-child(4)'),
    itemTotal : () => cy.get('.summary_subtotal_label'),
    tax : () => cy.get('.summary_tax_label'), 
    totalPrice : () => cy.get('.summary_total_label'),
    cartFooter : () => cy.get('.cart_footer'),
    cancelBtn : () => cy.get('.cart_cancel_link'),
    finishBtn : () => cy.get('.btn_action'),
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