/// <reference types="Cypress" />

describe("html", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("has h1 tag", () => {
    cy.get("h1");
  });
  it("has instructions", () => {
    cy.get("main .instructions")
      .contains("answer", { matchCase: false })
      .contains("question", { matchCase: false });
  });
  it("has question article in main el", () => {
    cy.get("main article.question");
  });
  it("has scenario section in question", () => {
    cy.get("article.question section.scenario");
  });
  it("has answer-choices section in question", () => {
    cy.get("article.question section.choices");
    cy.get(".choices > button").eq(0).should("have.id", "a1");
    cy.get(".choices > button").eq(1).should("have.id", "a2");
    cy.get(".choices > button").eq(2).should("have.id", "a3");
    cy.get(".choices > button").eq(3).should("have.id", "a4");
  });
});
