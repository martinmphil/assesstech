"use strict";

function displayScenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = string;
}

fetch("./phie2zubepeumahl.json")
  .then((res) => res.json())
  .then((data) => {
    displayScenario(data.scenario);
  });
