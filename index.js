var TelaInicio // Variável usada para fazer mudanças na tela de início
var TelaJogo // Variável usada para fazer mudanças na tela de jogo
var TelaResultado // Variável usada para fazer mudanças na tela de resultado
var QuemComecaTexto // Variável para fazer mudanças no texto que mostra quem começa jogando
var Posicao // Variável que guarda as posições jogadas
var Casas // Variável que guarda as divs das casas do jogo
var QuemJoga // Variável que define de quem é a vez da jogada
var QuemComeca // Variável que define quem começa o jogo
var jogando // Variável que diz se o jogo está rolando ou não
var mensagem // Variável que recebe a mensagem referente ao resultado do jogo
var finalizado // Variável que vai dizer se o jogo já possui um resultado

function StartGame() {
    
    Posicao = ["","","","","","","","",""]
    Casas = document.querySelectorAll(".row div") 

    for (let i = 0; i < Casas.length; i++) {
        Casas[i].innerHTML = ""
        Casas[i].style.cursor = "pointer"
    }

    jogando = true 
    finalizado = false
    QuemComeca = Math.round(Math.random()) 
    QuemJoga = QuemComeca 
    
    TelaInicio = document.getElementById("start-screen")
    TelaResultado = document.getElementById("result-screen") 
    TelaJogo = document.getElementById("game") 
    QuemComecaTexto = document.getElementById("QuemComeca") 

    TelaInicio.style.opacity = "0"
    QuemComecaTexto.style.opacity = "1"

    setTimeout(() => {
        TelaInicio.style.display = "none"
        TelaResultado.style.display = "none"
        TelaJogo.style.display = "block"
        setTimeout(() => {
            TelaJogo.style.opacity = "1"
        }, 10)
    }, 1000)


    if (QuemComeca == 1) {

        QuemComecaTexto.innerHTML = "CPU Começa"
        setTimeout(() => {
            CPUJoga()
        }, 2000)
        setTimeout(() => {
            QuemComecaTexto.style.opacity = "0"
        }, 3000)

    } else if (QuemComeca == 0) {
        QuemComecaTexto.innerHTML = "Você Começa"
        setTimeout(() => {
            QuemComecaTexto.style.opacity = "0"
        }, 3000)
    }

}

function jogar(Position) {
    if (jogando && QuemJoga == 0) {
        if (Posicao[Position] == "") {
            Posicao[Position] = "X"

            let imgX = document.createElement("img")
            let stylesImg = document.createAttribute("style")
            stylesImg.value = "width: 80px; height: 80px"
            imgX.setAttributeNode(stylesImg)
            imgX.src = "imgs/X.png"

            Casas[Position].appendChild(imgX)
            Casas[Position].style.cursor = "default"

            verifica()
            QuemJoga = 1
            CPUJoga()
        } else {
            alert("Jogada indisponível")
        }
    }
}

function CPUJoga() {
    if (jogando && QuemJoga == 1) {
        let JogadaCPU = Math.round(Math.random() * 9)

        let imgO = document.createElement("img")
        let stylesImg = document.createAttribute("style")

        stylesImg.value = "width: 80px; height: 80px"
        imgO.setAttributeNode(stylesImg)
        imgO.src = "imgs/O.png"

        if (Posicao[JogadaCPU] == "") {
            Posicao[JogadaCPU] = "O"
            Casas[JogadaCPU].appendChild(imgO)
            Casas[JogadaCPU].style.cursor = "default"
            verifica()
            QuemJoga = 0
        } else {
            CPUJoga()
        }
    }
}

function verifica() {

    CasasPreenchidas = 0

    for (let i = 0; i < Posicao.length; i++) {
        if (Posicao[i] != "") {
            CasasPreenchidas++
        }
    }

    // Verifica vitória do jogador

    //Linhas
    if (Posicao[0] == "X" && Posicao[1] == "X" && Posicao[2] == "X") {
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true
    } else if (Posicao[3] == "X" && Posicao[4] == "X" && Posicao[5] == "X") {
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true
    } else if (Posicao[6] == "X" && Posicao[7] == "X" && Posicao[8] == "X") {
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true

    // Colunas
    } else if (Posicao[0] == "X" && Posicao[3] == "X" && Posicao[6] == "X") { 
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true
    }else if (Posicao[1] == "X" && Posicao[4] == "X" && Posicao[7] == "X") {
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true
    }else if (Posicao[2] == "X" && Posicao[5] == "X" && Posicao[8] == "X") {
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true

    // Diagonais
    }else if (Posicao[0] == "X" && Posicao[4] == "X" && Posicao[8] == "X") { 
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true
    }else if (Posicao[6] == "X" && Posicao[4] == "X" && Posicao[2] == "X") {
        jogando = false
        mensagem = "Você foi o vencedor"
        finalizado = true
    }

    // Verifica vitória da CPU

    //Linhas
    else if (Posicao[0] == "O" && Posicao[1] == "O" && Posicao[2] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    else if (Posicao[3] == "O" && Posicao[4] == "O" && Posicao[5] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    else if (Posicao[6] == "O" && Posicao[7] == "O" && Posicao[8] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    // Colunas
    else if (Posicao[0] == "O" && Posicao[3] == "O" && Posicao[6] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    else if (Posicao[1] == "O" && Posicao[4] == "O" && Posicao[7] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    else if (Posicao[2] == "O" && Posicao[5] == "O" && Posicao[8] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }

    // Diagonais
    else if (Posicao[0] == "O" && Posicao[4] == "O" && Posicao[8] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    else if (Posicao[6] == "O" && Posicao[4] == "O" && Posicao[2] == "O") {
        jogando = false
        mensagem = "O vencedor foi a CPU"
        finalizado = true
    }
    
    // Verifica se houve velha no jogo

    else if (CasasPreenchidas >= 9) {
        jogando = false
        mensagem = "O Jogo deu velha"
        finalizado = true
    }

    VerificaVencedor()
}


function VerificaVencedor() {
    if (finalizado) {
        ExibirResultado()
    }
}

function ExibirResultado() {

    let TelaResultado = document.getElementById("result-screen")
    let TextoResultado = document.getElementById("TextoResultado")
    let TelaJogo = document.getElementById("game")

    TelaJogo.style.opacity = "0"
    setTimeout(() => {
        TelaResultado.style.display = "block"
        TelaJogo.style.display = "none"
        TextoResultado.innerHTML = mensagem
        setInterval(() => {
            TelaResultado.style.opacity = "1"
        }, 10)
    }, 1000)

}

document.getElementById("reiniciaJogo").addEventListener("click", StartGame)
document.getElementById("IniciaJogo").addEventListener('click', StartGame);