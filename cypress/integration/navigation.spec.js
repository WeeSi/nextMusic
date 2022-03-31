describe('Navigation', () => {
    it('should navigate to login page when not connect', () => {
      // Start from the home page
      cy.visit('http://localhost:3000/home')

      // The new url should include "/": redirection not connected
      cy.url().should('include', '/')
  
    })
    it('should navigate to home page when logged', () => {
        // Start from the home page
        cy.visit('http://localhost:3000')
  
        // Connexion
        cy.get('[name="identifiant"]').type('greg').blur()
        cy.get('[name="password"]').type('eorto').blur()
        cy.get('form').submit()

        // The new url should include "/home"
        cy.url().should('include', '/home')
      })
      it('should navigate to all page and logout', () => {
        // Start from the home page
        cy.visit('http://localhost:3000')

        // Connexion
        cy.get('[name="identifiant"]').type('greg').blur()
        cy.get('[name="password"]').type('eorto').blur()
        cy.get('form').submit()

        // Navigate to bibliotheque
        cy.visit('http://localhost:3000/bibliotheque')
        // The new url should include "/bibliotheque"
        cy.url().should('include', '/bibliotheque')

        // Navigate to favoris
        cy.visit('http://localhost:3000/favoris')
        // The new url should include "/favoris"
        cy.url().should('include', '/favoris')
      })
  })