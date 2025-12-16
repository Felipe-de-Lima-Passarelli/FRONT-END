/*
  BREAK POINTS - Responsividade
  sm - 640px
  md - 768px
  lg - 1024px
  xl - 1280px
  2xl - 1536px
*/

const Page = () => {
  return (
    <div>
      <h1
        className="bg-slate-300 text-5xl p-3 text-white
      md:bg-orange-300
      lg:bg-blue-800
      xl:bg-yellow-300
      2xl:bg-purple-800"
      >
        Página com Responsividade
      </h1>
    </div>
  );
};

export default Page;
