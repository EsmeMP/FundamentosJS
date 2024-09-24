// Condiconales 

let age =6;
if (age >= 18){
    console.log("Es mayor de Edad");
    }else if (age > 15){
        console.log("Es joven");
    }
    else if (age > 5){
        console.log("Es un niño");
    }
    else(
        console.log("Es un bebe")
    )

// Trusthy and Falsy
// my num = 0 --> false
// my num > 0 --> true
// myStr = '' -->false
// myStr = 'Hi' --> true

// Asignar Usuarios por defecto
let username = '';
let defaultName;

if (username !== ''){
    defaultName = username;
} else{
    defaultName = 'Invitado';
}

if (username){
    defaultName= username;
}else{
    defaultName = 'Invitado';
}
defaultName = username || 'Invitado';


// OPerador ternario
(age >=18)
    ? console.log('Si es mayor')
    : console.log('No es mayor')