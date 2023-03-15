let cities = [];
do{
    cities.push(prompt("Ingrese una ciudad: "));
}while(confirm("Seguir escribiendo ciudades?"));

document.write("<h2>Las ciudades son: </h2><br><ul>");
for(let i=0; i < cities.length; i++){
    document.write(`<li> ${cities[i]} </li>`);
}
document.write("</ul>");
document.write(`Usted ingresó ${cities.length} ciudades.<br>`);
document.write(`Primer, tercer y último item, si los hubiese: <br>`);
document.write(`Primer lugar: ${cities[0]}<br>`);
document.write(`Tercer lugar: ${cities[2]}<br>`);
document.write(`Último lugar: ${cities[cities.length - 1]}<br>`);

cities.push("París");
document.write(`Nuevo último lugar: ${cities[cities.length - 1]}<br>`);
document.write(`<br>Segundo lugar: ${cities[1]}<br>`);
cities[1] = "Barcelona";
document.write(`Nuevo segundo lugar: ${cities[1]}<br>`);
