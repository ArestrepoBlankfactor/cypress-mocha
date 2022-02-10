/// <reference types="cypress" />


describe("some ways to locate elements", () => {
  

  beforeEach(() => {
    cy.visit("https://demoqa.com/elements");
  })
  it("xpath way", () => {
    cy.xpath('//div[@class="accordion"]//div[contains(text(),"Elements")]');
    cy.xpath('(//li)[2]').click();
    // or iterative id
    cy.xpath('(//li[@id="item-0"])[1]').click(); 
    // or passing the index
     cy.xpath(`(//li[@id="item-${3}"])[1]`).click(); 


    // cy.xpat("//button[text()='texto']");


    // cy.xpath("//h1[contains(text(),'Recover Account')]//following::p[1]");

    // cy.xpath("//button//span[text()='Send recovery link']");

    // cy.xpat("div//")
    
 
  });

  it("cypress way",() => {
    cy.get('.accordion').find('div').contains("Elements");
    cy.get(':nth-child(1) > .element-list').first(); 
    // or 
    cy.get('li').eq(3);

    
  
    // cy.get("button").should("contain", "texto"); //or  cy.get('button').contains("texto")

    // cy.get("h1").contains("Recover Account").next("p").first();

    // cy.get("button").children("span").contains("Send recovery link");
  })
});
