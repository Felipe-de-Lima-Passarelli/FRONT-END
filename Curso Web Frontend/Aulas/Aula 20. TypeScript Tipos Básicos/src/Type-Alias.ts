//Programar os tipos dentro de uma variável

type ProgrammerType = {
  name: string;
  age: number;
  skills?: string[];
  contact: { email: string; phone: string };
};

function showProgrammer(programmer: ProgrammerType) {
  console.log(programmer);
}

showProgrammer({
  name: "Felipe",
  age: 25,
  skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "ReactJS"],
  contact: { email: "loremlorem@gmail.com", phone: "+55 11 99999-9999" },
});
