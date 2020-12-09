"use strict";

main();

function main() {
  // Add new questions to following question array
  const questions = ["j001", "kohd3aiyaizohchi", "phie2zubepeumahl"];
  answerListners();
  let currentQIndex = 0;
  let rubric = ["a4"];
  let submission = ["a"];
  let examPaper = {};

  questions.forEach((element, index) => {
    if (index > 0) {
      examPaper[element] = { scenario: "", choices: ["", "", "", ""] };
    }
  });

  //
  //
  // TO RMEOVE
  //
  //
  console.log(questions);
  console.log(rubric);
  console.log(submission);
  console.log(examPaper);
  console.log(currentQIndex);
}

function answerListners() {
  // Temporary event handler while coding exam question fetching
  //
  // document.querySelector("#a1").addEventListener("click", (event) => {
  //   alert(event.target.id);
  // });
  //
  document.querySelector("#a1").addEventListener("click", () => {
    alert("Sorry, incorrect.");
  });
  document.querySelector("#a2").addEventListener("click", () => {
    alert("Sorry, incorrect.");
  });
  document.querySelector("#a3").addEventListener("click", () => {
    alert("Sorry, incorrect.");
  });
  document.querySelector("#a4").addEventListener("click", () => {
    alert("Yes, correct!");
  });
}

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
//     .then((data) => {
//       renderScenario(data.scenario);
//       renderChoices(data.choices);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
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
