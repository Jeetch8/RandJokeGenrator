const jokeBTn = document.getElementById("jokeBtn");
jokeBTn.addEventListener("click", () => fetchNewJoke());

function fetchNewJoke() {
  fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((resp) => resp.json())
    .then((data) => (document.getElementById("joke").innerText = data.value));
}
