interface Resume {
  nome: string;
  idade: number;
  faculdade: string;
}

//Caso redeclare a mesma interface, terá o merge entre elas
interface Resume {
  area_desejada: string;
}

const myResume: Resume = {
  nome: "Felipe",
  idade: 25,
  faculdade: "Análise e Desenvolvimento de Sistemas",
  area_desejada: "Desenvolvedor Frontend",
};
