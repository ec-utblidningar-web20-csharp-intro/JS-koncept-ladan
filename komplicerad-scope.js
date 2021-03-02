// Top-scope kommer att köra efter att <body> har laddats klart tack vare
// <script defer="true" src=...>

// Här är bara lite kod där jag testar att
// kalla på addPokeName och addPokeImage
let testPokemon = JSON.parse(`
{
    "name": "ditto",
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        "front_shiny_female": null
    }
}
`);

// Hämta data från pokemon web-api:n
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
    addPokeName(json);

    let nextUrlIndex = 0;
    //Ändra i dom när man klickar
    document.querySelector("#scope #pikachu-btn").onclick = function (params) {
        addPokeImage(json, nextUrlIndex);
        nextUrlIndex += 1;
    };
});

addPokeName(testPokemon);
addPokeImage(testPokemon, 0);
addPokeImage(testPokemon, 1);
addPokeImage(testPokemon, 2);

function addPokeName(pokemon) {
    let parent = document.querySelector("#scope");
    parent.insertAdjacentHTML('beforeend', `<h3>Pokemon ${pokemon.name}</h3>`);
}
function addPokeImage(pokemon, index){
    let urlArray = Object.values(pokemon.sprites);

    let parent = document.querySelector("#scope");
    parent.insertAdjacentHTML('beforeend', `<img src=${urlArray[index]}></img>`);
}

console.log("main.js has finished running");