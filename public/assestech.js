"use strict";

function displayScenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function displayChoices(array) {
  const el = document.querySelector(".choices");
  el.innerHTML = `
  <p>Choices:</p>
  <ol>
    <li>${array[0]}</li>
    <li>${array[1]}</li>
    <li>${array[2]}</li>
    <li>${array[3]}</li>
  </ol>
  `;
}

fetch("./phie2zubepeumahl.json")
  .then((res) => res.json())
  .then((data) => {
    displayScenario(data.scenario);
    displayChoices(data.choices);
  });
