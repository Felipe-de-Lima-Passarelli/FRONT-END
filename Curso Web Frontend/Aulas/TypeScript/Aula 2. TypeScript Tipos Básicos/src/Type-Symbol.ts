const title: symbol = Symbol("Home");
const pageTitle: symbol = Symbol("Home");

//Mesmo tendo os mesmos valores, não são iguais

if (title === pageTitle) {
  console.log("Não vai cair aqui, pois são diferentes");
}
