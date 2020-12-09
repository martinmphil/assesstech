/// <reference types="Cypress" />

// describe("assesstech JavaScript", () => {
//   it("replaces html placeholder paragraph with scenario text", () => {
//     cy.visit("/");
//     cy.get("section.scenario > p").should("have.id", "†");
//     cy.get("section.scenario > p").should("not.have.id", "†");
//   });
//   it("replaces html placeholder paragraph with answer choices text", () => {
//     cy.visit("/");
//     cy.get("section.choices > #‡").should("exist");
//     cy.get("section.choices > #‡").should("not.exist");
//   });
//   it("stores answer locally", () => {
//     cy.visit("/");
//     cy.clearLocalStorage().should((ls) => {
//       expect(ls.getItem("question_id")).to.be.null;
//     });
//     cy.get("#a1")
//       .click()
//       .should(() => {
//         expect(localStorage.getItem("question_id")).to.eq("a1");
//       });
//   });
// it("can warn users with class .warning", () => {
//   cy.visit("/")
//     .invoke("warning", "Problem!")
//     .get(".warning")
//     .contains("Please try again later");
// });
// });
