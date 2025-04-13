import { useState } from "react";
import "./NewList.module.css";

const NewList = () => {
  const [inputId, setInputId] = useState();
  const [inputName, setInputName] = useState();
  const [inputAge, setInputAge] = useState();

  const [list, setList] = useState([
    {
      id: 1,
      name: "Felipe",
      age: 24,
    },
    {
      id: 2,
      name: "Patricia",
      age: 30,
    },
    {
      id: 3,
      name: "Usuário",
      age: 48,
    },
  ]);

  function add() {
    setList([
      ...list,
      {
        id: parseInt(inputId),
        name: inputName,
        age: parseInt(inputAge),
      },
    ]);
  }

  return (
    <div>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            Nome: {user.name} / Idade: {user.age}
          </li>
        ))}
      </ul>
      <label>
        Id:
        <input
          id="id"
          placeholder="Digite o ID"
          onChange={(e) => setInputId(e.target.value)}
        ></input>
      </label>
      <label>
        Name:
        <input
          id="name"
          placeholder="Digite o nome"
          onChange={(e) => setInputName(e.target.value)}
        ></input>
      </label>
      <label>
        Age:
        <input
          id="age"
          placeholder="Digite a idade"
          onChange={(e) => setInputAge(e.target.value)}
        ></input>
      </label>
      <button onClick={add}>Adicionar na lista</button>
    </div>
  );
};

export default NewList;
