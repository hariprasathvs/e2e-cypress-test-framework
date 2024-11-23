# Project

This repository contains end-to-end tests implemented using Cypress. It is structured to support various testing types, including API, database, UI, visual, and schema validation using the AJV package for JSON schema validation.

## Folder Structure


- **cypress**: Contains the Cypress tests and related files.
  - **e2e**: Directory containing the end-to-end test files.
    - **api.spec.js**: API testing scenarios.
    - **database.spec.js**: Database testing scenarios.
    - **schemaValidation.spec.js**: API Schema validation with OpenAPI Specification.
    - **ui.spec.js**: UI testing scenarios.
    - **visual.spec.js**: Visual testing scenarios.
  - **fixtures**: Directory to store test fixtures (example.json, sampleOpenAPISchema.json).
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
2. Navigate to the project directory. `cd <project-folder>`
2. Install project dependencies by running `npm install`.
3. Update the `cypress.env.json` file with your desired username and password for testing.
4. Run the Cypress tests using the Cypress Test Runner with `npx cypress open` or run the tests headless with `npx cypress run`.

## JSON Schema Validation with AJV
### Integration:
1. AJV is a JSON Schema validator used to ensure API responses match predefined schemas.
2. Validation logic is implemented as a custom Cypress command in support/commands.js.

## Key Benefits
1. Modular Design: Tests are categorized by type, improving readability and maintainability.
2. Reusable Components: Page Objects and custom commands simplify test development.
3. Robust API Testing: Schema validation ensures data integrity.
4. Scalable: Easily extendable to include new test cases or types.

## Contribution Guidelines
1. Fork the repository and create a new branch.
2. Commit your changes with a descriptive message.
3. Open a pull request for review.
For any queries or issues, please create a ticket in the repository.