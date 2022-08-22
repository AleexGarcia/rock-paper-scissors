 score = 0;
 scoreHtml = document.querySelector('#score');

function analisaResultado(escolha,escolhaMaquina){
    if (escolha === 'paper'){
        if(escolhaMaquina ==='rock'){
            scoreAux = 1;
        }else if(escolhaMaquina === 'scissors'){
            scoreAux = -1;
        }else{
            scoreAux = 0;
        }
    }
    if (escolha === 'rock'){
        if(escolhaMaquina ==='scissors'){
            scoreAux = 1;
        }else if(escolhaMaquina === 'paper'){
            scoreAux = -1;
        }else{
            scoreAux = 0;
        }
    }
    if (escolha === 'scissors'){
        if(escolhaMaquina ==='paper'){
            scoreAux = 1;
        }else if(escolhaMaquina === 'rock'){
            scoreAux = - 1;
        }else{
            scoreAux = 0;
        }
    }
    score += scoreAux;
    
    return scoreAux;
}



function exibeScore(score){

}