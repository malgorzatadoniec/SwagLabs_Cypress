const elements = {

    pageWrapper : () => cy.get('#page_wrapper'),
    menuBtn : () => cy.get('.bm-burger-button > button'),
    crossBtn : () => cy.get('.bm-cross-button > button'),
    menuAllItems : () => cy.get('#inventory_sidebar_link'),
    menuAbout : () => cy.get('#about_sidebar_link'),
    menuLogout : () => cy.get('#logout_sidebar_link'),
    menuResret : () => cy.get('#reset_sidebar_link'),
// header
    headerContainer : () => cy.get('#header_container'),
    headerLabel : () => cy.get('.header_label'),
    appLogo : () => cy.get('.app_logo'),
    shoppingCart : () => cy.get('.shopping_cart_container'),
    cartItemsCount : () => cy.get('.fa-layers-counter'),
// second header
    scndheaderContainer : () => cy.get('.header_secondary_container'),
    productLabel : () => cy.get('.product_label'),
    peekIcon : () => cy.get('.peek'),
    sortContainer : () => cy.get('.product_sort_container'),
// products
    inventoryList : () => cy.get('.inventory_list'), 
    InventoryContainer : (childID) => cy.get(`.inventory_list > :nth-child(${childID})`),
    ProductImage : (childID) => cy.get(`:nth-child(${childID}) > div.inventory_item_img`),
    ProductImgLink : (itemNo) => cy.get(`#item_${itemNo}_img_link > .inventory_item_img`),
    ProductInnerContainer : (childID) => cy.get(`:nth-child(${childID}) > .inventory_item_label`),
    ProductName : (itemNo) => cy.get(`item_${itemNo}_title_link > .inventory_item_name`),
    ProductDesc : (childID) => cy.get(`:nth-child(${childID}) > .inventory_item_label > .inventory_item_desc`),
    PriceBar : (childID) => cy.get(`:nth-child(${childID}) > .inventory_item_label > .inventory_item_desc`),
    ProductPrice : (childID) => cy.get(`:nth-child(${childID}) > .pricebar > .inventory_item_price`),
    ProductAddBtn : (childID) => cy.get(`:nth-child(${childID}) > .pricebar > .btn_primary`),
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