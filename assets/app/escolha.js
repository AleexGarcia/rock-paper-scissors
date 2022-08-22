const choices = document.querySelector('#choices');
const picks = document.querySelector('#picks')

choices.addEventListener('click', evento => {
    escolha = evento.target.dataset.type;
    console.log(escolha);
    escolhaMaquina = sorteio();
    console.log(escolhaMaquina);

    if(escolha != null && escolhaMaquina != null){
        exibeEscolhas(escolha,escolhaMaquina);
        console.log(analisaResultado(escolha,escolhaMaquina));
    }

});
myPick = document.querySelector('[data-type = myPick]')
machinePick = document.querySelector('[data-type = machinePick]')

function exibeEscolhas(escolha,escolhaMaquina){
    
    myPick.classList.replace(myPick.classList[0],`choices__${escolha}`)
    machinePick.classList.replace(machinePick.classList[0],`choices__${escolhaMaquina}`)
    choices.classList.add('oculto');
    picks.classList.remove('oculto');

}