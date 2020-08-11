// Reto 1 Pide a tu usuario que ingrese 2 números con decimales (cuantos más mejor) y muestra el resultado de multiplicarlos ¿fácil, no?

const retoUnoInputA = document.getElementById("reto-1-input-a");
const retoUnoInputB = document.getElementById("reto-1-input-b");
const retoUnoContenedor = document.getElementById("reto-1-resultado");

const retoUno = () => {
  let a = parseFloat(retoUnoInputA.value);
  let b = parseFloat(retoUnoInputB.value);
  let resultado = a * b;
  retoUnoContenedor.textContent = `El resultado es: ${resultado}`;
  retoUnoContenedor.setAttribute("class", "reto-resultado");
};

// Reto 2 Toma como base el reto anterior, pero ajústalo para que el resultado muestre solamente 1, 2,4 o 4 decimales.

const retoDosInputA = document.getElementById("reto-2-input-a");
const retoDosInputB = document.getElementById("reto-2-input-b");
const retoDosInputC = document.getElementById("reto-2-input-c");
const retoDosContenedor = document.getElementById("reto-2-resultado");

const retoDos = () => {
  let decimales = parseInt(retoDosInputC.value);
  let a = parseFloat(retoDosInputA.value);
  let b = parseFloat(retoDosInputB.value);
  let resultado = (a * b).toFixed(decimales);
  retoDosContenedor.textContent = `El resultado es: ${resultado}`;
  retoDosContenedor.setAttribute("class", "reto-resultado");
};

// Reto 3 Pide a tu usuario que ingrese un número, cuyo valor debe ser mayor a 20, luego calcula su raíz cuadrada y reduce a 2 o 3 decimales el resultado final.

const retoTresInputA = document.getElementById("reto-3-input-a");
const retoTresInputB = document.getElementById("reto-3-input-b");
const retoTresContenedor = document.getElementById("reto-3-resultado");

const retoTres = () => {
  let numero = parseFloat(retoTresInputA.value);
  let decimales = parseInt(retoTresInputB.value);
  if(numero > 20){
    let resultado = Math.sqrt(numero).toFixed(decimales);
    retoTresContenedor.textContent = `La raíz cuadrada de ${numero} es: ${resultado}`;
    retoTresContenedor.setAttribute("class", "reto-resultado");
  }else{
    retoTresContenedor.textContent = `Porfavor ingrese un número mayor que 20`;
    retoTresContenedor.setAttribute("class", "reto-resultado");
  }
};

// Reto 4 Solicita a tu usuario que ingrese un número el cual será el radio de un círculo y con este dato calcula el área de un círculo. Si tu lenguaje cuenta con librerías específicas para este propósito haz uso de las mismas.

const retoCuatroInputA = document.getElementById("reto-4-input-a");
const retoCuatroInputB = document.getElementById("reto-4-input-b");
const retoCuatroContenedor = document.getElementById("reto-4-resultado");

const retoCuatro = () => {
  let radio = parseFloat(retoCuatroInputA.value);
  let decimales = parseInt(retoCuatroInputB.value);
  let areaCirculo = Math.PI * Math.pow(radio,2);
  retoCuatroContenedor.textContent = `El área de un circulo de ${radio} cm de radio es de : ${areaCirculo.toFixed(decimales)} cm cuadrados.`;
  retoCuatroContenedor.setAttribute("class", "reto-resultado");
};

// Reto 5 Pide a tu usuario que indique el radio y la profundidad de un cilindro. Después aplica la fórmula correspondiente para calcular el volumen del cilindro y reduce el resultado a un solo decimal.

const retoCincoInputA = document.getElementById("reto-5-input-a");
const retoCincoInputB = document.getElementById("reto-5-input-b");
const retoCincoContenedor = document.getElementById("reto-5-resultado");

const retoCinco = () => {
  let radio = parseFloat(retoCincoInputA.value);
  let altura = parseFloat(retoCincoInputB.value);
  let volumenCilindro = Math.PI * Math.pow(radio,2) * altura;
  retoCincoContenedor.textContent = `El volumen de un cilindro de ${radio} cm de radio y ${altura} de altura es de: ${volumenCilindro.toFixed(1)} cm cúbicos.`;
  retoCincoContenedor.setAttribute("class", "reto-resultado");
};

// Reto 6 Pide al usuario que ingrese 2 números, divídelos, muestra un resultado como enteros y además el residuo por separado de una forma que seal fácil de entender al usuario. Por ejemplo: “9 dividido entre 2 es 4 y sobra 1”.

const retoSeisInputA = document.getElementById("reto-6-input-a");
const retoSeisInputB = document.getElementById("reto-6-input-b");
const retoSeisContenedor = document.getElementById("reto-6-resultado");

const retoSeis = () => {
  let dividendo = parseInt(retoSeisInputA.value);
  let divisor = parseInt(retoSeisInputB.value);
  let division = dividendo / divisor;
  let resto = dividendo % divisor;
  retoSeisContenedor.textContent = `${dividendo} dividido entre ${divisor} es ${division.toFixed(1)} y sobra ${resto.toFixed(1)}`;
  retoSeisContenedor.setAttribute("class", "reto-resultado");
};
