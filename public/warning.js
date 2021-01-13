function show() {
  document.querySelector(".question").innerHTML = "";

  let instructions = document.querySelector(".instructions");
  let warning = "Sorry we encountered a problem. Please try again later.";
  let html = `<p class='warning'>${warning}</p>`;
  instructions.innerHTML = html;
}

export { show };
