# Project

This project contains end-to-end tests using Cypress.

## Folder Structure


- **cypress**: Contains the Cypress tests and related files.
  - **downloads**: Directory to store downloaded files during tests.
  - **e2e**: Directory containing the end-to-end test files.
    - **api.spec.js**: API testing scenarios.
    - **database.spec.js**: Database testing scenarios.
    - **ui.spec.js**: UI testing scenarios.
    - **visual.spec.js**: Visual testing scenarios.
  - **fixtures**: Directory to store test fixtures (example.json).
  - **pageObjects**: Directory containing Page Object files.
    - **HomePage.js**: Page Object for the home page.
    - **LoginPage.js**: Page Object for the login page.
  - **support**: Directory containing support files.
    - **commands.js**: Custom Cypress commands (login, mockApiResponse).
    - **e2e.js**: Additional configuration and setup for end-to-end tests.
    - **index.js**: Common setup and configuration for Cypress.
    - **testDataUtil.js**: It contains utility functions for test data, including retrieving database queries and usernames/passwords.
- **node_modules**: Directory to store project dependencies.
- **cypress.env.json**: Environment variables are stored in the `cypress.env.json` file, allowing you to customize and secure sensitive data (username, password). 
- **cypress.config.js**: The `cypress.config.js` file provides configuration options for Cypress, such as setupNodeEvents.
- **package-lock.json**: Automatically generated file to lock dependencies versions.
- **package.json**: Project configuration and dependencies.

## Setup

1. Clone this repository.
2. Install project dependencies by running `npm install`.
3. Update the `cypress.env.json` file with your desired username and password for testing.
4. Run the Cypress tests using the Cypress Test Runner with `npx cypress open` or run the tests headlessly with `npx cypress run`.

Note: Make sure you have Cypress installed globally or use `npx` to run Cypress commands.

## Additional Information

- The tests are organized into different files based on their respective testing types (API, database, UI, visual).
- Page Object pattern is used to improve test readability and maintainability.
- Custom commands are defined in `support/commands.js` to simplify test code and make it more expressive.