let sendButton = document.getElementById('Send-button');

let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPhone = document.getElementById('phone');
let inputMessage = document.getElementById('message');
let listaInputs = [inputName,inputEmail,inputPhone,inputMessage];

let requiredText = document.getElementsByClassName('required');


function showRequiredText(field_number){
    
    requiredText[field_number].classList.add('visible')
}
function HideRequiredText(field_number){
    requiredText[field_number].classList.remove('visible')
}

function checkInput(){
    for(let i=0; i<listaInputs.length; i++){
        if(listaInputs[i].value===""){
            listaInputs[i].classList.add('red-border')
            listaInputs[i].classList.remove('green-border')
            showRequiredText(i)

        }else{
            listaInputs[i].classList.remove('red-border')
            listaInputs[i].classList.add('green-border')
            HideRequiredText(i)
        }
    }
    

}

sendButton.addEventListener('click', function(){
    checkInput()
})