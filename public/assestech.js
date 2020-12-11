"use strict";

exam();

function exam() {
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
    //
    // to remove
    console.log(submission);
  }

  // END OF EXAM
}

//
//
//
//
//
//
//
//
//
//
//

//
//
//
// main();

// function main() {
//   let currentQId = "q001";
//   getQuestionFor(currentQId);
// }

// function getQuestionFor(questionID) {
//   let url = `./${questionID}.json`;
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     })
// .then((data) => {
//   renderScenario(data.scenario);
//   renderChoices(data.choices);
// })
// .catch((error) => {
//   console.error(error);
// });
// }

// function warning() {
//   let instructions = document.querySelector(".instructions");
//   let warning = "Sorry we encountered a problem. Please try again later.";
//   let html = `<p class='warning'>${warning}</p>`;
//   instructions.innerHTML = html;
// }

// function renderScenario(string) {
//   const el = document.querySelector(".scenario");
//   el.innerHTML = `<p>${string}</p>`;
// }

// function renderChoices(array) {
//   const section = document.querySelector("section.choices");
//   const html = answerChoicesFrom(array);
//   section.innerHTML = html;
//   const nodeList = section.querySelectorAll("button");
//   hearAnswersFrom(nodeList);
// }

// function hearAnswersFrom(nodeList) {
//   nodeList.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       localStorage.setItem("question_id", event.target.id);
//       if (event.target.id === "a2") {
// alert('Yes, correct!');
//       } else {
//         alert("Sorry, incorrect.");
//       }
//     });
//   });
// }

// pure functions

// function answerChoicesFrom(array) {
//   let html = "<hr />";
//   html += array
//     .map((x, i) => {
//       let id = "a" + (i + 1);
//       return `<button id="${id}" class="answer-choice">${x}</button><hr />`;
//     })
//     .join("");
//   return html;
// }
