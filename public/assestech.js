"use strict";

// Add new question id to array.
const questions = ["j001", "kohd3aiyaizohchi", "lhie2zubepeumahl"];

answerListners();
setUpExam(questions);

let currentQIndex = 0;
let submission = {};
let examPaper = {};

function answerListners() {
  document.querySelector("#a1").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
    //
    // to remove
    alert("Sorry, incorrect.");
  });
  document.querySelector("#a2").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
    //
    // to remove
    alert("Sorry, incorrect.");
  });
  document.querySelector("#a3").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
    //
    // to remove
    alert("Sorry, incorrect.");
  });
  document.querySelector("#a4").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
    //
    // to remove
    alert("Yes, correct!");
  });
}

function setUpExam(qRefArr) {
  qRefArr.forEach((element) => {
    getQuestionFor(element);
  });
}

function getQuestionFor(questionId) {
  let url = `./${questionId}.json`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      examPaper[questionId] = {
        scenario: data.scenario,
        choices: data.choices,
        rubric: data.rubric,
      };
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleAnswering(q, a) {
  submission[q] = a;
  progressQuestion();
}

function progressQuestion() {
  currentQIndex += 1;
  if (currentQIndex >= questions.length) {
    alert("END OF EXAM");
    document.querySelector("main").innerHTML = "";
  } else {
    const qId = questions[currentQIndex];
    const qObj = examPaper[qId];
    renderQuestion(qObj);
  }
}

const emptyQuestionObject = {
  scenario: "",
  choices: ["", "", "", ""],
  rubric: "",
};
function renderQuestion(qObj = emptyQuestionObject) {
  if (validateQ(qObj) === true) {
    renderScenario(qObj.scenario);
    renderChoices(qObj.choices);
  }
  //
  //
  // else {warning}
  //
  //
}

function renderScenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function renderChoices(array) {
  const a1 = document.querySelector("#a1");
  a1.innerHTML = array[0];
  const a2 = document.querySelector("#a2");
  a2.innerHTML = array[1];
  const a3 = document.querySelector("#a3");
  a3.innerHTML = array[2];
  const a4 = document.querySelector("#a4");
  a4.innerHTML = array[3];
}

function validateQ(qObj) {
  if (
    qObj.scenario.length > 0 &&
    qObj.choices[0].length > 0 &&
    qObj.choices[1].length > 0 &&
    qObj.choices[2].length > 0 &&
    qObj.choices[3].length > 0 &&
    qObj.rubric.length > 0
  ) {
    return true;
  }
}

// END OF EXAM

//
//
// function warning() {
//   let instructions = document.querySelector(".instructions");
//   let warning = "Sorry we encountered a problem. Please try again later.";
//   let html = `<p class='warning'>${warning}</p>`;
//   instructions.innerHTML = html;
// }
