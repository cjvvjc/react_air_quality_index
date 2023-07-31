describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('user enters a city to check air quality', () => {
    cy.getByData("city").type('Denver')
    cy.getByData("submit").click()
  })

})