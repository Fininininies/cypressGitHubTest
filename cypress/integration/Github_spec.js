// QA Role Assignment using Cypress.io Beta version 3.0.1

//login variables
const userName = 'DanaTestForNew10';
const password = 'Safest-password-ever-48576';

//GitHub page variables
const repoName = 'PrettyNeatRepository';
const settings = '[data-selected-links="repo_settings repo_branch_settings hooks integration_installations repo_keys_settings issue_template_editor /' + userName + '/' + repoName + '/settings"]';
const deleteRepo = ':nth-child(4) > .details-reset > .boxed-action';
const repoNameBox = ':nth-child(4) > .details-reset > .Box > .Box-body > .js-normalize-submit > p > .form-control';
const deleteButton = ':nth-child(4) > .details-reset > .Box > .Box-body > .js-normalize-submit > .btn';

describe('Log in and set up a new github repository', function() {


    it('logs in and creates a new repository with a README.md, then deletes repository', function() {
        
        // Step 1 - login in github with my account
        cy.visit('https://github.com')

        cy.get('.btn-link > .octicon').click()
        cy.get('[href="/login"]').click()

        //username and password
        cy.get('#login_field')
        .type(userName);
        cy.get('#password')
        .type(password);
        cy.get('.btn').click();

        //step 2 - create github repository
        cy.get('.ml-3').should('contain', 'Start a project');
        cy.get('.ml-3').click();

        cy.get('#repository_name')
        .type(repoName);

        //I could just perform step3 - with a README.md - like this
        //cy.get('#repository_name').click
        //but I won't because that's not in the description ;)

        cy.get('.btn-primary').click();
        cy.get('strong > a').should('contain', repoName);
        cy.get('[data-ga-click="Empty repo, click, Clicked README link"]').click();
        
        //I wanted to type some text into the ReadMe file, but haven't figured out how yet. 
        //Might get back to this later today, after the API tests.
        // cy.get('.CodeMirror-line').click() 
        // .type('# README', { force : true });

        cy.get('#commit-summary-input').click()
        .type('Create README.md');

        cy.get('#commit-description-textarea').click()
        .type('All the descriptions');

        cy.get('#submit-file').click();


        //Delete repository
        cy.get(settings).click();
        cy.get(deleteRepo).click();
        cy.get(repoNameBox).click()
        .type(repoName);

        cy.get(deleteButton).click();

        //Sign out
        cy.get('.HeaderNavlink > .avatar').click();
        cy.get('.logout-form > .dropdown-item').click();
    })
})