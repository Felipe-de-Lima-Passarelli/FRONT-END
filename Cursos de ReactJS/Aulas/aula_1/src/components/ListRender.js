import { useState } from "react";
import "./ListRender.module.css";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
  const [users] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "João", age: 20 },
    { id: 3, name: "Paula", age: 52 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            nome: {user.name} - idade: {user.age} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
