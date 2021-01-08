/// <reference types="Cypress" />

import * as ExamPaper from "../../public/ExamPaper.js";

describe("exam paper module", () => {
  it("has empty questions object", () => {
    expect(ExamPaper.questions).to.exist;
    expect(ExamPaper.questions).to.be.a("object");
    expect(ExamPaper.questions).to.be.empty;
  });
});
