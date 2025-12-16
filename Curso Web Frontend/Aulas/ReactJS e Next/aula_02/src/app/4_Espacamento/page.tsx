/*
  padding: p-numero ou p-[16px]
  padding-top: pt-numero
  padding-right: pr-numero
  padding-bottom: pb-numero
  padding-left: pl-numero
  padding top and bottom: py-numero
  padding right and left: px-numero

  margin: m-numero ou m-[16px]
  margin_centralizar: m-auto
  margin-top: mt-numero
  margin-right: mr-numero
  margin-bottom: mb-numero
  margin-left: ml-numero
  margin top and bottom: my-numero
  margin right and left: mx-numero
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">Espaçamento</h1>
      <br />
      <div className="bg-blue-300 p-8 h-50 w-125 m-auto rounded-md">
        Padding
      </div>
      <div className="bg-blue-500 m-8 mx-auto h-50 w-125 rounded-md">
        Margin
      </div>
    </div>
  );
};

export default Page;
