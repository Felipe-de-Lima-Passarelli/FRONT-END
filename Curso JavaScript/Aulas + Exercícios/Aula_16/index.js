let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(`A: ${a}, B: ${b}, C: ${c}`);

a.push(4);
b.push(5);

console.log(`A: ${a}, B: ${b}, C: ${c}`);
