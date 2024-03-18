class ProductPageMethod {

    constructor(id){
        this.id = id

    switch (id) {
        case 4 :
            this.name = 'Sauce Labs Backpack'
            this.value = './img/sauce-backpack-1200x1500.jpg'
            this.desc = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
            this.price = '$29.99'
            this.url = 'id=4'
            break;
        case 0 :
            this.name = 'Sauce Labs Bike Light'
            this.value = './img/bike-light-1200x1500.jpg'
            this.desc = "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
            this.price = '$9.99'
            this.url = 'id=0'
            break;
        case 1 :
            this.name = 'Sauce Labs Bolt T-Shirt'
            this.value = './img/bolt-shirt-1200x1500.jpg'
            this.desc = "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
            this.price = '$15.99'
            this.url = 'id=1'
            break;
        case 5 :
            this.name = 'Sauce Labs Fleece Jacket'
            this.value = './img/sauce-pullover-1200x1500.jpg'
            this.desc = "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
            this.price = '$49.99'
            this.url = 'id=5'
            break;
        case 2 :
            this.name = 'Sauce Labs Onesie'
            this.value = './img/red-onesie-1200x1500.jpg'
            this.desc = "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
            this.price = '$7.99'
            this.url = 'id=2'
            break;
        case 3 :
            this.name = 'Test.allTheThings() T-Shirt (Red)'
            this.value = './img/red-tatt-1200x1500.jpg'
            this.desc = "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
            this.price = '$15.99'
            this.url = 'id=3'
            break;
        default:
            this.name = 'Default value'
            this.desc = "Default value"
            this.price = 'Default value'
            this.url = 'Default value'
            break;
    }
}

/**
 * productPageCheck()
 * Verify if link redirects user to proper product page
 * @param {*} field link to given product page
 * @param {*} name product's name
 * @param {*} url product's id which should be included in url
 */
productPageCheck(field)
{
    field.click()
    cy.get('.inventory_details_name').should('have.text', this.name)
    cy.url().should('include', this.url)
}

/**
 * Verify contents of product page for every product
 * @param {*} id product's id
 * @param {*} value image's source
 * @param {*} name product's name
 * @param {*} desc product's description
 * @param {*} price product's price
 * @param {*} url product's id which should be included in url
 */
productPageLayout()
{
    cy.visit('/inventory.html')
    cy.get(`#item_${this.id}_title_link > .inventory_item_name`).click()
    cy.get('.inventory_details_img')
        .should('be.visible')
        .and('have.attr', 'src', this.value)
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    cy.get('.inventory_details_name').should('be.visible').and('have.text', this.name)
    cy.get('.inventory_details_desc').should('be.visible').and('have.text', this.desc)
    cy.get('.inventory_details_price').should('be.visible').and('have.text', this.price)
    cy.get('.btn_primary').should('be.visible').and('have.text', 'ADD TO CART')
    cy.get('.inventory_details_back_button').should('be.visible').and('have.text', '<- Back')
    cy.url().should('include', this.url)
}
}

module.exports = {ProductPageMethod}