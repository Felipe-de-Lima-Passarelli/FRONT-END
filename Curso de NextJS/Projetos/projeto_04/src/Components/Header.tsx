// Icons
import { IconHomeFilled, IconSearch } from "@tabler/icons-react";

// Next
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-2.5 w-full z-50">
      <div className="flex flex-row gap-[0.5%] mb-[0.5%]">
        <div className="flex flex-col bg-[#121212] w-[20%] px-[2%] pt-[2%] pb-[1%] rounded-xl">
          <Image
            src="/img/Spotify-logo.png"
            alt="Logo Spotify"
            width={80}
            height={30}
            className="cursor-pointer"
          />
          <div className="flex flex-col gap-2 mt-[8%]">
            <div className="flex flex-row gap-2 cursor-pointer">
              <IconHomeFilled size={20} />
              <p className="font-semibold opacity-50">Início</p>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <IconSearch size={20} />
              <p className="font-semibold opacity-50">Buscar</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-[#121212] w-[77.95%] h-20 rounded-xl justify-between items-center px-[2%]">
          <div className="text-2xl flex flex-row gap-3">
            <button className="bg-black py-[20%] px-[40%] rounded-full cursor-pointer">
              &lt;
            </button>
            <button className="bg-black py-[20%] px-[40%] rounded-full cursor-pointer">
              &gt;
            </button>
          </div>
          <div className="bg-[#242424] p-[1%] rounded-full w-[40%] relative border border-transparent hover:border-white transition-colors duration-100">
            <IconSearch className="absolute top-[28%] left-[2%]" />
            <input
              type="text"
              placeholder="O que você quer ouvir?"
              className="w-full ml-[5%] focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-row gap-8">
            <button className="font-semibold text-md opacity-50 transition duration-150 transform hover:scale-105 hover:opacity-100">
              Inscrever-se
            </button>
            <button className="font-semibold text-md bg-white text-black py-2 px-5 rounded-full border-2 border-gray-500 transition duration-150 transform hover:scale-105">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
