describe("login", () => {
    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login"); 
      })

    // sukses login
    it("successful login", () => {
        cy.get('#email').type('Bentopasifik@gmail.com')  
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Password123')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      });

    // gagal login password dan email salah
    it.only("failed login - wrong email and password", () => {
        cy.get('#email').type('Bentopas@gmail.com')  
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Password123')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.message-error').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      });
})