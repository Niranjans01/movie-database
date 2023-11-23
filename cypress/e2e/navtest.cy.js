describe('Navigation', () => {
    it('should navigate to the about page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        cy.get('h1').contains('Welcome to the Movie App')

        // Find a link with an href attribute containing "youtube" and click it
        cy.get('a[href*="movie?id=1"]').click()

        // The new url should include "/movie"
        cy.url().should('include', '/movie')

        // The new page should contain an h1 with "About page"
        cy.get('p').contains('Avengers: Endgame')
    })
})