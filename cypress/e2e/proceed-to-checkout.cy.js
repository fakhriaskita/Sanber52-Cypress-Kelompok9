describe('Proceed to Checkout', () => {
    it('success checkout via Product Detail Page', () => {
        //Login check via dataLogin in fixtures
        cy.userLogin();
        cy.log('Login Successfully')

        //Go to PLP
        cy.get('.home-main > .content > .action').click()
        cy.log('Successfully go to Product List Page')
        cy.get('.wrapper > .products > :nth-child(1)').scrollIntoView().scrollIntoView({duration: 2000})
        cy.get('.wrapper > .products > :nth-child(1)').click()
        cy.log('Successfully go to Product Detail Page')

        //Select Detail Product via PDP
        cy.get('.product-add-form').scrollIntoView().scrollIntoView({duration: 2000})
        cy.get('#option-label-size-143-item-171').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#qty').clear().type('2')
        cy.wait(2000)
        cy.get('#product-addtocart-button').click()
        cy.log('Successfully Add to Cart')
        cy.wait(3000)

        //Go to Cart
        cy.get('.showcart').scrollIntoView().scrollIntoView({duration: 2000})
        cy.get('.showcart').click()

        //Order Summary - Shipping Address
        cy.contains('Proceed to Checkout')
        cy.get('.action.primary.checkout').click()
        cy.wait(3000)
        cy.get('.action-select-shipping-item').click()
        cy.get('#checkout-shipping-method-load').scrollIntoView().scrollIntoView({ duration: 2000 })
        cy.get('.button').click()

        //Review and Payment
        cy.wait(3000)

        //Payment Method
        cy.get('#billing-address-same-as-shipping-checkmo').click()
        cy.wait(3000)
        
        //Doing Payment - Checkout
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
        cy.log('Checkout Successfully')
    })
    it('Checkout via Shopping Cart with conditions', () => {
        cy.userLogin();
        cy.wait(4000)
        cy.get('.action.showcart').click()
        cy.get('.counter-number').then(($text) => {
            if ($text.text() == 0) {
                cy.log('You have no items in your shopping cart.')
            } else {
                cy.get('.action.showcart').click()
                cy.get('.action.primary.checkout').click()
                cy.wait(3000)
                cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
                cy.wait(3000)
                cy.get('.action-select-shipping-item').click()
                cy.get('#checkout-shipping-method-load').scrollIntoView().scrollIntoView({ duration: 2000 })
                cy.get('.button').click()
                cy.wait(3000)
                cy.get('#billing-address-same-as-shipping-checkmo').click()
            }
        })
    })
  })