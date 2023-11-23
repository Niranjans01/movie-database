describe('Movie Meta', () => {
    it('displays the movie title', () => {
        cy.visit('http://localhost:3000/movie?id=1');
        cy.get('[data-testid="movie-meta"]').first().contains('Avengers: Endgame');
    });

    it('displays the movie release date', () => {
        cy.visit('http://localhost:3000/movie?id=1');
        cy.get('[data-testid="movie-meta"]').first().contains('2021');
    });

    it('displays the movie rating', () => {
        cy.visit('http://localhost:3000/movie?id=1');
        cy.get('[data-testid="movie-meta"]').first().contains('R');
    });
});