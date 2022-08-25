const choices = document.querySelector('#choices');
const picks = document.querySelector('#picks')

choices.addEventListener('click', evento => {
    escolha = evento.target.dataset.type;
    escolhaMaquina = sorteio();

    if(escolha != null && escolhaMaquina != null){
        exibeEscolhas(escolha,escolhaMaquina);
        
      let resultado = analisaResultado(escolha,escolhaMaquina);
        exibeResultado(resultado);
        exibeAura(resultado);
        exibeScore(score);
    }

});
myPick = document.querySelector('[data-type = myPick]')
machinePick = document.querySelector('[data-type = machinePick]')

function exibeEscolhas(escolha,escolhaMaquina){
    
    myPick.classList.replace(myPick.classList[0],`choices__${escolha}`)
    
    choices.classList.add('oculto');
    picks.classList.remove('oculto');
    setTimeout(()=>{
        machinePick.classList.replace(machinePick.classList[0],`choices__${escolhaMaquina}`)
    },2000)
}