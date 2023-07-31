describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('the h1 contains the correct text', () => {
    cy.getByData('header').contains("Air Quality Index Checker")
  })

  it('the table contains the correct headings', () => {
    cy.get("h5").contains("Air Quality Levels")
    cy.get('table >thead >tr').contains('th', "AQI Range").should('be.visible')
    cy.get('table >thead >tr').contains('th', "Level of Health Concern").should('be.visible')
  })

  it('check conditional logic for table', () => {
    cy.get('table >tbody >tr td:nth-child(1)').each(($el, index, $list) => {

      let text = $el.text()

      if(text.includes('0 - 50')){
        cy.get('table >tbody >tr td:nth-child(2)').eq(index).then(function(level){
          let concernLevel = level.text()
          expect(concernLevel.trim()).to.equal('Good')
        })
      }
      if(text.includes('51 - 100')){
        cy.get('table >tbody >tr td:nth-child(2)').eq(index).then(function(level){
          let concernLevel = level.text()
          expect(concernLevel.trim()).to.equal('Moderate')
        })
      }
      if(text.includes('101 - 150')){
        cy.get('table >tbody >tr td:nth-child(2)').eq(index).then(function(level){
          let concernLevel = level.text()
          expect(concernLevel.trim()).to.equal('Unhealthy for Sensitive Groups')
        })
      }
      if(text.includes('151 - 200')){
        cy.get('table >tbody >tr td:nth-child(2)').eq(index).then(function(level){
          let concernLevel = level.text()
          expect(concernLevel.trim()).to.equal('Unhealthy')
        })
      }
      if(text.includes('201 - 300')){
        cy.get('table >tbody >tr td:nth-child(2)').eq(index).then(function(level){
          let concernLevel = level.text()
          expect(concernLevel.trim()).to.equal('Very Unhealthy')
        })
      }
      if(text.includes('301 and higher')){
        cy.get('table >tbody >tr td:nth-child(2)').eq(index).then(function(level){
          let concernLevel = level.text()
          expect(concernLevel.trim()).to.equal('Hazardous')
        })
      }

    })
  })
})