/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
console.clear
const button12 = document.getElementById('button-12');
const button13 = document.getElementById('button-13');
const button14 = document.getElementById('button-14');

// Eventos
button12.addEventListener( 'click', ()=> {
    console.clear();
    let numero = prompt('Introduce un número positivo que no sea 0 o 1');
    ejercicio12(numero);
});

button13.addEventListener( 'click', ()=> {
    console.clear();
    let number = prompt('Introduce cualquier número que no sea 0');
    ejercicio13(number);
    
});

button14.addEventListener( 'click', ()=> {
    console.clear();
    let deg = prompt('Proporciona los grados que deseas convertir');
    let unit = prompt('Proporciona la unidad de conversion ("c" = celsius | "f" = fahrenheit)');
    ejercicio14(deg, unit);
  
});

// Funciones

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const ejercicio12 = (numero = undefined)=> {
    if(!numero) return alert('Es necesario introducir un valor')

    numero= Number(numero)
    if (numero===0) return alert("El numero no puede ser 0"); 
    if(!numero) return alert('El valor ingresado no es un número');
    if(numero <= 1) return alert('El número debe ser positivo y mayor que 1');

    let divisible = true;

    for(let i = 2; i < numero; i++) {
        if((numero % i )=== 0) {
            divisible = false;
            break;
        }
    }

    return (divisible) 
        ? alert(`El número ${numero} si es primo`) 
        : alert(`El número ${numero} no es primo`)
}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const ejercicio13 = (numero = undefined)=> {
    numero= Number(numero);
    if(!numero) return alert('Necesitas introducir una número válido');
    if(numero % 1 !== 0) return alert('El número proporcionado debe de ser entero');
    
    return ((numero % 2)===0)
        ? alert(`El número proporcionado ${numero} es un número par`)
        : alert(`El número proporcionado ${numero} es un número impar`)
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const ejercicio14 = (grados = undefined, unidad = undefined)=> {
  
    let convertir = (grados === 0 || grados === '0') ? '0' : grados * 1;
    
    if(!convertir) return console.warn(`El valor introducido "${grados}" no es válido`);
    if(unidad) {
        unidad.toLowerCase()
    } else {
        return console.warn('Es necesario definir la unidad de conversion ("c" = celsius | "f" = fahrenheit)')
    }

    switch(unidad) {
        case 'c':
            convertir = ((convertir * 9) / 5) + 32;
            convertir= convertir.toFixed(2);
            console.log(`${grados}° C equivalen a ${convertir}° F`);
            break;
        case 'f':
            convertir = ((convertir - 32) * 5) / 9;
            convertir = convertir.toFixed(2);
            console.log(`${grados}° F equivalen a ${convertir}° C`);
            break;
        default:
            console.warn('El segundo argumento solo puede ser ("c" = celsius | "f" = fahrenheit)')
    }
}