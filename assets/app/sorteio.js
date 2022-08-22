const options = document.querySelectorAll("#choices div");
optionArray = []
options.forEach(element =>{
    optionArray.push(element.dataset.type);
});
function sorteio(){
    return optionArray[parseInt(Math.random()*3)]
}

