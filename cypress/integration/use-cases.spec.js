/// <reference types="cypress" />

describe("question with four multiple choices answers", () => {
  it("presents question", () => {
    cy.visit("/");
    cy.get(".scenario").invoke("text").should("have.length.of.at.least", 2);
  });

  it("offers answer choices", () => {
    cy.visit("/");
    cy.get("#a1").invoke("text").should("have.length.of.at.least", 1);
    cy.get("#a2").invoke("text").should("have.length.of.at.least", 1);
    cy.get("#a3").invoke("text").should("have.length.of.at.least", 1);
    cy.get("#a4").invoke("text").should("have.length.of.at.least", 1);
  });

  it("presents next question after answering", () => {
    cy.visit("/");
    cy.get(".scenario")
      .invoke("text")
      .should("have.length.of.at.least", 2)
      .then((text1) => {
        cy.get("#a1").click();
        cy.get(".scenario")
          .invoke("text")
          .should((text2) => {
            expect(text1).not.to.eq(text2);
          });
      });
  });

  it("grades exam", () => {
    cy.visit("/");
    cy.get("#a1").click();
    cy.get("#a2").click();
    cy.get("#a3").click();
    cy.get("article.question").should("not.exist");
    cy.get("main").contains("end of exam", { matchCase: false });
  });
});
