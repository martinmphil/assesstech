/// <reference types="cypress" />

import * as Render from "../../public/Render4mc.js";

describe("module rendering question with four multiple choices", () => {
  it("has render scenario function", () => {
    expect(Render.scenario).to.be.a("function");
  });
  it("has render choices", () => {
    expect(Render.choices).to.be.a("function");
  });
});
