"use client";

//Icons
import { IconUserFilled, IconLockFilled } from "@tabler/icons-react";

//Interface
import { User } from "./InicialPage";

interface loginProps {
  setIsLogged: React.Dispatch<React.SetStateAction<number>>;
  users: User[];
}

//Next
import { useState } from "react";

const Login = ({ setIsLogged, users }: loginProps) => {
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    logging();
  }

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  function logging() {
    const actualUser =
      users.find((user) => user.email === emailLogin) &&
      users.find((user) => user.password === passwordLogin);

    if (actualUser) {
      setIsLogged(2);
    } else {
      alert("Email ou Senha incorreta");
    }
  }

  return (
    <>
      <h1 className="text-3xl font-semibold">Acesse o Sistema</h1>
      <form onSubmit={submitForm}>
        <label className="relative block mt-10">
          <IconUserFilled className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border-2 border-gray-400/50 p-3 pr-10 rounded-full"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value.toLowerCase())}
          />
        </label>

        <label className="relative block mt-5">
          <IconLockFilled className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="password"
            placeholder="Senha"
            className="w-full border-2 border-gray-400/50 p-3 pr-10 rounded-full"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
        </label>
        <div className="flex flex-row justify-between mt-2">
          <label>
            <div className="flex flex-row gap-2">
              <input type="checkbox" />
              <p>Lembre de mim</p>
            </div>
          </label>
          <button type="button" className="cursor-pointer">
            Esqueceu a senha?
          </button>
        </div>
        <button
          className="border-2 w-full rounded-full p-3 mt-4 bg-white text-black font-semibold cursor-pointer"
          type="submit"
        >
          Entrar
        </button>
        <p className="text-black font-semibold mt-2">
          Não tem uma conta?
          <span
            className="text-white font-semibold ml-2 cursor-pointer"
            onClick={() => setIsLogged(3)}
          >
            Registrar
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
