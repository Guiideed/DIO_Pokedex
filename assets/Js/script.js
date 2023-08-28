const offset =0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToList(pokemon){
    return `
    <li class="pokemon">
                <span class="numero">#001</span>
                <span class="nome">${pokemon.name}</span>
                
                <div class="caracteristicas">
                    <ol class="tipos">
                        <li class="tipo">Grama</li>
                        <li class="tipo">Venenoso</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
            </li>
            `

}
const pokemonList = document.getElementById('pokemonList');
//interface de uma promisse
fetch(url)
    .then((response)=>response.json())
    .then((jsonBody)=>jsonBody.results)
    .then((pokemons) =>{
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToList(pokemon)
            
        }
}).catch((error)=>console.error(error));

