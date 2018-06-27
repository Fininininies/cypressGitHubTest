const username = 'DanaTestForNew12';
const password = 'f3D7r8Cr3FJ1';
const wrongPassword = 'wrongpassword';


describe('/login', () => {
    beforeEach(() => {
        cy.visit('https://github.com/login')
    })

    it('requires username', () => {
        cy.get('.btn').contains('Sign in').click()
        cy.get('#js-flash-container')
        .should('contain', 'Incorrect username or password.')
    })

    it('requires password', () => {
        cy.get('#login_field').type(username + '{enter}')
        cy.get('#js-flash-container')
        .should('contain', 'Incorrect username or password.')
    })

    it('requires valid username and pasword', () => {
        cy.get('#login_field').type(username)
        cy.get('#password').type(wrongPassword + '{enter}')
        cy.get('#js-flash-container')
        .should('contain', 'Incorrect username or password.')
    })

    it('navigates to #/ on succesful login', () => {
        cy.get('#login_field').type(username)
        cy.get('#password').type(password + '{enter}')
        cy.hash().should('eq', '')
    })
})