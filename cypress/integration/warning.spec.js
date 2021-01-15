/// <reference types="cypress" />
import * as warning from "../../public/warning.js";

describe("warning module", () => {
  it("exports a function", () => {
    expect(warning.show).to.be.a("function");
  });
});
