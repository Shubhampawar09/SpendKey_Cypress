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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath"/>

Cypress.Commands.add('login', (email, password) => { 
    
    cy.visit('/login')
    cy.get('input.form-control:last-child',{timeout : 5000}).type(email)
    cy.get('.pt-2 > .input-group > .form-control',{timeout : 5000}).type(password)
    cy.wait(3000)
    cy.get('button.sendkey-primary',{timeout : 5000}).click()
})


