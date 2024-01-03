describe('Choose Product', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/collections/yoga-new.html')
        
    })

    //Sukses memilih produk karena memilih size dan color
    // ====================================================
    it.only('Verify Success Choose Product', () => {
        // cy.visit('https://magento.softwaretestingboard.com/collections/yoga-new.html')
        cy.get('.wrapper > .products > :nth-child(1)').click()
        cy.get('#option-label-size-143-item-171').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#qty').type(0)
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success').should('contain.text', 'You added Echo Fit Compression Short to your shopping cart.')
    })

    //Gagal memilih produk karena memilih color dan tidak memilih size
    // ====================================================
    it('Verify Failed Choose Product - Not Choose Size', () => {
        // cy.visit('https://magento.softwaretestingboard.com/collections/yoga-new.html')
        cy.get('.wrapper > .products > :nth-child(1)').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#product-addtocart-button').click()
        cy.get('#super_attribute\[143\]-error').should('contain.text', 'This is a required field')
    })

    //Gagal memilih produk karena memilih size dan tidak memilih colosr
    // ====================================================
    it.only('Verify Failed Choose Product - Not Choose Color', () => {
        // cy.visit('https://magento.softwaretestingboard.com/collections/yoga-new.html')
        cy.get('.wrapper > .products > :nth-child(1)').click()
        cy.get('#option-label-size-143-item-171').click()
        cy.get('#product-addtocart-button').click()
        cy.get('#super_attribute\[93\]-error').should('contain.text', 'This is a required field')
    })
})