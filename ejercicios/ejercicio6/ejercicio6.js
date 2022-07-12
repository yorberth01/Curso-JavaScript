/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

console.clear
const button18 = document.getElementById('button-18');
const button19 = document.getElementById('button-19');
const button20 = document.getElementById('button-20');

// Eventos
button18.addEventListener( 'click', ()=> {
    let cadena = prompt('Ingresa una cadena de texto')
    ejercicio18(cadena);
})

button19.addEventListener( 'click', ()=> {
    let nombre = prompt('Introduce un nombre')
    ejercicio19(nombre);
})

button20.addEventListener( 'click', ()=> {
    let email = prompt('Introduce un correo electrónico válido')
    ejercicio20(email);
})

// Funciones
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const ejercicio18 = (cadena = "" )=> {
    if(!cadena) return alert('No ingresaste una cadena de texto válida');
    if(typeof cadena !== 'string') return alert(`El valor ${cadena} ingresado no es una cadena de texto`);

    let vocales = 0, consonantes = 0;

    for( let letra of cadena) {
        if(/[aeiouáéíóúü]/gi.test(letra)) vocales++;
        
        if(/[bcdfghjklmnpqrstvwxyz]/gi.test(letra)) consonantes++;
    }
  alert(`La cadena de texto es: ${cadena}`)
  alert(`El número de vocales es: ${vocales}`);
  alert(`El número de consonantes es: ${consonantes}`);
}

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const ejercicio19 = (nombre = "")=> {
    if(!nombre) return alert('No ingresaste un nombre');
    if(typeof nombre !== "string") return alert(`El valor ${nombre} ingresado no es una cadena de texto`);

    let expReg = /^[a-zñáéíóúü\s]+$/gi.test(nombre);

    return (expReg)
        ? alert(`%c${nombre} es un nombre válido`, 'color: hsl(120, 70%, 70%);')// 'color: hsl(120, 70%, 70%);' sirve para cambiar el color de la letra por consola
        : alert(`%c${nombre} no es un nombre válido`, 'color: hsl(0, 70%, 70%);')
}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const ejercicio20 = (email = undefined)=> {
    if(typeof email === 'undefined') return alert('Es necesario introducir un correo electrónico');
    if(!email || typeof email !== 'string') return alert('El valor introducido no es válido');

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/gi.test(email)

    return (expReg)
        ? alert(`%c${email} si es un correo válido`, 'color: hsla(120, 80%, 70%)')// 'color: hsla(120, 80%, 70%)' para agregar color por consola
        : alert(`%c${email} no es un correo válido`, 'color: hsla(0 ,80%, 70%);')
}