const faker = require("faker");

const filename = "cypress/fixtures/goRestNewUser.json";

/**
 * overwrite the fixture in order to genereta a random email in each test execution 
 */
Cypress.Commands.add("generateUserFixture", () => {
  cy.readFile(filename).then((obj) => {
    obj.email = faker.internet.exampleEmail();
    cy.writeFile(filename, obj);
  });
});

/**
 * @response {json} response body
 * @keys {array of strings} list of properties that should include the @response
 */
Cypress.Commands.add("validateResponseBodyKeys", (response, ...keys) => {
  expect(response).to.have.all.keys(keys);
});
