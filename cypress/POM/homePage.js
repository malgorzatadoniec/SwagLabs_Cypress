const homePageElements = {

    pageWrapper : () => cy.get('#page_wrapper'),
    menuBtn : () => cy.get('.bm-burger-button > button'),
    menuBar : () => cy.get('.bm-menu'),
    menuItemsList : () => cy.get('.bm-item-list'),
    outsideMenu : () => cy.get('.bm-overlay'),
    crossBtn : () => cy.get('.bm-cross-button > button'),
    menuAllItems : () => cy.get('#inventory_sidebar_link'),
    menuAbout : () => cy.get('#about_sidebar_link'),
    menuLogout : () => cy.get('#logout_sidebar_link'),
    menuReset : () => cy.get('#reset_sidebar_link'),
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
    InventoryContainer : (id) => cy.get(`.inventory_list > :nth-child(${id})`),
    productImg : (no) => cy.get(`#item_${no}_img_link > .inventory_item_img`),
    productInnerContainer : (id) => cy.get(`:nth-child(${id}) > .inventory_item_label`),
    productName : (no) => cy.get(`#item_${no}_title_link > .inventory_item_name`),
    productDesc : (id) => cy.get(`:nth-child(${id}) > .inventory_item_label > .inventory_item_desc`),
    priceBar : (id) => cy.get(`:nth-child(${id}) > .inventory_item_label > .inventory_item_desc`),
    productPrice : (id) => cy.get(`:nth-child(${id}) > .pricebar > .inventory_item_price`),
    productAddBtn : (id) => cy.get(`:nth-child(${id}) > .pricebar > .btn_primary`),
    productRemoveBtn : (id) => cy.get(`:nth-child(${id}) > .pricebar > .btn_secondary`),
// footer
    footer : () => cy.get('.footer'),
    footerImage : () => cy.get('.footer_robot'),
    footerCopyRights : () => cy.get('.footer_copy'),
    footerSMIcons : () => cy.get('.social'),
    smIconsTwitter : () => cy.get('.social_twitter'),
    smIconsFacebook : () => cy.get('.social_facebook'),
    smIconsLinkedin : () => cy.get('.social_linkedin')
}

export {homePageElements};