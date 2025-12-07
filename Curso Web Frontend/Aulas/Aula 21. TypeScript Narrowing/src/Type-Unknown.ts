let valueUnknown: unknown; //Tipo desconhecido
let valueAny: any; //Qualquer tipo

/*
    valueUnknown.toFixed(); //TS aponta erro
    valueAny.toFixed(); //TS não aponta erro
*/

//Type Guard para permitir toFixed em unknown
if (typeof valueUnknown === "number") {
  valueUnknown.toFixed();
}
