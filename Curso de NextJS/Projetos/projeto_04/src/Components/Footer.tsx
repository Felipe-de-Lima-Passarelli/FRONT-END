const Footer = () => {
  return (
    <div className="fixed bottom-0 left-[0.5%] w-full z-50 bg-linear-to-r from-[#AF2896] to-[#509BF5] px-6 py-4">
      <div className="max-w-screen-7xl mx-auto flex items-center justify-between">
        <div className="text-white">
          <p className="text-sm font-semibold">
            Testar Spotify Premium de graça
          </p>
          <p className="text-sm opacity-90">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
          Inscreva-se grátis
        </button>
      </div>
    </div>
  );
};

export default Footer;
