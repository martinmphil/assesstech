import * as q4mc from "./question4mc.js";
import * as examPaper from "./exam-paper.js";
import * as fetching from "./fetching.js";

// Add new question Id's to this array.
const questions = ["jepheil9ieb2ozie", "kohd3aiyaizohchi", "lhie2zubepeumahl"];

let currentQIndex = 0;

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
      examPaper.questions[qId] = qObj;
      if (index === currentQIndex) {
        document.querySelector(".question").style.visibility = "visible";
        q4mc.render(qObj);
      }
    });
  });
}

// function begin(question) {
//   if (validateQ(question)) {
//     render.scenario(question.scenario);
//     render.choices(question.choices);
//   } else {
//     warning();
//   }
// }

// function validateQ(qObj) {
//   if (
//     qObj.scenario.length > 0 &&
//     qObj.choices[0].length > 0 &&
//     qObj.choices[1].length > 0 &&
//     qObj.choices[2].length > 0 &&
//     qObj.choices[3].length > 0 &&
//     qObj.rubric.length > 0
//   ) {
//     return true;
//   } else {
//     warning();
//     // move inside fetch????
//   }
// }

// function warning() {
//   let instructions = document.querySelector(".instructions");
//   let warning = "Sorry we encountered a problem. Please try again later.";
//   let html = `<p class='warning'>${warning}</p>`;
//   instructions.innerHTML = html;
// }
