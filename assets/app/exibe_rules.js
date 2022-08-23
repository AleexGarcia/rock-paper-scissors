const rules_button = document.querySelector('#open_rules');
const rules_section = document.querySelector('#rules');
const rules_close = document.querySelector('#close_rules')
rules_button.addEventListener("click",()=>{
    rules_section.classList.remove('oculto');
})
rules_close.addEventListener("click",()=>{
    
    rules_section.classList.add('oculto');
})
