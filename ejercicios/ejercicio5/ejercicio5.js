/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
console.clear
const button15 = document.getElementById('button-15');
const button16 = document.getElementById('button-16');
const button17 = document.getElementById('button-17');

// Eventos
button15.addEventListener( 'click', ()=> {
    number = prompt('Introduce un número');
    base   = prompt('Introduce la base de conversión (2 | 10)');
    ejercicio15(number, base);
});

button16.addEventListener( 'click', ()=> {
    monto = prompt('Introduce el monto total de la compra');
    descuento= prompt('Introduce el porcentaje de descuento');
    ejercicio16(monto,descuento);
});

button17.addEventListener( 'click', ()=> {
    fecha = prompt('Introduce una fecha con el siguiente formato: aaaa/mm/dd');
    ejercicio17(fecha);
});


// Funciones
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const ejercicio15 = (number = undefined, base = undefined)=> {
    number = Number(number);
    base = Number(base);
    if(!number) return alert('No ingresaste el número a convertir');
    if(!base) return alert('No ingresaste la base a convertir');

    if(base === 2) {
        return alert(`El numero ${number} base ${base} = ${parseInt(number, base)} base 10`);
    } else if(base === 10) {
        return alert(`El numero ${number} base ${base} = ${number.toString(base)} base 2`);
    } else {
        return alert('El número base a convertir no es válido');
    }
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const ejercicio16 = (monto = undefined, descuento = 0)=> {
    monto = Number(monto);
    descuento = (descuento === '0') ? '0' : Number(descuento);
    if(!monto) return alert('Necesitas ingresar un valor válido');
    if(monto <= 0) return alert('El monto no puede ser negativo o igual a 0')
    if(!descuento) return alert('El valor descuento ingresado no es válido');
    if(descuento < 0)     return alert('El valor del descuento no puede ser negativo');
    if(descuento > 100)   return alert('El valor del descuento no puede ser más del 100%');
    
    return alert(`El total a pagar es: $${(monto-((monto*descuento)/100)).toFixed(2)}, y el descuento fue: $${((monto / 100) * descuento).toFixed(2)}`);
}

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const ejercicio17 = (fecha) => {
  

    if(fecha.length < 5) {
        yearObtained = new Date(fecha).getFullYear() + 1;
    } else {
        yearObtained = new Date(fecha).getFullYear()
    }

    let today = new Date().getFullYear();
    let yearDifferences = today - yearObtained;

    return (Math.sign(yearDifferences) === -1)
        ? alert(`Faltan ${Math.abs(yearDifferences)} años para el ${yearObtained}`)
        : (Math.sign(yearDifferences) === 1)
            ? alert(`Han pasado ${Math.abs(yearDifferences)} años desde ${yearObtained}`)
            : (Math.sign(yearDifferences) === 0)
                ? alert('No han transcurrido años desde la fecha indicada')
                : alert('El valor ingresado no es una fecha válida')
}