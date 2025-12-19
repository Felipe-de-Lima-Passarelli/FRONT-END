//Icones
import { IconSearch } from "./Icons";

//Components
import Button from "./Button";

const SearchBar = () => {
  return (
    <div className="border-2 border-gray-600 rounded-full flex flex-row items-center px-3 py-2 w-full max-w-2xl mx-auto shadow shadow-gray-800">
      <input
        className="w-full focus:outline-none px-2"
        type="text"
        placeholder="Digite sua pesquisa"
      />
      <span className="bg-red-400 rounded-xl">
        <Button
          Icon={IconSearch}
          text=""
          label="Ícone de Pesquisa"
          size={28}
          color="white"
          noBorder
        />
      </span>
    </div>
  );
};

export default SearchBar;
