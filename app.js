// apuntar div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    // TODO
    // CREAR NUMERO ALEATORIO (0 - 8)
    // SWITCH/CASE PARA MENSAJES DISTINTOS
    // message.innerText = "Le diste click!! 🎱";
    // message.innerText = Match.random();
    const frase= Math.floor(Math.random() * 9);
    switch(frase) {
    case 0:
        message.innerText="Tengo hambre? 🥗";
        break;
    case 1:
        message.innerText="Cada dia más esquizofrenic@ 😈";
        break;
    case 2:
        message.innerText="Has encontrado NADOTAA... XD";
        break;
    case 3:
        message.innerText="Mejor échate un sueño... Ah mimir zzz";
        break;
    case 4:
        message.innerText="Yo solo sé que no se nada ⚖";
        break;
    case 5:
        message.innerText="Le falta sal 😠";
        break;
    case 6:
        message.innerText="Mejor {ctrl + z} a tu vida";
        break;
    case 7:
        message.innerText="Te hace falta estudiar más unu"
        break;
    case 8:
        message.innerText="Esto es una trampa, Kira. ¿Qué escondes? 🧐"
        break;
    }
}

ball.addEventListener('click', eightBall);









// const day = (Math.random() *7);
// switch(day){
//     case 0:
//         console.log("Es domingo ");
//         break;
//     case 1:
//         console.log("Es lunes ");
//         break;
//     case 2:
//         console.log("Es martes ");
//         break;
//     case 3:
//         console.log("Es miercoles");
//         break;
//     case 4:
//         console.log("Es jueves ");
//         break;
//     case 5:
//         console.log("Es viernes ");
//         break;
//     case 6:
//         console.log("Es sabado");
//         break;
//     default:
//         console.log("Dia no valido");
// }