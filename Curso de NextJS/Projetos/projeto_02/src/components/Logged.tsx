//Interface
interface loggedProps {
  setIsLogged: React.Dispatch<React.SetStateAction<number>>;
}

const Logged = ({ setIsLogged }: loggedProps) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Bem-vindo ao Sistema 👋</h1>
      <div className="mt-8 flex flex-col gap-4">
        <div className="p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
          <h2 className="text-xl font-semibold">Seu Painel</h2>
          <p className="text-sm opacity-80 mt-1">
            Acesse rapidamente as principais funcionalidades do sistema.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
            Dashboard
          </button>
          <button className="p-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
            Perfil
          </button>
          <button className="p-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
            Configurações
          </button>
          <button
            className="p-4 rounded-xl bg-red-500 text-white font-semibold hover:opacity-90 transition cursor-pointer"
            onClick={() => setIsLogged(1)}
          >
            Sair
          </button>
        </div>
      </div>
    </>
  );
};

export default Logged;
