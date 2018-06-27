describe('/', () => {
    beforeEach(() => {
        cy.visit('https://github.com/')
    })

    it('greets with sign up page', () => {
        cy.contains('Sign up')
    })

    it('links to #/login', () => {
        cy
        .contains('Sign in')
        .should('have.attr', 'href', '/login')

    })
})