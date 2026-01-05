const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} • Projeto desenvolvido por
        <a href="https://github.com/Felipe-de-Lima-Passarelli" target="_blank">
          <span className="text-gray-200 ml-1 font-semibold">
            Felipe de Lima Passarelli
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
