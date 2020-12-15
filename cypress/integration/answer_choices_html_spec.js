/// <reference types="cypress" />

describe("answer choices", () => {
  it("holds four choices with class answer-choice", () => {
    cy.visit("/")
      .get("#a1")
      .should("have.class", "answer-choice")
      .get("#a2")
      .should("have.class", "answer-choice")
      .get("#a3")
      .should("have.class", "answer-choice")
      .get("#a4")
      .should("have.class", "answer-choice");
  });
  it("changes scenario upon answering", () => {
    cy.visit("/");
    cy.get(".scenario")
      .invoke("text")
      .then((text1) => {
        cy.get("#a1").click();
        cy.get(".scenario")
          .invoke("text")
          .should((text2) => {
            expect(text1).not.to.eq(text2);
          });
      });
  });
});

describe("renderChoices with four-element array", () => {
  let array = ["choice A", "choice B", "choice C", "choice D"];
  it("renders choices text", () => {
    cy.visit("/")
      .invoke("renderChoices", array)
      .get("#a1")
      .contains("choice A")
      .should("have.class", "answer-choice")
      .get("#a2")
      .contains("choice B")
      .should("have.class", "answer-choice")
      .get("#a3")
      .contains("choice C")
      .should("have.class", "answer-choice")
      .get("#a4")
      .contains("choice D")
      .should("have.class", "answer-choice");
  });
});
