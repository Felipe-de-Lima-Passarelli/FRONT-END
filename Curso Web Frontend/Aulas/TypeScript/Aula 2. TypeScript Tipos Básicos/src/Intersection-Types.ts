type Person = {
  name: string;
  age: number;
};

type Salary = {
  salary: number;
};

//Junção de tipos com  Intersection

type PersonDetails = Person & Salary;

const person1: PersonDetails = {
  name: "Felipe",
  age: 25,
  salary: 0,
};

console.log(person1);
