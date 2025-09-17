// Variavel Global
let tabuleiro;
let board;
let aviso;
let jogador;

// Iniciar o jogo
function iniciar() {
    tabuleiro = [];
    board = document.getElementById('board');
    aviso = document.getElementById('aviso');
    jogador = 1;

    // Inicializa o tabuleiro vazio
    for (let i = 0; i < 3; i++) {
        tabuleiro[i] = [];
        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j] = 0;
        }
    }

    console.table(tabuleiro);
    exibir();
    aviso.innerHTML = 'Vez do jogador 1';
}

// Exibe o tabuleiro
function exibir() {
    let tabela = '<table cellpadding="10" border="1">';

    for (let i = 0; i < 3; i++) {
        tabela += '<tr>';
        for (let j = 0; j < 3; j++) {
            let marcador;
            switch (tabuleiro[i][j]) {
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = ''; // vazio
            }
            tabela += '<td>' + marcador + '</td>';
        }
        tabela += '</tr>';
    }

    tabela += '</table>';
    board.innerHTML = tabela;
}

// Jogada do jogador
function jogar() {
    let linha = document.getElementById('linha').value - 1;
    let coluna = document.getElementById('coluna').value - 1;

    if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
        aviso.innerHTML = 'Posição inválida!';
        return;
    }

    if (tabuleiro[linha][coluna] !== 0) {
        aviso.innerHTML = 'Esse campo já foi marcado!';
        return;
    }

    // Marca o tabuleiro
    tabuleiro[linha][coluna] = jogador === 1 ? -1 : 1;

    console.table(tabuleiro);
    exibir();

    // Verifica vitória ou empate
    if (checar()) {
        return;
    }

    // Alterna jogador
    jogador = jogador === 1 ? 2 : 1;
    aviso.innerHTML = 'Vez do jogador ' + jogador;
}

// Verifica linhas, colunas, diagonais e empate
function checar() {
    let soma;

    // Linhas
    for (let i = 0; i < 3; i++) {
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
        if (soma === 3) { aviso.innerHTML = 'O Jogador 2 ganhou!'; return true; }
        if (soma === -3) { aviso.innerHTML = 'O Jogador 1 ganhou!'; return true; }
    }

    // Colunas
    for (let i = 0; i < 3; i++) {
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];
        if (soma === 3) { aviso.innerHTML = 'O Jogador 2 ganhou!'; return true; }
        if (soma === -3) { aviso.innerHTML = 'O Jogador 1 ganhou!'; return true; }
    }

    // Diagonal principal
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    if (soma === 3) { aviso.innerHTML = 'O Jogador 2 ganhou!'; return true; }
    if (soma === -3) { aviso.innerHTML = 'O Jogador 1 ganhou!'; return true; }

    // Diagonal secundária
    soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
    if (soma === 3) { aviso.innerHTML = 'O Jogador 2 ganhou!'; return true; }
    if (soma === -3) { aviso.innerHTML = 'O Jogador 1 ganhou!'; return true; }

    // Empate
    let cheio = tabuleiro.flat().every(c => c !== 0);
    if (cheio) {
        aviso.innerHTML = 'Empate!';
        return true;
    }

    return false;
}

// Inicia o jogo ao carregar a página
window.onload = iniciar;
