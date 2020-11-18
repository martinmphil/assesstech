"use strict";

fetch("./phie2zubepeumahl.json")
  .then((res) => res.json())
  .then((data) => {
    renderScenario(data.scenario);
    renderChoices(data.choices);
  });

function renderScenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function renderChoices(array) {
  const el = document.querySelector(".choices");
  const html = answerChoicesFrom(array);
  el.innerHTML = html;
}

function answerChoicesFrom(array) {
  let html = "<hr />";
  html += array
    .map((x) => {
      return `<button class="answer-choice">${x}</button><hr />`;
    })
    .join("");
  return html;
}

// for unit testing purposes only
export default answerChoicesFrom;
