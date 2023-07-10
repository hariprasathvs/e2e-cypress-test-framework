describe('Visual Testing', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should match the login page snapshot', () => {
      cy.matchImageSnapshot();
    });
  });
  