const number = parseInt(prompt("Ingrese un numero: "));

const mulTable = function(number){
    document.write("<ul>");
    for(let i=1; i <= 10; i++){
        document.write("<li>");
        document.write(`${number}x${i}=${number*i}`);
        document.write("</li>");
    }
    document.write("</ul>");
}

mulTable(number);