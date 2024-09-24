const btnPlay = document.querySelector('.jugar'); // Apuntar al botón de "Jugar"
// const divUser =document.querySelectorAll('.userEleccion') // apuntar al div del usuario
const divMaq =document.querySelector('#maqEleccion') // apuntar al div de la maquina
const message =document.querySelector('#resultadoFinal') // apuntar al mensaje
const imgMaq = document.querySelector('#imgCompu'); // Apuntar a la imagen de la máquina
const imgUser = document.querySelector('#imgUser'); // Apuntar a la imagen del usuario
const userChoiceText = document.querySelector('#userEleccion'); // Apuntar al texto del usuario

const play = (choiceUser) => {
    // const choiceUser = prompt ('ELige: piedra, papel o tijeras')
    const aleatorio = Math.floor(Math.random() * 3);
    // Todo
    // si aleatorio = 0 choiceMaq = 'piedra' y asi para 1 y 2\
    // comparaciones para determinar el ganador
    let choiceMaq = '';
    switch (aleatorio){
        case 0:
            choiceMaq = 'piedra';
            divMaq.innerText="Piedra";
            imgMaq.src = 'assets/img/piedra.png';
            break;
        case 1:
            choiceMaq = 'papel';
            divMaq.innerText = "Papel";
            imgMaq.src = 'assets/img/papel.png';
            break;
        case 2:
            choiceMaq = 'tijeras';
            divMaq.innerText="Tijeras";
            imgMaq.src = 'assets/img/tijeras.png';
            break;
    }

    userChoiceText.innerText = choiceUser;
    switch (choiceUser) {
        case 'piedra':
            imgUser.src = 'assets/img/piedra.png'; // Cambiar imagen del usuario
            break;
        case 'papel':
            imgUser.src = 'assets/img/papel.png'; // Cambiar imagen del usuario
            break;
        case 'tijeras':
            imgUser.src = 'assets/img/tijeras.png'; // Cambiar imagen del usuario
            break;
    }

    if (choiceUser === choiceMaq){
        message.innerText ='Empate';
    }
    else if(
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    )
    {
        message.innerText = 'Has Ganado';
    }
    else{
        message.innerText = 'Has Perdido';
    }
}

// divUser.forEach(userEleccion => {
//     userEleccion.addEventListener('click', function() {
//         const eleccionUsuario = this.id;
//         play(eleccionUsuario);
//     });
// });
btnPlay.addEventListener('click', function() {
    const eleccionUsuario = prompt('Elige: piedra, papel o tijeras').toLowerCase();

    // Verificar si la elección del usuario es válida
    if (eleccionUsuario === 'piedra' || eleccionUsuario === 'papel' || eleccionUsuario === 'tijeras') {
        play(eleccionUsuario);
    } else {
        alert('Elección inválida. Por favor, elige entre piedra, papel o tijeras.');
    }
});
// funcion prompt