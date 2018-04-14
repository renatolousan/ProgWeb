var hasLost = false;
let ptos = 0;
while (true){
    console.log("Escolha sua jogada: \n 1 - Papel \n 2 - Pedra \n 3 - Tesoura ");
    var jogada = parseInt(prompt());
    var jogadaCPU = Math.floor(Math.random() * 3) + 1;
    
    switch(jogada) {
        case 1: // Papel
            if(jogadaCPU == jogada){
                console.log("O computador jogou Papel")
                console.log("A rodada empatou!");
            }
            if(jogadaCPU == 2){
                console.log("O computador jogou Pedra")
                console.log("Você ganhou!");
                ptos = ptos + 1;
            }
            if(jogadaCPU == 3){
                console.log("O computador jogou Tesoura")
                console.log("Você perdeu! ");
                console.log("A sua pontuação foi de " + ptos);
                hasLost = true;
                break;
            }
            break;
        case 2: // Pedra
            if(jogadaCPU == jogada){
                console.log("O computador jogou Pedra")
                console.log("A rodada empatou!");
            }
            if(jogadaCPU == 3){
                console.log("O computador jogou Tesoura")
                console.log("Você ganhou!");
                ptos = ptos + 1;;
            }
            if(jogadaCPU == 1){
                console.log("O computador jogou Papel")
                console.log("Você perdeu! ");
                console.log("A sua pontuação foi de " + ptos);
                hasLost = true;
                break;
            }
            break;
        case 3: // Tesoura
            if(jogadaCPU == jogada){
                console.log("O computador jogou Tesoura")
                console.log("A rodada empatou!");
            }
            if(jogadaCPU == 1){
                console.log("O computador jogou Papel")
                console.log("Você ganhou!");
                ptos = ptos + 1;
            }
            if(jogadaCPU == 2){
                console.log("O computador jogou Pedra")
                console.log("Você perdeu! ");
                console.log("A sua pontuação foi de " + ptos);
                hasLost = true;
                break;
            }
            break;
        default:
            console.log("Você perdeu! A sua pontuação foi de " + ptos);
            hasLost = true;
            break;
    }

    if(hasLost == true){
        break;
    }

}