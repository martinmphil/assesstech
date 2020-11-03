/// <reference types="Cypress" />

describe("home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});
