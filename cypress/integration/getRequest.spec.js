/// <reference types="cypress" />

/**
   * using the default baseUrl
   */
describe("get request", () => {

  it("Validate status code of the reqres.in api", () => {
    let result = cy.request("/api/users");
    result.its("status").should("equal", 200);
  });

  it("validate api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "/api/users",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body.data));

      console.table(body);

      expect(body[0]).has.property("first_name", "George");
      expect(body[1]).has.property("email", "janet.weaver@reqres.in");

      body.forEach((item) => {
        expect(item).to.have.all.keys(
          "avatar",
          "email",
          "first_name",
          "id",
          "last_name"
        );
      });
    });
  });

  it("posts api", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts",
    }).then((response) => {
      console.table(response.body);
      cy.log(JSON.stringify(response.body));
    });
  });
});
