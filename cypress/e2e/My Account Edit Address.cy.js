/// <reference types="Cypress" />

describe('Fill Address Form', () => {
  it('Visit the Address Form Page', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/new/cle') //  URL halaman formulir  sesuai
  })

  it('Fill in Address Information', () => {
    // Isi formulir dengan data dummy
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get('#company').type('ABC Company')
    cy.get('#telephone').type('+1234567890')
    cy.get('#street_1').type('123 Main Street')
    cy.get('#city').type('Cityville')
    cy.get('#region_id').select('California') // Gantilah dengan opsi yang sesuai pada situs Anda
    cy.get('#zip').type('12345')
    cy.get('#country').select('United States') // Gantilah dengan opsi yang sesuai pada situs Anda

    // Anda mungkin perlu menyesuaikan selektor elemen formulir sesuai dengan situs web Anda
  })

  it('Submit the Address Form', () => {
    cy.get('Save Address').submit()

    // Tunggu hingga formulir disubmit dan halaman diarahkan ke halaman selanjutnya (jika ada)
    // Gantilah dengan selector atau URL yang sesuai pada situs Anda
    cy.url().should('include', 'success') 
  })
})
