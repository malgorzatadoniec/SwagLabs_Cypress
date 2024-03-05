const FinishElements = {

    contentWrapper : () => cy.get('#contents_wrapper'),
// header
    menuBtn : () => cy.get('.bm-burger-button > button'),
    headerContainer : () => cy.get('#header_container'),
    headerLabel : () => cy.get('.header_label'),
    appLogo : () => cy.get('.app_logo'),
    shoppingCart : () => cy.get('.shopping_cart_container'),
    cartItemsCount : () => cy.get('.fa-layers-counter'),
    subHeader : () => cy.get('.subheader'),
// checkout container
    checkoutContainer : () => cy.get('#checkout_complete_container'),
    compliteTitle : () => cy.get('.complete-header'),
    compliteText : () => cy.get('.complete-text'), 
    compliteImage : () => cy.get('.pony_express'),
// footer
    footer : () => cy.get('.footer'),
    footerImage : () => cy.get('.footer_robot'),
    footerCopyRights : () => cy.get('.footer_copy'),
    footerSMIcons : () => cy.get('.social'),
    smIconsTwitter : () => cy.get('.social_twitter'),
    smIconsFacebook : () => cy.get('.social_facebook'),
    smIconsLinkedin : () => cy.get('.social_linkedin')
}

export {FinishElements};