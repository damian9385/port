const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const textarea = document.getElementById('textarea');
const parrafo = document.getElementById('warnings');

form.addEventListener('submit', (e) => {
	e.preventDefault()

    let warnings = "";
    let entrar = false;
    let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,30}$/;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regexAsunto = /^[a-zA-Z\_\-]{4,16}$/;
    let regexTextarea = /^[a-zA-Z0-9À-ÿ\s]{1,60}$/;
    parrafo.innerHTML = "";

    if(!regexNombre.test(nombre.value)){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(!regexAsunto.test(asunto.value)){
        warnings += `El asunto no es valido <br>`;
        entrar = true;
    }

    if(!regexTextarea.test(textarea.value)){
        warnings += `El mensaje no es valido <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "enviado";
    }
})