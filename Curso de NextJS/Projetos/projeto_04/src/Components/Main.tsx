//Components
import Cards from "./Cards";

//Datas
import logoData from "@/data/logoData";

//Icons
import { IconBook2, IconPlus, IconWorld } from "@tabler/icons-react";

const Main = () => {
  const data = Object.entries(logoData);

  return (
    <main>
      <div className="flex flex-row gap-100">
        <div className="fixed top-45 left-2.5 flex flex-col bg-[#121212] w-[20%] pt-[1.3%] px-[0.4%] pb-[0.4%] rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center cursor-pointer">
              <IconBook2 />
              <p className="font-semibold opacity-60">Minha Biblioteca</p>
            </div>
            <IconPlus className="cursor-pointer opacity-60" />
          </div>
          <div className="bg-[#242424] p-[4%] mt-[8%] rounded-xl">
            <h1 className="font-semibold text-md mb-[1%]">
              Crie sua primeira playlist
            </h1>
            <p className="text-sm">É fácil, vamos te ajudar.</p>
            <button className="mt-[10%] text-black font-semibold text-sm bg-white rounded-full py-[2%] px-[5%] cursor-pointer transform transition-transform duration-100 hover:scale-105">
              Criar playlist
            </button>
          </div>
          <div className="px-[4%] pt-[10%]">
            <p className="cursor-pointer text-sm opacity-50 mb-[12%] hover:underline w-[18%]">
              Cookies
            </p>
            <button className="flex flex-row gap-2 items-center cursor-pointer border border-[#878787] py-[2%] px-[6%] rounded-full">
              <IconWorld size={15} />
              <p className="text-sm">Português do Brasil</p>
            </button>
          </div>
        </div>
        <div className="absolute top-[10%] left-[21%] bg-[#121212] w-[78%] pt-[2%] pb-[1%] px-[1%] rounded-2xl">
          <h1 className="text-4xl font-semibold mb-[2%]">Boa tarde</h1>
          <p className="text-2xl font-semibold">Navegar por todas as seções</p>
          <div className="mt-[1%] grid grid-cols-2 gap-3 mb-[6%] md:grid-cols-4 xl:grid-cols-7">
            {data.map((item) => (
              <Cards
                key={item[0]}
                title={item[0]}
                img={item[1]["image"]}
                color={item[1]["bgColor"]}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
