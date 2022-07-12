import saludar, { Saludar, pi, usuario, contrasena } from "./constantes.js";
import restar01, { sumar } from "./aritmeticas.js";
import { aritmetica as a } from "./aritmeticas.js";

console.log("Archivos Modulo.js");
console.log(pi);
console.log(sumar(3, 4));
console.log(a.sumar(5, 8), a.restar(10, 9));

saludar();
console.log(restar01(23, 7));

let saludo = new Saludar();
saludo;
