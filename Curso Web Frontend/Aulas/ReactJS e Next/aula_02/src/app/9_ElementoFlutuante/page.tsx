/*
  Elementos Flutuantes: float-rigth / left / start / end / none
*/

import Image from "next/image";

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">
        Elementos Flutuantes
      </h1>
      <br />
      <div className="border-2 p-5 mx-auto w-200">
        <Image
          className="float-left"
          src="/img/Logo_Html.png"
          alt="Logo do HTML5"
          width={120}
          height={120}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Laborum commodi obcaecati necessitatibus odit inventore <br />
          porro expedita recusandae quisquam vel ipsa pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Laborum commodi obcaecati necessitatibus odit inventore <br />
          porro expedita recusandae quisquam vel ipsa pariatur quisquam.
        </p>
      </div>
    </div>
  );
};

export default Page;
