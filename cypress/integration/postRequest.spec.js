/// <reference types="cypress" />
var faker = require("faker");
const FAKE_EMAIL = faker.internet.exampleEmail();
const PROPERTIES = ["id","email","gender","name","status"]


describe("POST request", function () {
  beforeEach(function () {
    cy.fixture("newUser").as("dataNewUser");
    cy.fixture("goRestNewUser").as("dataNewuserGoRest");
  });

  var emailOfUsers = new Array();
  it("create user in GO REST API", function () {
    const TOKEN = Cypress.env("primaryToken");
    cy.generateUserFixture().then((user) => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        body: this.dataNewuserGoRest,
        headers: {
          Authorization: "Bearer " + TOKEN,
          contentType: "application/json",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(201);
        cy.validateResponseBodyKeys(response.body, ...PROPERTIES)
      });
    });
  });

  it.skip("validate email of lastest user created", function () {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        console.table(body)

        emailOfUsers = body.map((user) => {
          return user.email;
        });
      })
      .then(() => {
        let latestEmail = emailOfUsers[0];
        expect(latestEmail).to.equal(this.dataNewuserGoRest.email);
      });
  });


});
