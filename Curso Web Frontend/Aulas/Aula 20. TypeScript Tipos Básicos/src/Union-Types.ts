let total: string | number = 200;
total = "500";

let shoppingCart = [200.75, 150.12, "33.90", "44", "not defined"];

function totalize(values: (string | number)[]) {
  return values
    .map((actual) => (typeof actual === "number" ? actual : parseFloat(actual)))
    .filter((number) => !isNaN(number))
    .reduce((acc, num) => (acc += num), 0);
}

console.log(totalize(shoppingCart));
