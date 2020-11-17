/// <reference types="Cypress" />

describe("assesstech JavaScript", () => {
  it("replaces html placeholder paragraph with scenario text", () => {
    cy.visit("/");
    cy.get("section.scenario > p").should("have.id", "†");
    cy.get("section.scenario > p").should("not.have.id", "†");
    // para with id="†" from html file is replaced when js script loads.
  });
  it("replaces html placeholder paragraph with answer choices text", () => {
    cy.visit("/");
    cy.get("section.choices > p").should("have.id", "‡");
    cy.get("section.choices > p").should("not.have.id", "‡");
    // para with id="‡" from html file is replaced when js script loads.
  });
});
