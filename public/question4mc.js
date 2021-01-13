function render(question) {
  scenarioRender(question.scenario);
  choicesRender(question.choices);
}

function scenarioRender(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function choicesRender(array) {
  const a1 = document.querySelector("#a1");
  a1.innerHTML = array[0];
  const a2 = document.querySelector("#a2");
  a2.innerHTML = array[1];
  const a3 = document.querySelector("#a3");
  a3.innerHTML = array[2];
  const a4 = document.querySelector("#a4");
  a4.innerHTML = array[3];
}

function validate(qObj) {
  if (
    qObj &&
    qObj.scenario &&
    qObj.choices &&
    qObj.rubric &&
    qObj.scenario.length > 0 &&
    qObj.choices[0].length > 0 &&
    qObj.choices[1].length > 0 &&
    qObj.choices[2].length > 0 &&
    qObj.choices[3].length > 0 &&
    qObj.rubric.length > 0
  ) {
    return true;
  } else {
    return false;
  }
}

export { render, validate };
