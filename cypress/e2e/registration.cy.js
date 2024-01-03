describe("registration", () => {
    beforeEach(() => {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
      cy.get('.base').should('contain.text', 'Create New Customer Account')
    })

    // sukses login (diisi dengan data dummy)
    it("successful registration", () => {
        cy.get('#firstname').type('user')
        cy.get('#lastname').type('bento')
        cy.get('#email_address').type('Bentopasifik@gmail.com')
        cy.get('#password').type('Password123')
        cy.get('#password-confirmation').type('Password123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      });

    // gagal login email sudah pernah digunakan
    it("failed registration - email is already in use", () => {
        cy.get('#firstname').type('user')
        cy.get('#lastname').type('pasifik')
        cy.get('#email_address').type('Bentopasifik@gmail.com')
        cy.get('#password').type('Password123')
        cy.get('#password-confirmation').type('Password123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error').should('contain.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
      });

      // gagal login karakter password tidak kuat
      it("failed registration - Password is not strong", () => {
        cy.get('#firstname').type('user')
        cy.get('#lastname').type('pasif')
        cy.get('#email_address').type('Bentopasif@gmail.com')
        cy.get('#password').type('12312345')
        cy.get('#password-confirmation').type('12312345')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#password-error').should('contain.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      });
  });
  