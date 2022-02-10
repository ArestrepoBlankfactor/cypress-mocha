/// <reference types="cypress" />
class HomePage {
  elements = {
    logoImg: () => cy.get(".logo"),
    loginBtn: () => cy.get(".login"),
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#passwd"),
    submitLoginBtn: () => cy.xpath("//button[@id='SubmitLogin']"),
    profileInfoText:() => cy.xpath("//p[@class='info-account']")
  };

  /**
   * sign in with a registred user
   * @param {string} email 
   * @param {string} password 
   */
  SignInWithTheUser(email, password) {
    this.elements.emailInput().should("be.visible").type(email);
    this.elements.passwordInput().should("be.visible").type(password);
    this.elements
      .submitLoginBtn()
      .should("be.visible")
      .and("be.enabled")
      .click();
  }
}

export default HomePage;
