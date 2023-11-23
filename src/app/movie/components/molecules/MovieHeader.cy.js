import React from 'react'
import MovieHeader from './MovieHeader'

const movie = {
  id: '1',
  title: 'Inception',
  makeYear: '2010',
  duration: '2h 28min',
  ageRating: 'PG-13',
  genre: ['Action', 'Adventure', 'Sci-Fi'],
  director: ['Christopher Nolan'],
  writers: ['Christopher Nolan'],
  stars: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
  rating: {
      userId: '1', 
      movieId: '1',
      rating: 5
  },
  posterUrl: 'https://image.tmdb.org/t/p/w500//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
  images: ['https://image.tmdb.org/t/p/w500//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'],
  videos: ['YoHD9XEInc0'],
  ratingValue: 1
};

describe('<MovieHeader />', () => {
  it('renders', () => {
    cy.mount(<MovieHeader details={movie} />)
  })

  it('displays movie title and details', () => {
    cy.mount(<MovieHeader details={movie} />)
    cy.get('[data-testid="movie-meta"]').should('contain', 'Inception');
    cy.get('[data-testid="movie-meta"]').should('contain', '2010');
    cy.get('[data-testid="movie-meta"]').should('contain', 'PG-13');
  })

  it('displays movie rating', () => {
    cy.mount(<MovieHeader details={movie} />)
    cy.get('[data-testid="movie-rating"]').should('contain', '1');
  })
})