// Top-scope kommer att köra efter att <body> har laddats klart tack vare
// <script defer="true" src=...>

// Hämta data från pokemon web-api:n

// Här får vi kanske jobba lite extra för att
// få till en url som följer API-dokumentationens
// instruktioner
let url = new URL("https://pokeapi.co/api/v2/pokemon/pikachu");
fetch(url)
.then(function (response) {
    // Här har vi inner scope
    console.log("we have an answer from the server");
    return response.json();
})
.then(function (json) {
    console.log("we have pikachu objekt!");

    // Ändra i dom när pokemonen kommit
    let parent = document.querySelector("#scope");
    parent.insertAdjacentHTML('beforeend', `<h3>Pokemon ${pokemon.name}</h3>`);

    let nextUrlIndex = 0;
    //Ändra i dom när man klickar
    document.querySelector("#scope #pikachu-btn").onclick = function (params) {
    parent.insertAdjacentHTML('beforeend', `<img src=${urlArray[nextUrlIndex]}></img>`);
        nextUrlIndex += 1;
    };
});

console.log("main.js has finished running");