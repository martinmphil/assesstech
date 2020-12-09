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
});

// describe("answerChoicesFrom a single element array", () => {
//   it("returns exact html", () => {
//     let array = ["choice A"];
//     let x = `<hr /><button id="a1" class="answer-choice">choice A</button><hr />`;
//     cy.visit("/").invoke("answerChoicesFrom", array).should("eq", x);
//   });
// });

// describe("renderChoices with four-element array", () => {
//   let array = ["choice A", "choice B", "choice C", "choice D"];
//   it("renders text with id", () => {
//     cy.visit("/")
//       .invoke("renderChoices", array)
//       .get("#a1")
//       .get("#a2")
//       .get("#a3")
//       .get("#a4")
//       .get("article.question section.choices")
//       .as("choices")
//       .contains("choice A")
//       .should("have.class", "answer-choice")
//       .get("@choices")
//       .contains("choice B")
//       .should("have.class", "answer-choice")
//       .get("@choices")
//       .contains("choice C")
//       .should("have.class", "answer-choice")
//       .get("@choices")
//       .contains("choice D")
//       .should("have.class", "answer-choice");
//   });
// });
