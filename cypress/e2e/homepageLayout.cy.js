describe('Homepage layout', () => {
    
    it('Verify homepage layout', () => {
        cy.visit("/inventory.html")
        cy.get('.product_sort_container').invoke('show')
    })
})