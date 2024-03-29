const checkYourInfoElements = {

    contentWrapper : () => cy.get('#contents_wrapper'),
// header
    menuBtn : () => cy.get('.bm-burger-button > button'),
    menuBar : () => cy.get('.bm-menu'),
    menuItemsList : () => cy.get('.bm-item-list'),
    outsideMenu : () => cy.get('.bm-overlay'),
    crossBtn : () => cy.get('.bm-cross-button > button'),
    menuAllItems : () => cy.get('#inventory_sidebar_link'),
    menuAbout : () => cy.get('#about_sidebar_link'),
    menuLogout : () => cy.get('#logout_sidebar_link'),
    menuReset : () => cy.get('#reset_sidebar_link'),
    headerContainer : () => cy.get('#header_container'),
    headerLabel : () => cy.get('.header_label'),
    appLogo : () => cy.get('.app_logo'),
    shoppingCart : () => cy.get('.shopping_cart_container'),
    cartItemsCount : () => cy.get('.fa-layers-counter'),
    subHeader : () => cy.get('.subheader'),
// checkout container
    chceckoutContainer : () => cy.get('#checkout_info_container'),
    form : () => cy.get('form'),
    checkoutInfo : () => cy.get('.checkout_info'),
    firstName : () => cy.get('[data-test="firstName"]'),
    lastName : () => cy.get('[data-test="lastName"]'),
    postalCode : () => cy.get('[data-test="postalCode"]'),
    buttonsContainer : () => cy.get('.checkout_buttons'),
    cancelBtn : () => cy.get('.cart_cancel_link'),
    continueBtn : () => cy.get('.btn_primary'),
    errorText : () => cy.get('[data-test="error"]'),
// footer
    footer : () => cy.get('.footer'),
    footerImage : () => cy.get('.footer_robot'),
    footerCopyRights : () => cy.get('.footer_copy'),
    footerSMIcons : () => cy.get('.social'),
    smIconsTwitter : () => cy.get('.social_twitter'),
    smIconsFacebook : () => cy.get('.social_facebook'),
    smIconsLinkedin : () => cy.get('.social_linkedin')

}

export {checkYourInfoElements};
