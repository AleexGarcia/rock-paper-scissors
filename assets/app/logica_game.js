 scoreHtml = document.querySelector('#score');
 resultHtml = document.querySelector('#result')

 
 score = JSON.parse(localStorage.getItem('score')) || 0;
 scoreHtml.textContent = score


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
    localStorage.setItem('score',JSON.stringify(score))
    return scoreAux;
}

let resultado = document.querySelector('#result_span');

function exibeResultado(scoreAux){
    
    if(scoreAux > 0){
        resultado.textContent = 'You win';
        
    }else if(scoreAux < 0){
        resultado.textContent = 'You Lose';
    }else{
        resultado.textContent = 'Draw';
    }

    setTimeout(()=>resultHtml.classList.remove('oculto'),2000);
    setTimeout(()=> resultHtml.classList.add('opacity'),2500)
}

function exibeScore(score){
    setTimeout(()=> scoreHtml.textContent = score, 2500) ;
}

const auraYou = document.querySelector('#aura_you');
const auraMachine = document.querySelector('#aura_machine');

function exibeAura(resultado){
   
  setTimeout(()=>{
      if(resultado === 1){
          auraYou.classList.add('aura')
      }
      if(resultado === -1){
          auraMachine.classList.add('aura')
      }
  },2500) 
}
