/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Home Page', () => {
  it('should navigate to the about page when clicking the about link', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')
  })

  it('should stay on the home page when using the GO button', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a button saying "GO" and click it
    cy.get('button').click()

    cy.url().should('eq', 'http://localhost:3000/')
  })
})
