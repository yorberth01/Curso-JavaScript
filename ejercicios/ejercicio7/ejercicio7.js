/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

console.clear
const button21 = document.getElementById('button-21');
const button22 = document.getElementById('button-22');
const button23 = document.getElementById('button-23');

button21.addEventListener( 'click', ()=> {
    
    let str = prompt('Inserte un listado de números separados por comas. Ejemplo: (1, 2, 3, 4, 5)');
    arr = str.split(',');
    arr = arr.map( element => element = parseFloat(element));
    ejercicio21(arr);
})

button22.addEventListener( 'click', ()=> {
    let str = prompt('Inserte un listado de números separados por comas. Ejemplo: (1, 2, 3, 4, 5)');
    arr = str.split(',');
    arr = arr.map( element => element = parseFloat(element));
    ejercicio22(arr);
})

button23.addEventListener( 'click', ()=> {
    let str = prompt('Inserte un listado de número separador por comas. EjempploL (1, 2, 3, 4, 5)');
    arr = str.split(',');
    arr = arr.map( element => element = parseFloat(element));
    ejercicio23(arr);
    alert("mirar el resultado por consola")
})

// Funciones
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const ejercicio21 = (arr = undefined)=> {
    if(!arr) return alert('No ingresaste ningún valor válido')
    if( !(arr instanceof Array) ) return alert('El valor ingresado no es un arreglo')
    if(arr.length === 0) return alert('El arreglo no puede estar vacío')

    for(let numero of arr) {
        if(typeof numero !== 'number') 
        return alert('Los valores ingresados en el arreglo no son números');

        if(isNaN(numero)) return alert('Los valores ingresados en el arreglo no son números');
    }
    const cuadrado = arr.map( el => el * el);
    return alert(`el arreglo original es: ${arr} y el arreglo al cuadrado es: ${cuadrado}`)
  }

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const ejercicio22 = (arr = undefined)=> {
    if(!arr) return alert('El valor ingresado no es válido');
    if( !(arr instanceof Array) ) return alert(`El valor ingresado: '${arr}' no es un arreglo`);
    if(arr.length === 0) return alert('El arreglo no puede estar vacío')

    for( let number of arr) {
        if (typeof number !== 'number') return alert('Los datos ingresados en el arreglo no son números');
        if (isNaN(number)) return alert('Los valores ingresados en el array no son números');
    }
   
    alert(`arregloOriginal: ${arr}\n Valor mayor: "${Math.max(...arr)}"\n Valor menor: "${Math.min(...arr)}" `);
}

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const ejercicio23 = (arr=undefined)=> {
    if( !(arr instanceof Array) ) return console.warn('El valor ingresado no es un arreglo');
    if( arr.length === 0) return console.warn('El arreglo no puede estar vácio');
    for( let number of arr) {
        if( typeof number !== 'number') return console.warn('Los elementos que están en el no son números');
        if( isNaN(number)) return console.warn('Los elementos que están en el arreglo no son números');
    }

    return console.log({
      pares: arr.filter(number =>number %2===0),
      impares: arr.filter(number => number %2 ===1)
    })
    
}