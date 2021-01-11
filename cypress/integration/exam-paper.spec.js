/// <reference types="Cypress" />

import * as examPaper from "../../public/exam-paper.js";

describe("exam paper module", () => {
  it("has empty questions object", () => {
    expect(examPaper.questions).to.exist;
    expect(examPaper.questions).to.be.a("object");
    expect(examPaper.questions).to.be.empty;
  });
});
