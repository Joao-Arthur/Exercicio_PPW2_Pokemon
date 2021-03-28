function submitFormPokemon(e) {
    e.preventDefault();
    try {
        adicionaPokemon();
    } catch (e) {
        alert(e.message);
    }
}

function adicionaPokemon() {
    const numero = Number(getValorCampo('numero'));
    const nome = getValorCampo('nome');
    const descricao = getValorCampo('descricao');
    const urlImagem = getValorCampo('urlImagem');
    const tipo = getValorSelect('tipo');

    const pokemon = new PokemonBuilder()
        .setNumero(numero)
        .setNome(nome)
        .setDescricao(descricao)
        .setURLImagem(urlImagem)
        .setTipo(tipo)
        .build();

    adicionar(pokemon);
    limpaCampos();
}

function getValorCampo(idCampo) {
    const valor = document.getElementById(idCampo).value;
    if (!valor) throw new Error(`O campo ${idCampo} não pode ficar vazio`);
    return valor;
}

function getValorSelect(idCampo) {
    const selecionados = document.getElementById(idCampo).selectedOptions;
    if (!selecionados)
        throw new Error(`O campo ${idCampo} não pode ficar vazio`);
    if (!selecionados.length)
        throw new Error(`O campo ${idCampo} não pode ficar vazio`);
    return Array.from(selecionados).map(({ value }) => value);
}

function limpaCampos() {
    limpaCampo('numero');
    limpaCampo('nome');
    limpaCampo('descricao');
    limpaCampo('urlImagem');
    limpaCampo('tipo');
}

function limpaCampo(idCampo) {
    document.getElementById(idCampo).value = '';
}

document
    .getElementById('formPokemon')
    .addEventListener('submit', submitFormPokemon);
