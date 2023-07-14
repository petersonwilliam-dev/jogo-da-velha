var TelaInicio // Variável usada para manipular a tela de início
var TelaJogo // Variável usada para manipular a tela de jogo
var TelaResultado // Variável usada para manipular a tela de resultado
var TelaDificuldade // Variável usada para manipular a tela de escolha de dificuldade
var QuemComecaTexto // Variável para fazer mudanças no texto que mostra quem começa jogando
var Posicao // Variável que guarda as posições jogadas
var Casas // Variável que guarda as divs das casas do jogo
var QuemJoga // Variável que define de quem é a vez da jogada
var QuemComeca // Variável que define quem começa o jogo
var jogando // Variável que diz se o jogo está rolando ou não
var mensagem // Variável que recebe a mensagem referente ao resultado do jogo
var finalizado // Variável que vai dizer se o jogo já possui um resultado
var dificuldade // Dificuldade do jogo

function Iniciar() {
    
    Posicao = ["","","","","","","","",""]
    Casas = document.querySelectorAll(".row div") 

    for (let i = 0; i < Casas.length; i++) {
        Casas[i].innerHTML = ""
        Casas[i].style.cursor = "pointer"
    }
    
    TelaInicio = document.getElementById("start-screen")
    TelaResultado = document.getElementById("result-screen") 
    TelaDificuldade = document.getElementById("SelectDifficulty")
    TelaJogo = document.getElementById("game")
    QuemComecaTexto = document.getElementById("QuemComeca")

    TelaInicio.style.opacity = "0"

    setTimeout(() => {
        TelaInicio.style.display = "none"
        TelaResultado.style.display = "none"
        TelaDificuldade.style.display = "block"
        setTimeout(() => {
            TelaDificuldade.style.opacity = "1"
        }, 100)
    }, 1000)

}

function IniciarJogo(NivelDificuldade) {

    dificuldade = NivelDificuldade
    jogando = true
    finalizado = false
    QuemComeca = Math.round(Math.random())
    QuemJoga = QuemComeca

    QuemComecaTexto.style.opacity = "1"
    TelaDificuldade.style.opacity = "0"

    setTimeout(() => {
        TelaDificuldade.style.display = "none"
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
            setTimeout(() => {
                CPUJoga()
            }, 500)
        } else {
            alert("Jogada indisponível")
        }
    }
}

