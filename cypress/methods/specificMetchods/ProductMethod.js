class ProductMethod{

    constructor(prodId)
    {
        this.prodId = prodId

    switch (prodId) {
        case 1:
            this.no = 4
            this.value = './img/sauce-backpack-1200x1500.jpg'
            this.text = 'Sauce Labs Backpack'
            this.desc = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
            this.price = '$29.99'
            break;
    
        case 2:
            this.no = 0
            this.value = './img/bike-light-1200x1500.jpg'
            this.text = 'Sauce Labs Bike Light'
            this.desc = "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
            this.price = '$9.99'
            break;

        case 3:
            this.no = 1
            this.value = './img/bolt-shirt-1200x1500.jpg'
            this.text = 'Sauce Labs Bolt T-Shirt'
            this.desc = "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
            this.price = '$15.99'
        break;

        case 4:
            this.no = 5
            this.value = './img/sauce-pullover-1200x1500.jpg'
            this.text = 'Sauce Labs Fleece Jacket'
            this.desc = "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
            this.price = '$49.99'
        break;

        case 5:
            this.no = 2
            this.value = './img/red-onesie-1200x1500.jpg'
            this.text = 'Sauce Labs Onesie'
            this.desc = "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
            this.price = '$7.99'
        break;

        case 6:
            this.no = 3
            this.value = './img/red-tatt-1200x1500.jpg'
            this.text = 'Test.allTheThings() T-Shirt (Red)'
            this.desc = "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
            this.price = '$15.99'
        break;

        default:
            this.no = 'Default value'
            this.value = 'Default value'
            this.text = 'Default value'
            this.desc = 'Default value'
            this.price = 'Default value'
        break;
    }
}

productContainer()
{
    cy.get(`.inventory_list > :nth-child(${this.prodId})`).should('not.be.empty')
    cy.get(`#item_${this.no}_img_link > .inventory_item_img`)
        .should('be.visible')
        .and('have.attr', 'src', this.value)
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    cy.get(`#item_${this.no}_title_link > .inventory_item_name`).should('contain.text', this.text)
    cy.get(`:nth-child(${this.prodId}) > .inventory_item_label > .inventory_item_desc`).should('have.text', this.desc)
    cy.get(`:nth-child(${this.prodId}) > .pricebar > .inventory_item_price`).should('have.text', this.price)
    cy.get(`:nth-child(${this.prodId}) > .pricebar > .btn_primary`).should('contain.text', 'ADD TO CART')
}

}


module.exports = {ProductMethod}
