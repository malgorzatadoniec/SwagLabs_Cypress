class ProductPageMetchod {

    constructor(id){
        this.id = id

    switch (id) {
        case 4 :
            this.name = 'Sauce Labs Backpack'
            this.desc = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
            this.price = '$29.99'
            this.url = 'id=4'
            break;
        case 0 :
            this.name = 'Sauce Labs Bike Light'
            this.desc = "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
            this.price = '$9.99'
            this.url = 'id=0'
            break;
        case 1 :
            this.name = 'Sauce Labs Bolt T-Shirt'
            this.desc = "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
            this.price = '$15.99'
            this.url = 'id=1'
            break;
        case 5 :
            this.name = 'Sauce Labs Fleece Jacket'
            this.desc = "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
            this.price = '$49.99'
            this.url = 'id=5'
            break;
        case 2 :
            this.name = 'Sauce Labs Onesie'
            this.desc = "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
            this.price = '$7.99'
            this.url = 'id=2'
            break;
        case 3 :
            this.name = 'Test.allTheThings() T-Shirt (Red)'
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

productPageCheck(field)
{
    field.click()
    cy.get('.inventory_details_name').should('have.text', this.name)
    cy.get('.inventory_details_desc').should('have.text', this.desc)
    cy.get('.inventory_details_price').should('have.text', this.price)
    cy.url().should('include', this.url)
}
}

module.exports = {ProductPageMetchod}