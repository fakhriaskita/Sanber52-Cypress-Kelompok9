Cypress.Commands.add('userLogin', (username, password) => {
    cy.fixture('dataLogin').then((dataLogin) => {
    cy.visit('')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.email').type(dataLogin.email)
    cy.get('.password').type(dataLogin.password)
    cy.get('.action.login.primary').click()  
})})