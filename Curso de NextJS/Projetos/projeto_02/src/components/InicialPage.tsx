"use client";

// next
import { useEffect, useState } from "react";

// Interface
export type User = {
  email: string;
  password: string;
};

// Components
import Login from "./Login";
import Logged from "./Logged";
import Register from "./Register";

const InicialPage = () => {
  const [dataBase, setDataBase] = useState<User[]>([]);
  const [isLogged, setIsLogged] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadUsers = () => {
      const savedUsers = localStorage.getItem("users");
      if (savedUsers) {
        setDataBase(JSON.parse(savedUsers));
      }
    };

    loadUsers();
  }, []);

  function register(email: string, password: string) {
    setDataBase((prev) => {
      const userExists = prev.find((user) => user.email === email);

      if (userExists) {
        alert("Este email já está sendo utilizado");
        return prev;
      }

      alert("Conta registrada com sucesso!");
      setIsLogged(1);

      return [...prev, { email, password }];
    });
  }

  useEffect(() => {
    if (dataBase.length === 0) return;

    localStorage.setItem("users", JSON.stringify(dataBase));
  }, [dataBase]);

  return (
    <div className="border-2 w-[25%] min-w-80 h-[50%] min-h-115 bg-gray-500/40 backdrop-blur-md text-center py-15 px-10">
      {isLogged === 1 && <Login setIsLogged={setIsLogged} users={dataBase} />}
      {isLogged === 2 && <Logged setIsLogged={setIsLogged} />}
      {isLogged === 3 && <Register register={register} />}
    </div>
  );
};

export default InicialPage;
