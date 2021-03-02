// Top-scope kommer att köra efter att <body> har laddats klart tack vare
// <script defer="true" src=...>

document.querySelector("#async #pikachu-btn").onclick = async function (event) {
    let url = new URL("https://pokeapi.co/api/v2/pokemon/pikachu");
    
    // Hämta data från pokemon web-api:n 
    let response = await fetch(url);
    console.log("we have an answer from the server");
    let pokemon = await response.json();
    console.log("we have pikachu objekt!");

    // Ändra i dom när pokemonen kommit
    let parent = document.querySelector("#async");
    parent.insertAdjacentHTML('beforeend', `<h3>Pokemon ${pokemon.name}</h3>`);
    
    let urlArray = Object.values(pokemon.sprites);
    parent.insertAdjacentHTML('beforeend', `<img src=${pokemon.sprites.front_default}></img>`);
};

console.log("main.js has finished running");