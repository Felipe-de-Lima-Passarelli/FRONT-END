"use client";

//Next
import Image from "next/image";

const Header = () => {
  function ThemeToggle() {
    document.documentElement.classList.toggle("light");
  }

  return (
    <div className="w-265 m-auto h-16 py-2 px-4 bg-[#1F2535] rounded-2xl relative">
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={200}
        height={200}
      />
      <button
        className="absolute top-1.5 left-249 rounded-xl bg-[#353950] cursor-pointer"
        onClick={() => ThemeToggle()}
      >
        <Image
          src="/assets/images/icon-sun.svg"
          alt="logo"
          width={50}
          height={50}
          className="p-2"
        />
      </button>
    </div>
  );
};

export default Header;
