// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
    cy.request({
        method: 'GET',
        url: 'https://github.com/login',
    })

    .then((resp) => {
        const regex = /name="authenticity_token" value="(.*)" \/>/g;
        const token = regex.exec(resp.body)[1]
        cy.log(token)

        cy.request({
            method: 'POST',
            url: 'https://github.com/session',
            form: true,
            body: {
                    commit: 'Sign+in',
                    login: 'DanaTestForNew12',
                    password: 'f3D7r8Cr3FJ1',
                    authenticity_token: token,
                }
        })
        .then((resp) => {
            cy.log(resp)
       })
    })
})