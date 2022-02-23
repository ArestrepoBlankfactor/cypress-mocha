/// <reference types="cypress" />

describe("UPDATE request", function () {
  before(() => {
    cy.fixture("newUser").as("dataNewUser");
  });

  it("update an existing user via /users api", function () {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users",
      body: this.dataNewUser,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.equal(200);
    });
  });
});
