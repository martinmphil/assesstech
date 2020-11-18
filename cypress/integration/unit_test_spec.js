/// <reference types="cypress" />

import answerChoicesFrom from "../../public/assestech";

describe("answerChoicesFrom a single element array", () => {
  const html = answerChoicesFrom(["choice A"]);
  it("returns a string", () => {
    expect(html).to.be.a("string");
  });
  it("returns exact html", () => {
    let a = `<hr /><button class="answer-choice">choice A</button><hr />`;
    expect(html).to.eq(a);
  });
});

describe("answerChoicesFrom a four-element array", () => {
  let array = ["choice A", "choice B", "choice C", "choice D"];
  const html = answerChoicesFrom(array);
  it("returns a string", () => {
    expect(html).to.be.a("string");
  });
  it("renders four choices", () => {
    expect(html)
      .contains("choice A")
      .and.contains("choice B")
      .and.contains("choice C")
      .and.contains("choice D");
  });
});
