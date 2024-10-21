describe('dev.finance', () => {
  it('Cadastrar com sucesso', () => {
  
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('#transaction > .button').click()
    cy.get('#description').click().type('Serviço Extra')
    cy.get('#amount').click().type('800')
    cy.get('#date').type('2024-10-10')
    cy.get('button').click()
    
  })

  it('Exclusão com sucesso', () => {
  
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('#transaction > .button').click()
    cy.get('#description').click().type('Serviço Extra')
    cy.get('#amount').click().type('800')
    cy.get('#date').type('2024-10-10')
    cy.get('button').click()
    cy.get(':nth-child(4) > img').click()
    
  })
})