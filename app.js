// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo !== "") {  // Evita agregar nombres vacíos
        amigos.push(nombreAmigo);
        
        // Mostrar los nombres en la lista visualmente
        asignarTextoElemento('#listaAmigos', amigos.map(amigo => `<li>${amigo}</li>`).join(''));

        // Limpiar el campo de texto
        limpiarCaja();
    } else {
        alert('Por favor, inserte un nombre.');
    }
    
    console.log(amigos);
}

function sortearAmigo() {
    if (amigos.length === 0) {  // Verifica si la lista de amigos está vacía
        alert('No hay amigos en la lista para sortear.');
        return; 
        }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    asignarTextoElemento('#resultado', `El amigo secreto es: ${amigoSorteado}`);

}

// Limpia el input después de agregar un amigo
function limpiarCaja() {
    document.getElementById('amigo').value = ''; 
}