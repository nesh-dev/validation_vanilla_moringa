const save = document.getElementById('save');
save.addEventListener('click', saveMethod);

const numberValue = document.getElementById('phone');
const emailValue = document.getElementById('email');
const nameValue = document.getElementById('name');

emailValue.addEventListener('change', validateEmail);
nameValue.addEventListener('change', validateName);

function validateEmail(e) {

    const messageText = document.getElementById('email-error'); 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) !== true) {
            messageText.style.display = 'block'
    }else{
        messageText.style.display = 'none'
    }

}

function validateName(e) {
    const messageText = document.getElementById('name-error');
    if(e.target.value.length < 3){
        messageText.style.display = 'block'
    }else{
        messageText.style.display = 'none'
    }

}



function saveMethod(e) {
    e.preventDefault()

}
