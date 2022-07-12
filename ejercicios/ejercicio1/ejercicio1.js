/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
const button01 = document.getElementById('button-01');
const button02 = document.getElementById('button-02');
const button03 = document.getElementById('button-03');
const button04 = document.getElementById('button-04');

// Eventos
button01.addEventListener('click', ()=> {
    let cadena= prompt('Ingrese una cadena de texto');
    ejercicio01(cadena);
})

button02.addEventListener('click', ()=> {
  
    let cadena   = prompt('Ingrese una cadena de texto');
    if(!cadena) {
        console.warn(`No ingreso el texto`);
        alert('No ingreso el texto');   
    }else{let longitud = prompt('Ingrese la cantidad a recortar');
    ejercicio02(cadena, longitud);}
    
})

button03.addEventListener('click', ()=> {
    let cadena   = prompt('Ingrese una cadena de texto');
    let separador = prompt('Ingrese el caracter separador');
    ejercicio03(cadena, separador);
})

button04.addEventListener('click', ()=> {
    let cadena     = prompt('Ingrese una cadena de texto');
     if(!cadena){
      console.warn('Es necesario una cadena de texto');
      return alert('Es necesario una cadena de texto');
    }
    let repeticion = prompt('Ingrese la cantidad de repeticiones del texto');
    ejercicio04(cadena, repeticion);
})


// Funciones
const ejercicio01 = (cadena)=> {
    if(!cadena) {
        console.warn(`Es necesario una cadena de texto`);
        alert('Es necesario una cadena de texto');
    } else {
        console.log(`La cadena "${cadena}" tiene: ${cadena.length} caracteres`);
        return alert(`La cadena "${cadena}" tiene: ${cadena.length} caracteres`);
    }
}

const ejercicio02 = (cadena, longitud)=> {
    if (!longitud) {
      console.warn(`No ingreso una longitud para cortar el texto`);
        return alert('No ingreso una longitud para cortar el texto');   
    }
      console.info(cadena.slice(0, longitud));//el 0 idica donde empieza y logitud donde termina
      return alert(`el texto recortado es:"${cadena.slice(0, longitud)}"`) 
    
}

const ejercicio03 = (cadena, separador)=> {
    if(!cadena) {
        console.warn('Es necesario una cadena de texto');
        return alert('Es necesario una cadena de texto');
    } 
      console.info(cadena.split(separador));
      return alert(`esta es la cadena separada:  "${cadena.split(separador)}"`)
}

const ejercicio04 = (cadena, repeticion)=> {
  
    if (repeticion==0) {
      console.warn('El numero no puede ser 0');
      return alert('El numero no puede ser 0');
    }

    if (Math.sign(repeticion)===-1) {
      console.warn('El numero no puede ser negativo');
      return alert('El numero no puede ser negativo');
    }

    let array=[repeticion];
    for (let i =1; i<=repeticion; i++) {
      console.info(`${cadena} se repitio ${i}`);
      array[i]=cadena;
    }
    alert(array);
}





