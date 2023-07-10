import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import { getUsername, getPassword } from '../support/testDataUtil';

describe('UI Testing', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.fillUsername(getUsername());
    LoginPage.fillPassword(getPassword());
    LoginPage.submit();
  });

  it('should display welcome message on the homepage', () => {
    HomePage.verifyWelcomeMessage();
  });

  it('should match the login page snapshot', () => {
    cy.matchImageSnapshot();
  });
});
