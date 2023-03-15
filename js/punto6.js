const basis = parseFloat(prompt("Ingrese la base: "));
const height = parseFloat(prompt("Ingrese la altura: "));

const perimeter = (basis, height) => 2*(basis+height);

document.write("El perimetro es: "+perimeter(basis,height));