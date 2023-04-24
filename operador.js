//Conversion larga:
var celsius1 = prompt("Introduzca la temperatura en grados celsius: ");
celsius1 = parseFloat(celsius1);

//Conversión corta:
//var celsius1 = parseFloat(prompt("Introduzca la temperatura en grados celsius: "));

//Procedo a hacer la conversión de Celsius a Farenheit:
var Farenheit1 = 9/5*celsius1+32;

document.write("De Celsius a Farenheit es: ", Farenheit1);