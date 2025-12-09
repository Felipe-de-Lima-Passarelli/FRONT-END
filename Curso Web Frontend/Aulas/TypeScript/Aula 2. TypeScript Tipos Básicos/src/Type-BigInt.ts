console.log("Int - Max safe", Number.MAX_SAFE_INTEGER);
console.log("Int - Min safe", Number.MIN_SAFE_INTEGER);

//Atribuição com o sufixo n
let bigIntNumber1: bigint = 1000000000000000000000n;
console.log(bigIntNumber1);

//Atribuição com o construtor bigInt
let bigIntNumber2: bigint = BigInt(20000000000000000000n);
console.log(bigIntNumber2);

let bigIntNumber3: bigint = BigInt("30000000000000000000");
console.log(bigIntNumber3);
