const text = prompt("Ingrese una frase: ");
const lowerOrUpper = function(text){
    const lowerText = text.toLowerCase();
    const upperText = text.toUpperCase();
    if(lowerText === text){
        return "Es solo minúsculas";
    }
    else if(upperText === text){
        return "Es solo mayúsculas";
    }
    return "Es una mezcla";
}
document.write(lowerOrUpper(text));