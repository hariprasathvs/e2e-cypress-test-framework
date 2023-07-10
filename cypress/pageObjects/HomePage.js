class HomePage {
    verifyWelcomeMessage() {
      cy.get('.welcome-message').should('contain', 'Welcome');
    }
  }
  
  export default new HomePage();
  