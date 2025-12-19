//Next
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-row gap-6">
      <Link className="font-semibold" href="/">
        Acomodações
      </Link>
      <Link className="opacity-60" href="/">
        Experiências
      </Link>
    </div>
  );
};

export default Menu;
