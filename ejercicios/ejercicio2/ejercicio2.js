/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const button05 = document.getElementById('button-05');
const button06 = document.getElementById('button-06');
const button07 = document.getElementById('button-07');
const button08 = document.getElementById('button-08');

// Eventos
button05.addEventListener( 'click', ()=> {
    let cadena = prompt('Introduce una cadena de texto');
    ejercicio05(cadena);
});

button06.addEventListener( 'click', ()=> {
    let cadena = prompt('Introduce una cadena de texto');
    let palabra= prompt('Introduce la palabra clave de búsqueda');
    ejercicio06(cadena, palabra);
});

button07.addEventListener( 'click', ()=> {
    let palabra = prompt('Introduce una cadena de texto');
    ejercicio07(palabra);
});

button08.addEventListener( 'click', ()=> {
    let cadena = prompt('Introduce una cadena de texto');
    let eliminar= prompt('Introduce un patrón de búsqueda');
    ejercicio08(cadena,eliminar);
});

// Funciones
const ejercicio05 = (cadena = "")=> {
    if(!cadena){
    console.warn("Es necesario introducir una cadena de texto")
    return alert("Es necesario introducir una cadena de texto")
    }
    else{
        console.info(cadena.split("").reverse().join(""))
        return alert(cadena.split("").reverse().join(""));   
    }  
}

const ejercicio06 = (cadena = "", palabra= "")=> {
    if(!cadena){
    console.warn("Es necesario introducir una cadena de texto");
    return alert("Es necesario introducir una cadena de texto");
    }
    if(!palabra){ 
    console.warn("Es necesaria una palabra para buscar en la cadena");
    return alert("Es necesaria una palabra para buscar en la cadena");
    }

        let i=0, contador=0;
        while (i !== -1) {
          i=cadena.indexOf(palabra, i);
            if (i!== -1) {
              i++;
              contador++;
            }
        }
        console.log(`La palabra ${palabra} se repite ${contador} veces`);
        return alert(`La palabra ${palabra} se repite ${contador} veces`)
    }


const ejercicio07 = (palabra = "")=> {
    if(!palabra) 
    return alert('No ingresaste una palabra o frase')
    
    palabra=palabra.toLowerCase();//para poner la palabra e minusculas
    let alReves=palabra.split("").reverse().join("");//el split es para convertir la palabra un array el reverse para voltearla y el join para unir de nuevo el array
return (palabra === alReves)
 ? alert (`la palabra  "${palabra}"  SI es un palindromo`)
 : alert (`la palabra  "${palabra}"  No es un palindromo`)
}

const ejercicio08 = (cadena, eliminar)=> {
    if (!cadena) return alert ('Introduce una cadena de texto valida')
    if (!eliminar) return alert ('Introduce un valor de búsqueda válido')
    if (cadena) return alert (cadena.replace(new RegExp(eliminar, 'gi'), ""))// expresion reglar i es para que distinga entre minusculas y mayusculas y g es para que no se detenga a encontrar la primera coincidencia y lo que esta "" es el valor con el cual lo va a sustituir
}