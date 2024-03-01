// import homePage from "../pageobjects/homePage"

// describe('Homepage layout', () => {
    
//     it('Verify homepage layout', () => {
//         const homeObj = new homePage();
//         cy.visit("/inventory.html")
//         homeObj.elements.pageWrapper().should('exist').within(() => {

//             homeObj.elements.menuBtn().should('exist')
//             homeObj.elements.headerContainer().should('exist').and('not.be.empty').within(() => {
//                 homeObj.elements.headerLabel().should('exist').and('not.be.empty').within(() => {
//                     homeObj.elements.appLogo().should('be.visible')
//                 })
//                 homeObj.elements.shoppingCart().should('be.visible')
//             })

//             homeObj.elements.scndheaderContainer().should('exist').and('not.be.empty').within(() => {
//                 homeObj.elements.productLabel().should('be.visible').and('have.text', 'Products')
//                 homeObj.elements.peekIcon().should('be.visible')
//                 homeObj.elements.sortContainer().should('be.visible')
//             })
//             homeObj.elements.inventoryList().should('exist').and('not.be.empty').within(() => {
//                 homeObj.elements.firstInventoryContainer().should('not.be.empty').within(() => {
//                     homeObj.elements.firstProductImage().should('be.visible').and('have.attr', 'src', 'img/sauce-backpack-1200x1500.jpg')
//                 })
//                 homeObj.elements.secondInventoryContainer().should('not.be.empty')
//                 homeObj.elements.thirdInventoryContainer().should('not.be.empty')
//                 homeObj.elements.fourthInventoryContainer().should('not.be.empty')
//                 homeObj.elements.fifthInventoryContainer().should('not.be.empty')
//                 homeObj.elements.sixthInventoryContainer().should('not.be.empty')
//             })
//         })
//         homeObj.elements.footer().should('exist').and('not.be.empty').within(() => {
//             homeObj.elements.footerImage().should('be.visible').and('have.attr', 'src', 'img/SwagBot_Footer_graphic.png')
//             homeObj.elements.footerCopyRights().should('be.visible').and('have.text', '© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
//             homeObj.elements.footerSMIcons().should('be.visible').within(() => {
//                 homeObj.elements.smIconsTwitter().should('be.visible')
//                 homeObj.elements.smIconsFacebook().should('be.visible')
//                 homeObj.elements.smIconsLinkedin().should('be.visible')
//             })
//         })
//     })
// })