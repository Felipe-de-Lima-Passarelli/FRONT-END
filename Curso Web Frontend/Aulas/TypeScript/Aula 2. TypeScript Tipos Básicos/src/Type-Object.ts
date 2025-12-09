let programmer: { name: string; age: number } = {
  name: "Felipe",
  age: 25,
};

function showProgrammer(programmer: {
  name: string;
  age: number;
  skills?: string[]; //Propriedade opcional por conta do "?"
}) {
  console.log(programmer);
}

showProgrammer(programmer);