function CPUJoga() {
    if (jogando && QuemJoga == 1) {

        let JogadaCPU
        let imgO = document.createElement("img")
        let stylesImg = document.createAttribute("style")

        stylesImg.value = "width: 80px; height: 80px"
        imgO.setAttributeNode(stylesImg)
        imgO.src = "imgs/O.png"

        if (dificuldade == 1) {
            JogadaCPU = Math.round(Math.random() * 9)

            if (Posicao[JogadaCPU] == "") {
                Posicao[JogadaCPU] = "O"
                Casas[JogadaCPU].appendChild(imgO)
                Casas[JogadaCPU].style.cursor = "default"
                verifica()
                QuemJoga = 0
            } else {
                CPUJoga()
            }
        } else {

           // Algoritmo de ataque
           // LINHA 1
           if (Posicao[0] == "O" && Posicao[1] == "O" && Posicao[2] == "") {
                Posicao[2] = "O"
                Casas[2].appendChild(imgO)
           } else if (Posicao[0] == "O" && Posicao[2] == "O" && Posicao[1] == "") {
                Posicao[1] = "O"
                Casas[1].appendChild(imgO)
           } else if (Posicao[1] == "O" && Posicao[2] == "O" && Posicao[0] == "") {
                Posicao[0] = "O"
                Casas[0].appendChild(imgO)
           }
            
           // LINHA 2
            else if (Posicao[3] == "O" && Posicao[4] == "O" && Posicao[5] == "") {
                Posicao[5] = "O"
                Casas[5].appendChild(imgO)
            } else if (Posicao[5] == "O" && Posicao[4] == "O" && Posicao[3] == "") {
                Posicao[3] = "O"
                Casas[3].appendChild(imgO)
            } else if (Posicao[5] == "O" && Posicao[3] == "O" && Posicao[4] == "") {
                Posicao[4] = "O"
                Casas[4].appendChild(imgO)
            }

            
            // LINHA 3
            else if (Posicao[6] == "O" && Posicao[7] == "O" && Posicao[8] == "") {
                Posicao[8] = "O"
                Casas[8].appendChild(imgO)
            } else if (Posicao[8] == "O" && Posicao[7] == "O" && Posicao[6] == "") {
                Posicao[6] = "O"
                Casas[6].appendChild(imgO)
            } else if (Posicao[6] == "O" && Posicao[8] == "O" && Posicao[7] == "") {
                Posicao[7] = "O"
                Casas[7].appendChild(imgO)
            }


            // COLUNAS

            // COLUNA 1
            else if (Posicao[0] == "O" && Posicao[3] == "O" && Posicao[6] == "") {
                Posicao[6] = "O"
                Casas[6].appendChild(imgO)
            } else if (Posicao[0] == "O" && Posicao[6] == "O" && Posicao[3] == "") {
                    Posicao[3] = "O"
                    Casas[3].appendChild(imgO)
            } else if (Posicao[6] == "O" && Posicao[3] == "O" && Posicao[0] == "") {
                    Posicao[0] = "O"
                    Casas[0].appendChild(imgO)
            }


            // COLUNA 2
            else if (Posicao[1] == "O" && Posicao[4] == "O" && Posicao[7] == "") {
                Posicao[7] = "O"
                Casas[7].appendChild(imgO)
            } else if (Posicao[7] == "O" && Posicao[4] == "O" && Posicao[1] == "") {
                    Posicao[1] = "O"
                    Casas[1].appendChild(imgO)
            } else if (Posicao[1] == "O" && Posicao[7] == "O" && Posicao[4] == "") {
                    Posicao[4] = "O"
                    Casas[4].appendChild(imgO)
            }

            
            // COLUNA 3
            else if (Posicao[2] == "O" && Posicao[5] == "O" && Posicao[8] == "") {
                Posicao[8] = "O"
                Casas[8].appendChild(imgO)
            } else if (Posicao[8] == "O" && Posicao[5] == "O" && Posicao[2] == "") {
                    Posicao[2] = "O"
                    Casas[2].appendChild(imgO)
            } else if (Posicao[2] == "O" && Posicao[8] == "O" && Posicao[5] == "") {
                    Posicao[5] = "O"
                    Casas[5].appendChild(imgO)
            }

            //DIAGONAIS

            //DIAGONAL 1
            else if (Posicao[0] == "O" && Posicao[4] == "O" && Posicao[8] == "") {
                Posicao[8] = "O"
                Casas[8].appendChild(imgO)
            } else if (Posicao[0] == "O" && Posicao[8] == "O" && Posicao[4] == "") {
                    Posicao[4] = "O"
                    Casas[4].appendChild(imgO)
            } else if (Posicao[8] == "O" && Posicao[5] == "O" && Posicao[0] == "") {
                    Posicao[0] = "O"
                    Casas[0].appendChild(imgO)
            }

            //DIAGONAL 2
            else if (Posicao[2] == "O" && Posicao[4] == "O" && Posicao[6] == "") {
                Posicao[6] = "O"
                Casas[6].appendChild(imgO)
            } else if (Posicao[2] == "O" && Posicao[6] == "O" && Posicao[4] == "") {
                    Posicao[4] = "O"
                    Casas[4].appendChild(imgO)
            } else if (Posicao[4] == "O" && Posicao[6] == "O" && Posicao[2] == "") {
                    Posicao[2] = "O"
                    Casas[2].appendChild(imgO)
            }



            // ALGORÍTIMO DE DEFESA

            // LINHA 1
            else if (Posicao[0] == "X" && Posicao[1] == "X" && Posicao[2] == "") {
                Posicao[2] = "O"
                Casas[2].appendChild(imgO)
            } else if (Posicao[0] == "X" && Posicao[2] == "X" && Posicao[1] == "") {
                Posicao[1] = "O"
                Casas[1].appendChild(imgO)
            } else if (Posicao[1] == "X" && Posicao[2] == "X" && Posicao[0] == "") {
                Posicao[0] = "O"
                Casas[0].appendChild(imgO)
        
            }
            // LINHA 2
            else if (Posicao[3] == "X" && Posicao[4] == "X" && Posicao[5] == "") {
                Posicao[5] = "O"
                Casas[5].appendChild(imgO)
            } else if (Posicao[5] == "X" && Posicao[4] == "X" && Posicao[3] == "") {
                Posicao[3] = "O"
                Casas[3].appendChild(imgO)
            } else if (Posicao[5] == "X" && Posicao[3] == "X" && Posicao[4] == "") {
                Posicao[4] = "O"
                Casas[4].appendChild(imgO)
            }

        
            // LINHA 3
            else if (Posicao[6] == "X" && Posicao[7] == "X" && Posicao[8] == "") {
                Posicao[8] = "O"
                Casas[8].appendChild(imgO)
            } else if (Posicao[8] == "X" && Posicao[7] == "X" && Posicao[6] == "") {
                Posicao[6] = "O"
                Casas[6].appendChild(imgO)
            } else if (Posicao[6] == "X" && Posicao[8] == "X" && Posicao[7] == "") {
                Posicao[7] = "O"
                Casas[7].appendChild(imgO)
            }


            // COLUNAS

            // COLUNA 1
            else if (Posicao[0] == "X" && Posicao[3] == "X" && Posicao[6] == "") {
                Posicao[6] = "O"
                Casas[6].appendChild(imgO)
            } else if (Posicao[0] == "X" && Posicao[6] == "X" && Posicao[3] == "") {
                Posicao[3] = "O"
                Casas[3].appendChild(imgO)
            } else if (Posicao[6] == "X" && Posicao[3] == "X" && Posicao[0] == "") {
                Posicao[0] = "O"
                Casas[0].appendChild(imgO)
            }


            // COLUNA 2
            else if (Posicao[1] == "X" && Posicao[4] == "X" && Posicao[7] == "") {
                Posicao[7] = "O"
                Casas[7].appendChild(imgO)
            } else if (Posicao[7] == "X" && Posicao[4] == "X" && Posicao[1] == "") {
                Posicao[1] = "O"
                Casas[1].appendChild(imgO)
            } else if (Posicao[1] == "X" && Posicao[7] == "X" && Posicao[4] == "") {
                Posicao[4] = "O"
                Casas[4].appendChild(imgO)
            }

            
            // COLUNA 3
            else if (Posicao[2] == "X" && Posicao[5] == "X" && Posicao[8] == "") {
                Posicao[8] = "O"
                Casas[8].appendChild(imgO)
            } else if (Posicao[8] == "X" && Posicao[5] == "X" && Posicao[2] == "") {
                Posicao[2] = "O"
                Casas[2].appendChild(imgO)
            } else if (Posicao[2] == "X" && Posicao[8] == "X" && Posicao[5] == "") {
                Posicao[5] = "O"
                Casas[5].appendChild(imgO)
            }

            //DIAGONAIS

            //DIAGONAL 1
            else if (Posicao[0] == "X" && Posicao[4] == "X" && Posicao[8] == "") {
                Posicao[8] = "O"
                Casas[8].appendChild(imgO)
            } else if (Posicao[0] == "X" && Posicao[8] == "X" && Posicao[4] == "") {
                Posicao[4] = "O"
                Casas[4].appendChild(imgO)
            } else if (Posicao[8] == "X" && Posicao[5] == "X" && Posicao[0] == "") {
                Posicao[0] = "O"
                Casas[0].appendChild(imgO)
            }

            //DIAGONAL 2
            else if (Posicao[2] == "X" && Posicao[4] == "X" && Posicao[6] == "") {
                Posicao[6] = "O"
                Casas[6].appendChild(imgO)
            } else if (Posicao[2] == "X" && Posicao[6] == "X" && Posicao[4] == "") {
                Posicao[4] = "O"
                Casas[4].appendChild(imgO)
            } else if (Posicao[4] == "X" && Posicao[6] == "X" && Posicao[2] == "") {
                Posicao[2] = "O"
                Casas[2].appendChild(imgO)
            } 
            
            else { // caso nenhuma jogada seja preciso

                JogadaCPU = Math.round(Math.random() * 9)

                if (Posicao[JogadaCPU] == "") {
                    Posicao[JogadaCPU] = "O"
                    Casas[JogadaCPU].appendChild(imgO)
                    Casas[JogadaCPU].style.cursor = "default"
                } else {
                    CPUJoga()
                }
            }
            verifica()
            QuemJoga = 0
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

document.getElementById("reiniciaJogo").addEventListener("click", Iniciar)
document.getElementById("IniciaJogo").addEventListener("click", Iniciar);