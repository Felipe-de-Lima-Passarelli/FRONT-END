import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/img/logo.svg" alt="logo" width={200} height={200} />
      <h2 className=" text-4xl font-semibold text-center my-20">
        How&apos;s the sky looking today?
      </h2>
    </header>
  );
};

export default Header;
