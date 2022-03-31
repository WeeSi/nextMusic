/// <reference types="cypress" />

context('Network Requests', () => {

  it('cy.request() - make an XHR request', () => {
    cy.request({
      method: 'GET',
      url:'https://spotify23.p.rapidapi.com/search/?q=test&type=tracks&offset=0&limit=30&numberOfTopResults=5',
      headers: {
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        'X-RapidAPI-Key': '8d62796f53msh915f625fd3e5709p1bbdc7jsnfed37800d073'
      }
    })
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.tracks.items).to.have.property('length').and.be.eq(30)
      })
  })
})
