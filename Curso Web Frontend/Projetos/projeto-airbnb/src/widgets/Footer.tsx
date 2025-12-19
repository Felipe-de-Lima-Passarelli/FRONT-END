//Next
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="container py-8 mx-auto">
        <p className="text-lg font-semibold pb-1">&copy; AirBnb INC</p>
        <ul className="flex flex-row gap-4">
          <li>
            <Link className="hover:text-red-500" href="/">
              Privacidade
            </Link>
          </li>
          <>&middot;</>
          <li>
            <Link className="hover:text-red-500" href="/">
              Termos
            </Link>
          </li>
          <>&middot;</>
          <li>
            <Link className="hover:text-red-500" href="/">
              Mapa do site
            </Link>
          </li>
          <>&middot;</>
          <li>
            <Link className="hover:text-red-500" href="/">
              Informações da empresa
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
