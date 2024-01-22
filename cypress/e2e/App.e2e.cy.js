describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('a pokemon\'s page can be viewed', function() {
    cy.visit('http://localhost:3000')
    cy.get('a[href*="/pokemon/ivysaur"]').click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})