/// <reference types="cypress" />
import { accountTexts } from "../../constants/account";

describe("login in automation practice page", function () {
  it("Given th user visit the shopping page", function () {
    cy.gotoTheShoppingPage();
  });

  it.only("should get into the account page when the login has been successful", () => {
    cy.get(".login").contains("Sign in").click();
    
    cy.get("#email").should("be.visible").type("blankfactor@gmail.com");
    cy.get("#passwd").should("be.visible").type("Prueba123");
    cy.get("#SubmitLogin > span").click();

    cy.log("multiples ways to assert the text on the element")
    cy.get(".info-account").contains(accountTexts.WELCOME_MESSAGE);
    cy.get(".info-account").should("contain", accountTexts.WELCOME_MESSAGE);
    cy.get(".info-account").should(($message) => {
      expect($message).to.have.text(accountTexts.WELCOME_MESSAGE);
    });
  });
});
