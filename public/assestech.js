import * as q4mc from "./question4mc.js";
import * as fetching from "./fetching.js";
import * as warning from "./warning.js";

// Add new question Id's to this array.
const questions = ["jepheil9ieb2ozie", "kohd3aiyaizohchi", "lhie2zubepeumahl"];

// app state
let currentQIndex = 0;

// records
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
    handleAnswering(event.target.id);
  });
  document.querySelector("#a2").addEventListener("click", (event) => {
    handleAnswering(event.target.id);
  });
  document.querySelector("#a3").addEventListener("click", (event) => {
    handleAnswering(event.target.id);
  });
  document.querySelector("#a4").addEventListener("click", (event) => {
    handleAnswering(event.target.id);
  });
}

function handleAnswering(a) {
  let qId = questions[currentQIndex];
  let rubric = examPaper[qId].rubric;
  let mark = 0;
  if (a === rubric) {
    mark = 1;
  }
  submission[qId] = { a, mark };
  progressQuestion();
}

function progressQuestion() {
  currentQIndex += 1;
  const qId = questions[currentQIndex];
  const qObj = examPaper[qId];
  if (currentQIndex >= questions.length) {
    let outOf = questions.length;
    let finalMark = tally();
    let html = `<p>You achieved ${finalMark} out of ${outOf}.</p><p>END OF EXAM</p>`;
    document.querySelector("main").innerHTML = html;
  } else if (q4mc.validate(qObj) === true) {
    q4mc.render(qObj);
  } else warning.show();
}

function tally() {
  let result = questions
    .map((x) => {
      return submission[x].mark;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return result;
}
