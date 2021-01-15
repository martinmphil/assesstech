function questionText(questionId) {
  let url = `./questions/${questionId}.json`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

export { questionText };
