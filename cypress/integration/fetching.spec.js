/// <reference types="cypress" />
import * as fetching from "../../public/fetching.js";

describe("question fetching module", () => {
  it("exports a function", () => {
    expect(fetching.questionText).to.be.a("function");
  });
});
