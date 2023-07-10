import { getUsername, getPassword } from './testDataUtil';

Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('#username').type(getUsername());
  cy.get('#password').type(getPassword());
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('mockApiResponse', (method, url, response) => {
  cy.server();
  cy.route({
    method,
    url,
    response,
  });
});
