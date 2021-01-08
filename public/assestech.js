import * as Render from "./Render4mc.js";
import * as ExamPaper from "./ExamPaper.js";
// import * as Fetching from "../../public/Fetching.js";

// Add new question ID's to following array.
const questions = ["jepheil9ieb2ozie", "kohd3aiyaizohchi", "lhie2zubepeumahl"];

setUpExam(questions);

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
        warning();
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      ExamPaper.questions[questionId] = {
        scenario: data.scenario,
        choices: data.choices,
        rubric: data.rubric,
      };
      if (questions.indexOf(questionId) === 0) {
        begin(ExamPaper.questions[questionId]);
        document.querySelector(".question").style.visibility = "visible";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function begin(question) {
  if (validateQ(question)) {
    Render.scenario(question.scenario);
    Render.choices(question.choices);
  } else {
    warning();
  }
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
  } else {
    warning();
  }
}

function warning() {
  let instructions = document.querySelector(".instructions");
  let warning = "Sorry we encountered a problem. Please try again later.";
  let html = `<p class='warning'>${warning}</p>`;
  instructions.innerHTML = html;
}

//
//
//
// TO REMOVE
document.querySelector("#a1").addEventListener("click", () => {
  begin(ExamPaper.questions["kohd3aiyaizohchi"]);
});
