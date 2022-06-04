const process = require('process')
const sumar = require('./cuentas/sumar');
const restar = require('./cuentas/restar');
const dividir = require('./cuentas/dividir');
const multiplicar = require('./cuentas/multiplicar')


const operaciones = ["sumar", "restar", "dividir", "multiplicar"]
let operacion = process.argv[2];
let numero1 = +process.argv[3];
let numero2 = +process.argv[4];
let resultado;



if(operaciones.includes(operacion)){
if(operacion === "sumar"){
    resultado = sumar(numero1, numero2);
} else if(operacion === "restar"){
    resultado = restar(numero1, numero2)
} else if (operacion === "multiplicar"){
    resultado = multiplicar(numero1, numero2)
} else if (operacion === "dividir"){
    resultado = dividir(numero1, numero2)
}
 console.log(resultado); 
}else{
console.log("la opreción que intenta realizar no es valida");}