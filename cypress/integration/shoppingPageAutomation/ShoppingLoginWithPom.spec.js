/// <reference types="cypress" />

import HomePage from "../../pages/HomePage";
import { accountTexts } from "../../constants/account";

const homePage = new HomePage();

describe("login in automation practice page with POM patttern", function () {
  beforeEach(function () {
    cy.fixture("usersShopping.json").as("user");
  });

  it("When Given the user visit the shopping page", function () {
    cy.gotoTheShoppingPage();

    homePage.elements.loginBtn().should("be.visible").click();
    homePage.SignInWithTheUser(this.user.email, this.user.password);

    homePage.elements
      .profileInfoText()
      .should("contain", accountTexts.WELCOME_MESSAGE);
  });
});
