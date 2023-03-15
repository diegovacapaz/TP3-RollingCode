let dice1 = 0;
let dice2 = 0;
let dicesValues = [null,null,0,0,0,0,0,0,0,0,0,0,0]; //pongo en null la suma = 0 y 1 por ser inexistentes

const rollTheDice = () => Math.floor(Math.random()*6 + 1);

for(let i = 0; i < 50; i++){
    dice1 = rollTheDice();
    dice2 = rollTheDice();
    dicesValues[dice1+dice2]++;
}

document.write("<ul>");
for(let i=2; i < dicesValues.length; i++){
    document.write(`<li> La cantidades de coincidencias para el valor ${i} son: ${dicesValues[i]} </li>`);
}
document.write("</ul>");
