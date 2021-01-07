/// <reference types="cypress" />

describe("question with four multiple choices answers", () => {
  it("presents question", () => {
    cy.visit("/");
  });

  it("offers answer choices", () => {
    cy.visit("/");
  });

  it("records responses", () => {
    cy.visit("/");
  });

  it("marks questions", () => {
    cy.visit("/");
  });

  it("presents next question after answering", () => {
    cy.visit("/");
    // cy.get(".scenario")
    //   .invoke("text")
    //   .then((text1) => {
    //     cy.get("#a1").click();
    //     cy.get(".scenario")
    //       .invoke("text")
    //       .should((text2) => {
    //         expect(text1).not.to.eq(text2);
    //       });
    //   });
  });

  it("grades exam", () => {
    cy.visit("/");
  });
});
