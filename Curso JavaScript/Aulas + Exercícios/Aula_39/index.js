function* geradora1() {
  // Possui três valores no total
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = geradora1();

for (let valor of g1) {
  console.log(valor);
}

function* geradora2() {
  //Infinita
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
  console.log(valor);
}

function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
