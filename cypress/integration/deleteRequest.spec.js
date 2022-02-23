/// <reference types="cypress" />

describe("DELETE request", function () {
  var userToDelete = "2";
  it("delete an existing user via /users api", function () {
    // cy.request({
    //   method: "DELETE",
    //   url: "https://reqres.in/api/" + userToDelete,
    // }).then((response) => {
    //   expect(response.status).to.equal(204);
    // });

    /**
     * another is wraping the request in an alias an then calling
     */
    cy.request("DELETE", `/api/${userToDelete}`).as("userDeleted");
    cy.get("@userDeleted").then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
