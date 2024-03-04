
import {elements} from "../POM/homePage"
import {methods} from "../methods/methods"

 describe('Verifi Home page layout', () => {

    beforeEach (() => {
        cy.visit("/inventory.html")
      })

it('Main elements are not empty', () => {
    methods.isNotEmpty(elements.pageWrapper())
    methods.isNotEmpty(elements.headerContainer())
    methods.isNotEmpty(elements.inventoryList())
    methods.isNotEmpty(elements.footer())
})

it('Verify top header elements', () => {
    methods.exist(elements.menuBtn())
    methods.isNotEmpty(elements.headerLabel())
    methods.isVisible(elements.appLogo())
    methods.isVisible(elements.shoppingCart())
})

it('Verify navigation bar elements', () => {
    methods.isNotEmpty(elements.scndheaderContainer())
    methods.haveText(elements.productLabel(), 'Products')
    methods.isVisible(elements.peekIcon())
    methods.isVisible(elements.sortContainer())
})

it('Verify elements of first product container', () => {
    methods.isNotEmpty(elements.InventoryContainer(1))
    methods.isVisible(elements.ProductImage(1))
    methods.isVisible(elements.ProductImgLink(4))
    methods.haveAttr(elements.ProductImgLink(4), 'src', './img/sauce-backpack-1200x1500.jpg')
    methods.isNotEmpty(elements.ProductInnerContainer(1))
    methods.contain(elements.ProductInnerContainer(1), 'Sauce Labs Backpack')
    methods.haveText(elements.ProductDesc(1), 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    methods.isNotEmpty(elements.PriceBar(1))
    methods.haveText(elements.ProductPrice(1), '$29.99')
    methods.isNotEmpty(elements.ProductAddBtn(1))
    methods.haveClass(elements.ProductAddBtn(1), 'btn_primary btn_inventory')
    methods.contain(elements.ProductAddBtn(1), 'ADD TO CART')
})

it('Verify elements of second product container', () => {
    methods.isNotEmpty(elements.InventoryContainer(2))
    methods.isVisible(elements.ProductImage(2))
    methods.isVisible(elements.ProductImgLink(0))
    methods.haveAttr(elements.ProductImgLink(0), 'src', './img/bike-light-1200x1500.jpg')
    methods.isNotEmpty(elements.ProductInnerContainer(2))
    methods.contain(elements.ProductInnerContainer(2), 'Sauce Labs Bike Light')
    methods.haveText(elements.ProductDesc(2), "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
    methods.isNotEmpty(elements.PriceBar(2))
    methods.haveText(elements.ProductPrice(2), '$9.99')
    methods.isNotEmpty(elements.ProductAddBtn(2))
    methods.haveClass(elements.ProductAddBtn(2), 'btn_primary btn_inventory')
    methods.contain(elements.ProductAddBtn(2), 'ADD TO CART')
})

it('Verify elements of third product container', () => {
    methods.isNotEmpty(elements.InventoryContainer(3))
    methods.isVisible(elements.ProductImage(3))
    methods.isVisible(elements.ProductImgLink(1))
    methods.haveAttr(elements.ProductImgLink(1), 'src', './img/bolt-shirt-1200x1500.jpg')
    methods.isNotEmpty(elements.ProductInnerContainer(3))
    methods.contain(elements.ProductInnerContainer(3), 'Sauce Labs Bolt T-Shirt')
    methods.haveText(elements.ProductDesc(3), "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.")
    methods.isNotEmpty(elements.PriceBar(3))
    methods.haveText(elements.ProductPrice(3), '$15.99')
    methods.isNotEmpty(elements.ProductAddBtn(3))
    methods.haveClass(elements.ProductAddBtn(3), 'btn_primary btn_inventory')
    methods.contain(elements.ProductAddBtn(3), 'ADD TO CART')
})

it('Verify elements of fourth product container', () => {
    methods.isNotEmpty(elements.InventoryContainer(4))
    methods.isVisible(elements.ProductImage(4))
    methods.isVisible(elements.ProductImgLink(5))
    methods.haveAttr(elements.ProductImgLink(5), 'src', './img/sauce-pullover-1200x1500.jpg')
    methods.isNotEmpty(elements.ProductInnerContainer(4))
    methods.contain(elements.ProductInnerContainer(4), 'Sauce Labs Fleece Jacket')
    methods.haveText(elements.ProductDesc(4), "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")
    methods.isNotEmpty(elements.PriceBar(4))
    methods.haveText(elements.ProductPrice(4), '$49.99')
    methods.isNotEmpty(elements.ProductAddBtn(4))
    methods.haveClass(elements.ProductAddBtn(4), 'btn_primary btn_inventory')
    methods.contain(elements.ProductAddBtn(4), 'ADD TO CART')
})

it('Verify elements of fifth product container', () => {
    methods.isNotEmpty(elements.InventoryContainer(5))
    methods.isVisible(elements.ProductImage(5))
    methods.isVisible(elements.ProductImgLink(2))
    methods.haveAttr(elements.ProductImgLink(2), 'src', './img/red-onesie-1200x1500.jpg')
    methods.isNotEmpty(elements.ProductInnerContainer(5))
    methods.contain(elements.ProductInnerContainer(5), 'Sauce Labs Onesie')
    methods.haveText(elements.ProductDesc(5), "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")
    methods.isNotEmpty(elements.PriceBar(5))
    methods.haveText(elements.ProductPrice(5), '$7.99')
    methods.isNotEmpty(elements.ProductAddBtn(5))
    methods.haveClass(elements.ProductAddBtn(5), 'btn_primary btn_inventory')
    methods.contain(elements.ProductAddBtn(5), 'ADD TO CART')
})

it.only('Verify elements of sixth product container', () => {
    methods.isNotEmpty(elements.InventoryContainer(6))
    methods.isVisible(elements.ProductImage(6))
    methods.isVisible(elements.ProductImgLink(3))
    methods.haveAttr(elements.ProductImgLink(3), 'src', './img/red-tatt-1200x1500.jpg')
    methods.isNotEmpty(elements.ProductInnerContainer(6))
    methods.contain(elements.ProductInnerContainer(6), 'Test.allTheThings() T-Shirt (Red)')
    methods.haveText(elements.ProductDesc(6), "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.")
    methods.isNotEmpty(elements.PriceBar(6))
    methods.haveText(elements.ProductPrice(6), '$15.99')
    methods.isNotEmpty(elements.ProductAddBtn(6))
    methods.haveClass(elements.ProductAddBtn(6), 'btn_primary btn_inventory')
    methods.contain(elements.ProductAddBtn(6), 'ADD TO CART')
})

it('Verify elements of footer', () => {
    methods.isVisible(elements.footerImage())
    methods.haveAttr(elements.footerImage(), 'src', 'img/SwagBot_Footer_graphic.png')
    methods.isVisible(elements.footerCopyRights())
    methods.haveText(elements.footerCopyRights(), '© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    methods.isNotEmpty(elements.footerSMIcons())
    methods.isVisible(elements.smIconsTwitter())
    methods.isVisible(elements.smIconsFacebook())
    methods.isVisible(elements.smIconsLinkedin())
})
})