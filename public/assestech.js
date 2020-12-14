"use strict";

// Add new question id to array.
const questions = ["j001", "kohd3aiyaizohchi", "lhie2zubepeumahl"];
answerListners();
let currentQIndex = 0;
let submission = {};
let examPaper = {};
examPaper[questions[0]] = {
  scenario: "q1",
  choices: ["a", "b", "c", "d"],
  rubric: "a4",
};

questions.forEach((element, index) => {
  if (index > 0) {
    examPaper[element] = {
      scenario: "",
      choices: ["", "", "", ""],
      rubric: "",
    };
    getQuestionFor(element);
  }
});

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
  //
  // to remove
  console.log(submission);
}

function progressQuestion() {
  currentQIndex += 1;
  if (currentQIndex >= questions.length) {
    alert("END OF EXAM");
  } else {
    renderQuestion(currentQIndex);
  }
}

function renderQuestion(qIndex) {
  const qId = questions[qIndex];
  renderScenario(examPaper[qId].scenario);
  renderChoices(examPaper[qId].choices);
}

function renderScenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function renderChoices(array) {
  // #a1 innerHTML =
  const a1 = document.querySelector("#a1");
  a1.innerHTML = array[0];
  const a2 = document.querySelector("#a2");
  a2.innerHTML = array[1];
  const a3 = document.querySelector("#a3");
  a3.innerHTML = array[2];
  const a4 = document.querySelector("#a4");
  a4.innerHTML = array[3];
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
