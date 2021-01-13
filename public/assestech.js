import * as q4mc from "./question4mc.js";
import * as fetching from "./fetching.js";
import * as warning from "./warning.js";

// Add new question Id's to this array.
const questions = ["jepheil9ieb2ozie", "kohd3aiyaizohchi", "lhie2zubepeumahl"];

let currentQIndex = 0;
let submission = {};
let examPaper = {};

setUpExam(questions);

function setUpExam(qIdArr) {
  qIdArr.forEach((qId, index) => {
    fetching.questionText(qId).then((qData) => {
      // Test for valid object
      let qObj = {
        scenario: qData.scenario,
        choices: qData.choices,
        rubric: qData.rubric,
      };
      examPaper[qId] = qObj;
      if (index === currentQIndex) {
        document.querySelector(".question").style.visibility = "visible";
        q4mc.render(qObj);
      }
    });
  });
}

//
answerListners();

function answerListners() {
  document.querySelector("#a1").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
  });
  document.querySelector("#a2").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
  });
  document.querySelector("#a3").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
  });
  document.querySelector("#a4").addEventListener("click", (event) => {
    handleAnswering(questions[currentQIndex], event.target.id);
  });
}

function handleAnswering(q, a) {
  submission[q] = a;
  progressQuestion();
}

function progressQuestion() {
  currentQIndex += 1;
  const qId = questions[currentQIndex];
  const qObj = examPaper[qId];
  if (currentQIndex >= questions.length) {
    alert("END OF EXAM");
    document.querySelector("main").innerHTML = "";
  } else if (q4mc.validate(qObj) === true) {
    q4mc.render(qObj);
  } else warning.show();
}
