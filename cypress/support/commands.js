import ProductViewPage from "../pages/ProductViewPage";

const productViewPage = new ProductViewPage();

Cypress.Commands.add("gotoTheShoppingPage", () => {
  cy.log("visit shopping automation page");
  cy.visit(Cypress.env("URL"));
  cy.get("#header_logo").should("be.visible");
});

Cypress.Commands.add("searchProduct", (productName) => {
  cy.log("search a product to buy");
  cy.get("#search_query_top")
    .should("have.attr", "placeholder", "Search")
    .type(productName)
    .type("{enter}");
});

Cypress.Commands.add("switchToIframeProductView", () => {
  cy.log("change to the Iframe context");
  cy.waitLoader();
  return cy
    .get(productViewPage.elements.iframeViewProduct())
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

Cypress.Commands.add("waitLoader", () => {
  cy.log('waiting the loader disappear')
  cy.get("#fancybox-loading > div", { timeout: 30000 }).should("not.exist");
});
