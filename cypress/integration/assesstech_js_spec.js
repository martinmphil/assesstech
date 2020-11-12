/// <reference types="Cypress" />

describe("assesstech JavaScript", () => {
  it("replaces html placeholder paragraph with scenario text", () => {
    cy.visit("/");
    cy.get("section.scenario > p").should("have.id", "s");
    cy.get("section.scenario > p").should("not.have.id", "s");
  });
  // it("replaces html placeholder paragraph with answer choices text", () => {
  //   cy.visit("/");
  //   cy.get("section.scenario > p").should("have.id", "c");
  //   cy.get("section.scenario > p").should("not.have.id", "c");
  // });
});
