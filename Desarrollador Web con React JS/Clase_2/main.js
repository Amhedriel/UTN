



let numeros = [1, 2, 3, 4, 5];
let primerNumero = numeros[0];
console.log(primerNumero)

function sumar(num1, num2) {
  return num1 + 1, num2 + 2;
};

let resultado = sumar(2, 5);
console.log(resultado)

const sumando = (a, b) => a + b;

console.log(sumando(5, 3));

// diferencia entre objetos literales y arrays
let persona = {
  nombre: "Cosme",
  edad: 30
}

// Ciclo for

let colores = ["rojo", "verde", "azul"]

for (let i = 0; i < colores.length; i++){
  console.log(colores[i])
}