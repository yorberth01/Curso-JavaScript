/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
console.clear
const button09 = document.getElementById('button-09');
const button10 = document.getElementById('button-10');
const button11V1 = document.getElementById('button-11v1');
const button11V2 = document.getElementById('button-11v2');

// Eventos
button09.addEventListener( 'click', ()=> {
    ejercicio09();
});

button10.addEventListener( 'click', ()=> {
    let numero = prompt('Introduce un número a evaluar');
    ejercicio10(numero);
});

button11V1.addEventListener( 'click', ()=> {
    console.clear();
    let factorial = prompt('Coloca el número factorial a obtener');
    ejercicio11V1(factorial);
    
});

button11V2.addEventListener( 'click', ()=> {
    let numero= prompt('Coloca el número factorial a obtener');
    ejercicio11V2(numero);
});

// Funciones
const ejercicio09 = ()=> {
    let numero = Math.random() * 100
    numero = Math.round(numero) + 500;
    alert(numero);
};

const ejercicio10 = (numero = undefined)=> {
     numero=Number(numero);
    
    if(!numero) return alert('Es necesario introducir un número');

        let alReves = String(numero);
        alReves = alReves.split('').reverse().join('');
        if( numero == alReves ) {
            return alert(`${numero} si es un número capicúa`)
        } else {
            return alert(`${numero} no es un número capicua`)
        }
}

const ejercicio11V1 =(factorial = undefined) => {
    factorial = Number(factorial);
    if(!factorial) return console.warn('Necesitas introducir un número válido');
    if(factorial <= 0) return console.warn('El número necesita ser positivo y mayor a 0');

    let numbers = []
    for(let i = 0; i <= factorial; i++) {
        numbers[i] = i
    }
    numbers.shift();
    return alert(numbers.reduce( (a,b)=> a * b));
}

//ESTA ES A VERSION QUE YO HICE
const ejercicio11V2 = (numero=undefined) => {
    numero = Number(numero);
    if(!numero) return alert('Necesitas introducir un número válido');
    if(numero <= 0) return alert('El número necesita ser positivo y mayor a 0');

    let factorial = 1;
    for( let i = numero; i>1; i--) {
        factorial=factorial*i;
    }
    return alert(factorial)
};