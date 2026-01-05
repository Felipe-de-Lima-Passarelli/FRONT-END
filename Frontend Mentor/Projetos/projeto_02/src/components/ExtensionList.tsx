"use client";

//Next
import Image from "next/image";
import { useState } from "react";

//Data
import data from "../data/data.json";

//Type Annotation
interface extensionListProps {
  allButton: boolean;
  activeButton: boolean;
  inactiveButton: boolean;
}

const ExtensionList = ({
  allButton,
  activeButton,
  inactiveButton,
}: extensionListProps) => {
  const [dtBase, setDtBase] = useState(data);

  //Removing datas
  const handleRemove = (name: string) => {
    setDtBase((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <>
      {allButton &&
        dtBase.map((item, index) => (
          <div
            key={index}
            className="border bg-[#1F2535] border-gray-600 rounded-xl p-4  min-w-50 flex flex-col"
          >
            <div className="flex flex-row gap-4">
              <Image src={item.logo} alt="logo" width={50} height={50} />
              <div className="flex flex-col">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="opacity-50 font-semibold">{item.description}</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-auto pt-15">
              <button
                onClick={() => handleRemove(item.name)}
                className="border py-2 px-4 rounded-xl cursor-pointer"
              >
                Remover
              </button>
              {item.isActive ? (
                <p className="text-green-600">Active</p>
              ) : (
                <p className="text-red-600">Inactive</p>
              )}
            </div>
          </div>
        ))}
      {activeButton &&
        dtBase
          .filter((item) => item.isActive === true)
          .map((item, index) => (
            <div
              key={index}
              className="border bg-[#1F2535] border-gray-600 rounded-xl p-4  min-w-50 flex flex-col"
            >
              <div className="flex flex-row gap-4">
                <Image src={item.logo} alt="logo" width={50} height={50} />
                <div className="flex flex-col">
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="opacity-50 font-semibold">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-auto pt-15">
                <button className="border py-2 px-4 rounded-xl cursor-pointer">
                  Remove
                </button>
                {item.isActive ? (
                  <p className="text-green-600">Active</p>
                ) : (
                  <p className="text-red-600">Inactive</p>
                )}
              </div>
            </div>
          ))}
      {inactiveButton &&
        dtBase
          .filter((item) => item.isActive === false)
          .map((item, index) => (
            <div
              key={index}
              className="border bg-[#1F2535] border-gray-600 rounded-xl p-4  min-w-50 flex flex-col"
            >
              <div className="flex flex-row gap-4">
                <Image src={item.logo} alt="logo" width={50} height={50} />
                <div className="flex flex-col">
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="opacity-50 font-semibold">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-auto pt-15">
                <button className="border py-2 px-4 rounded-xl cursor-pointer">
                  Remove
                </button>
                {item.isActive ? (
                  <p className="text-green-600">Active</p>
                ) : (
                  <p className="text-red-600">Inactive</p>
                )}
              </div>
            </div>
          ))}
    </>
  );
};

export default ExtensionList;
