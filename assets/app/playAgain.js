playAgain = document.querySelector('#playAgain');

playAgain.addEventListener('click',()=>{
    picks.classList.add('oculto');
    choices.classList.remove('oculto');
    resultHtml.classList.add('oculto');
    resultHtml.classList.remove('opacity');
    machinePick.classList.replace(machinePick.classList[0],`pick__machine`)
    auraMachine.classList.remove('aura');
    auraYou.classList.remove('aura');
})