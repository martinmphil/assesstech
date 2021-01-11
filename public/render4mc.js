function scenario(string) {
  const el = document.querySelector(".scenario");
  el.innerHTML = `<p>${string}</p>`;
}

function choices(array) {
  const a1 = document.querySelector("#a1");
  a1.innerHTML = array[0];
  const a2 = document.querySelector("#a2");
  a2.innerHTML = array[1];
  const a3 = document.querySelector("#a3");
  a3.innerHTML = array[2];
  const a4 = document.querySelector("#a4");
  a4.innerHTML = array[3];
}

export { scenario, choices };
