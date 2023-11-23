import React from 'react'
import MovieStudio from './MovieStudio'

const data = {
  id: '1',
  title: 'Inception',
  contentUrl: 'YoHD9XEInc0',
  type: 'video',
}


describe('<MovieStudio />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MovieStudio selectedMedia={data} imageCount={1} videoCount={2} posterUrl="https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg" />)
    cy.get('[data-testId="movie-studio"]').should('exist');
    // check is the video is playing
    cy.get('[data-testId="video-player"]').should('have.attr', 'src', 'https://www.youtube.com/embed/YoHD9XEInc0');
    // check if the image is displayed
    cy.get('[data-testId="movie-poster"]').find('img').should('be.visible');
  })
})