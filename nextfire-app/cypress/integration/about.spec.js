/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('About Page', () => {
    it('should have a "Go Back" link which can be clicked to return to the homepage', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/about')
        cy.get('a').contains('Go Back').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('should have a "Go" button in the navbar which can be clicked to return to the homepage', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/about')
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})
  