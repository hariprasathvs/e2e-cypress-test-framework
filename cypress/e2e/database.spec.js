import { getDatabaseQuery } from '../support/testDataUtil';

describe('Database Testing', () => {
  it('should retrieve data from the database', () => {
    cy.task('queryDatabase', getDatabaseQuery()).then((result) => {
      expect(result).to.have.length.above(0);
    });
  });
});
