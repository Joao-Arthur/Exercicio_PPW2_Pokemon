const TEMPO_EXIBICAO = 3000;
let intervalID = 0;
let iterator;

function onShowCaseClick() {
    if (!pokedex.size) return alert('Nenhum pokémon cadastrado!');
    const nomePokemon = document.getElementById('nomePokemon');
    const imagemPokemon = document.getElementById('imagemPokemon');

    iterator = pokedex.values();

    if (intervalID) {
        window.clearInterval(intervalID);
        intervalID = 0;
        nomePokemon.classList.add('hidden');
        imagemPokemon.classList.add('hidden');
    } else {
        nomePokemon.classList.remove('hidden');
        imagemPokemon.classList.remove('hidden');
        intervalID = window.setInterval(() => {
            const pokemon = getProximoPokemon();
            nomePokemon.textContent = pokemon.nome;
            imagemPokemon.url = pokemon.url;
        }, TEMPO_EXIBICAO);
    }
}

function getProximoPokemon() {
    let proximo = iterator.next();
    if (proximo.done) {
        iterator = pokedex.values();
        proximo = iterator.next();
    }
    return proximo.value;
}

document.getElementById('showCase').addEventListener('click', onShowCaseClick);
