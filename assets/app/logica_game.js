 score = 0;
 scoreHtml = document.querySelector('#score');
 resultHtml = document.querySelector('#result')
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

function exibeResultado(scoreAux){
    let resultado = document.querySelector('#result_span');
    
    if(scoreAux > 0){
        resultado.textContent = 'You win';
    }else if(scoreAux < 0){
        resultado.textContent = 'You Lose';
    }else{
        resultado.textContent = 'Draw';
    }

    resultHtml.classList.remove('oculto');
}

function exibeScore(score){
    scoreHtml.textContent = score;
}