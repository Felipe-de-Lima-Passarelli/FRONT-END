// Crie um programa que converta uma temperatura de graus Celsius para Fahrenheit. A fórmula é: F = (C * 9/5) + 32

let temperaturaCelsius = 32;
let conversaoFahrenheit = temperaturaCelsius * (9 / 5) + 32;
console.log(conversaoFahrenheit.toFixed(2));

// Permita que o programa também converta de Fahrenheit para Celsius. Fórmula inversa: C = (F - 32) * 5/9

let temperaturaFahrenheit = 100;
let conversaoCelsius = (temperaturaFahrenheit - 32) * (5 / 9);
console.log(conversaoCelsius.toFixed(2));
