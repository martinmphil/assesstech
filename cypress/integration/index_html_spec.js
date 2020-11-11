/// <reference types="Cypress" />

describe("home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("has h1 tag", () => {
    cy.get("h1");
  });
  it("has instructions", () => {
    cy.get(".instructions")
      .contains("answer", { matchCase: false })
      .contains("question", { matchCase: false });
  });
  it("has question article", () => {
    cy.get("article.question");
  });
  it("has scenario section", () => {
    cy.get("section.scenario");
  });
  it("has answer-choices section", () => {
    cy.get("section.choices");
  });
  it("loads scenario text", () => {
    cy.get(".scenario").contains("Which planet orbits furthest from the sun?");
  });
});
