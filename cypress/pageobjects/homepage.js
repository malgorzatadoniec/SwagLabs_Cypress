class loginPage{

    elements = {
        pageWrapper : () => cy.get('#page_wrapper'),
        headerContainer : () => cy.get('#header_container'),
            headerLabel : () => cy.get('.header_label'),
            appLogo : () => cy.get('.app_logo'),
            menuBtn : () => cy.get('.bm-burger-button > button'),
            shoppingCart : () => cy.get('.shopping_cart_container'),
        scndheaderContainer : () => cy.get('.header_secondary_container'),
            productLabel : () => cy.get('.product_label'),
            peekIcon : () => cy.get('.peek'),
            sortContainer : () => cy.get('.product_sort_container'),
        inventoryList : () => cy.get('.inventory_list'), 
            firstInventoryContainer : () => cy.get('.inventory_list > :nth-child(1)'),
                firstProductImage : () => cy.get('#item_4_img_link > .inventory_item_img'),
                firstProductInnerContainer : () => cy.get(':nth-child(1) > .inventory_item_label'),
                firstProductName : () => cy.get('#item_4_title_link > .inventory_item_name'),
                firstProductDesc : () => cy.get(':nth-child(1) > .inventory_item_label > .inventory_item_desc'),
                firstPriceBar : () => cy.get(':nth-child(1) > .inventory_item_label > .inventory_item_desc'),
                firstProductPrice : () => cy.get(':nth-child(1) > .pricebar > .inventory_item_price'),
                firstProductAddBtn : () => cy.get(':nth-child(1) > .pricebar > .btn_primary'),
            secondInventoryContainer : () => cy.get('.inventory_list > :nth-child(2)'),
                secondProductImage : () => cy.get('#item_0_img_link > .inventory_item_img'),
                secondProductInnerContainer : () => cy.get(':nth-child(2) > .inventory_item_label'),
                secondProductName : () => cy.get('#item_0_title_link > .inventory_item_name'),
                secondProductDesc : () => cy.get(':nth-child(2) > .inventory_item_label > .inventory_item_desc'),
                secondPriceBar : () => cy.get(':nth-child(2) > .pricebar'),
                secondProductPrice : () => cy.get(':nth-child(2) > .pricebar > .inventory_item_price'),
                secondProductAddBtn : () => cy.get(':nth-child(2) > .pricebar > .btn_primary'),
            thirdInventoryContainer : () => cy.get('.inventory_list > :nth-child(3)'),
                thirdProductImage : () => cy.get('#item_1_img_link > .inventory_item_img'),
                thirdProductInnerContainer : () => cy.get(':nth-child(3) > .inventory_item_label'),
                thirdProductName : () => cy.get('#item_1_title_link > .inventory_item_name'),
                thirdProductDesc : () => cy.get(':nth-child(3) > .inventory_item_label > .inventory_item_desc'),
                thirdPriceBar : () => cy.get(':nth-child(3) > .pricebar'),
                thirdProductPrice : () => cy.get(':nth-child(3) > .pricebar > .inventory_item_price'),
                thirdProductAddBtn : () => cy.get(':nth-child(3) > .pricebar > .btn_primary'),
            fourthInventoryContainer : () => cy.get('.inventory_list > :nth-child(4)'),
                fourthProductImage : () => cy.get('#item_5_img_link > .inventory_item_img'),
                fourthProductInnerContainer : () => cy.get(':nth-child(4) > .inventory_item_label'),
                fourthProductName : () => cy.get('#item_5_title_link > .inventory_item_name'),
                fourthProductDesc : () => cy.get(':nth-child(4) > .inventory_item_label > .inventory_item_desc'),
                fourthPriceBar : () => cy.get(':nth-child(4) > .pricebar'),
                fourthProductPrice : () => cy.get(':nth-child(4) > .pricebar > .inventory_item_price'),
                fourthProductAddBtn : () => cy.get(':nth-child(4) > .pricebar > .btn_primary'),
            fifthInventoryContainer : () => cy.get('.inventory_list > :nth-child(5)'),
                fifthProductImage : () => cy.get('#item_2_img_link > .inventory_item_img'),
                fifthProductInnerContainer : () => cy.get(':nth-child(5) > .inventory_item_label'),
                fifthProductName : () => cy.get('#item_2_title_link > .inventory_item_name'),
                fifthProductDesc : () => cy.get(':nth-child(5) > .inventory_item_label > .inventory_item_desc'),
                fifthPriceBar : () => cy.get(':nth-child(5) > .pricebar'),
                fifthProductPrice : () => cy.get(':nth-child(5) > .pricebar > .inventory_item_price'),
                fifthProductAddBtn : () =>cy.get(':nth-child(5) > .pricebar > .btn_primary'),
            sixthInventoryContainer : () => cy.get('.inventory_list > :nth-child(6)'),
                sixthProductImage : () => cy.get('#item_3_img_link > .inventory_item_img'),
                sixthProductInnerContainer : () => cy.get(':nth-child(6) > .inventory_item_label'),
                sixthProductName : () => cy.get('#item_3_title_link > .inventory_item_name'),
                sixthProductDesc : () => cy.get(':nth-child(6) > .inventory_item_label > .inventory_item_desc'),
                sixthPriceBar : () => cy.get(':nth-child(6) > .pricebar'),
                sixthProductPrice : () => cy.get(':nth-child(6) > .pricebar > .inventory_item_price'),
                sixthProductAddBtn : () => cy.get(':nth-child(6) > .pricebar > .btn_primary'),
        footer : () => cy.get('.footer'),
            footerImage : () => cy.get('.footer_robot'),
            footerCopyRights : () => cy.get('.footer_copy'),
            footerSMIcons : () => cy.get('.social'),
                smIconsTwitter : () => cy.get('.social_twitter'),
                smIconsFacebook : () => cy.get('.social_facebook'),
                smIconsLinkedin : () => cy.get('.social_linkedin'),
        menuBar : () => cy.get('.bm-burger-button > button'),
            crossBtn : () => cy.get('.bm-cross-button > button'),
            menuAllItems : () => cy.get('#inventory_sidebar_link'),
            menuAbout : () => cy.get('#about_sidebar_link'),
            menuLogout : () => cy.get('#logout_sidebar_link'),
            menuResret : () => cy.get('#reset_sidebar_link')
    }

}

export default loginPage;