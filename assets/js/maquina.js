//SCRIPT DO TEXTO MAQUINA DE ESCREVER
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);


    });

}

const titulo = document.querySelector('h1');
typeWriter(titulo);




function textodepois() {
    document.getElementById()
}