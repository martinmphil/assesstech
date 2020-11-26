"use strict";

main();

function main() {
  let currentQId = "phie2zubepeumahl";
  getQuestionFor(currentQId);
}

function getQuestionFor(questionID) {
  let url = `./${questionID}.json`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderScenario(data.scenario);
      renderChoices(data.choices);
    });
}

function renderScenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function renderChoices(array) {
  const section = document.querySelector("section.choices");
  const html = answerChoicesFrom(array);
  section.innerHTML = html;
  const nodeList = section.querySelectorAll("button");
  hearAnswersFrom(nodeList);
}

function hearAnswersFrom(nodeList) {
  nodeList.forEach((element) => {
    element.addEventListener("click", (event) => {
      localStorage.setItem("question_id", event.target.id);
    });
  });
}

// pure functions

function answerChoicesFrom(array) {
  let html = "<hr />";
  html += array
    .map((x, i) => {
      let id = "a" + (i + 1);
      return `<button id="${id}" class="answer-choice">${x}</button><hr />`;
    })
    .join("");
  return html;
}
