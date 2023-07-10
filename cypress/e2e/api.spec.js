describe('API Testing', () => {
    beforeEach(() => {
      cy.mockApiResponse('GET', '/api/endpoint', { status: 200 });
    });
  
    it('should return a successful response', () => {
      cy.visit('/');
      cy.request('GET', '/api/endpoint')
        .its('status')
        .should('equal', 200);
    });
  });
  