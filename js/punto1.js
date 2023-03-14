const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write("<ul>");
for(let i=0; i < months.length; i++){
    document.write(`<li> ${months[i]} </li>`);
}
document.write("</ul>");