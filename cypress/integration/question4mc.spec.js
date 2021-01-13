/// <reference types="cypress" />

import * as q4mc from "../../public/question4mc.js";

const testQObj = {
  question_structure: "four_multiple_choices",
  scenario: "dummy",
  choices: ["A", "B", "C", "D"],
  rubric: "a4",
};

describe("module for question with four multiple choices", () => {
  it("has render function", () => {
    expect(q4mc.render).to.be.a("function");
  });
  it("validates question data structure", () => {
    expect(q4mc.validate).to.be.a("function");
    expect(q4mc.validate({})).to.be.false;
    expect(q4mc.validate(testQObj)).to.be.true;
  });
});
