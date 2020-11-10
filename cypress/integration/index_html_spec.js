/// <reference types="Cypress" />

describe("home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("has h1 tag", () => {
    cy.get("h1");
  });
  it("main element asks for answers to questions", () => {
    cy.get("main")
      .contains("answer", { matchCase: false })
      .contains("question", { matchCase: false });
  });
  it("loads scenario text", () => {
    cy.get(".scenario").contains("Which planet orbits furthest from the sun?");
  });
});
