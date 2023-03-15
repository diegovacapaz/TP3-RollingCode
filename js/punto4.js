const number = parseInt(prompt("Escriba un número: "));
const oddOrEven = number => (number%2===0)? "El número es par":"El número es impar";
document.write(oddOrEven(number));