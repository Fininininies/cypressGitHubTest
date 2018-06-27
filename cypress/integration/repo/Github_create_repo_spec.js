describe('/new', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('gives the option to create a new repo', () => {
        cy.visit('https://github.com/')
        cy.get('.ml-3')
        .should('contain', 'Start a project')
    })
})