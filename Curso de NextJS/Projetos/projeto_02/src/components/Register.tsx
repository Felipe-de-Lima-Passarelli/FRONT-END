//Icons
import { IconUserFilled, IconLockFilled } from "@tabler/icons-react";
import { useState } from "react";

//Interface
interface registerProps {
  register: (email: string, password: string) => void;
}

const Register = ({ register }: registerProps) => {
  const [emailRegister, setEmailRegister] = useState<string>("");
  const [passwordRegister, setPasswordRegister] = useState<string>("");

  return (
    <>
      <h1 className="text-3xl font-semibold">Registre-se</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (emailRegister === "" || passwordRegister === "") {
            alert("Preencha todos os dados");
          } else {
            register(emailRegister.toLowerCase(), passwordRegister);
          }
        }}
      >
        <label className="relative block mt-10">
          <IconUserFilled className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border-2 border-gray-400/50 p-3 pr-10 rounded-full"
            value={emailRegister}
            onChange={(e) => setEmailRegister(e.target.value)}
          />
        </label>

        <label className="relative block mt-5">
          <IconLockFilled className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="password"
            placeholder="Senha"
            className="w-full border-2 border-gray-400/50 p-3 pr-10 rounded-full"
            value={passwordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          />
        </label>
        <button className="border-2 w-full rounded-full p-3 mt-4 bg-white text-black font-semibold cursor-pointer">
          Registrar
        </button>
      </form>
    </>
  );
};

export default Register;
