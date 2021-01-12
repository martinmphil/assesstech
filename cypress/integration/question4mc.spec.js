/// <reference types="cypress" />

import * as q4mc from "../../public/question4mc.js";

describe("module for question with four multiple choices", () => {
  it("has render function", () => {
    expect(q4mc.render).to.be.a("function");
  });
});
