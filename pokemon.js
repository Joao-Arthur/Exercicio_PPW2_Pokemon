class PokemonBuilder {
    numero;
    nome;
    tipo;
    descricao;
    urlImagem;

    setNumero(numero) {
        this.numero = numero;
        return this;
    }

    setNome(nome) {
        this.nome = nome;
        return this;
    }

    setTipo(tipo) {
        this.tipo = tipo;
        return this;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
        return this;
    }

    setURLImagem(urlImagem) {
        this.urlImagem = urlImagem;
    }

    validaSeDadosInformados() {
        if (!this.numero)
            throw new Error('necessário informar número do Pokemon!');
        if (!this.nome) throw new Error('necessário informar nome do Pokemon!');
        if (!this.tipo) throw new Error('necessário informar tipo do Pokemon!');
        if (!this.descricao)
            throw new Error('necessário informar descrição do Pokemon!');
        if (!this.urlImagem)
            throw new Error('necessário informar a url da imagem do Pokemon!');
    }

    validaTipoDados() {
        if (typeof this.numero !== 'number')
            throw new Error('necessário informar número válido do Pokemon!');
        if (!Array.isArray(this.tipo))
            throw new Error('necessário informar tipo válido do Pokemon!');
    }

    validaSeDadosValidos() {
        if (
            this.numero < PrimeiraGeracao.PRIMEIRO ||
            this.numero > PrimeiraGeracao.ULTIMO
        )
            throw new Error(
                'Apenas pokémons da primeira geração podem ser informados!'
            );
        this.tipo.forEach(tipo => {
            if (!Tipo[tipo])
                throw new Error(
                    'Apenas os tipos definidos podem ser informados!'
                );
        });
    }

    validaDados() {
        this.validaSeDadosInformados();
        this.validaTipoDados();
        this.validaSeDadosValidos();
    }

    build() {
        this.validaDados();

        return {
            numero: this.numero,
            nome: this.nome,
            tipo: this.tipo,
            descricao: this.descricao,
            urlImagem: this.urlImagem
        };
    }
}
