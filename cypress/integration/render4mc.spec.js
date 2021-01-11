/// <reference types="cypress" />

import * as render from "../../public/render4mc.js";

describe("module rendering question with four multiple choices", () => {
  it("has render scenario function", () => {
    expect(render.scenario).to.be.a("function");
  });
  it("has render choices", () => {
    expect(render.choices).to.be.a("function");
  });
});
