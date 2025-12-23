//Next
import Link from "next/link";

const Button = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
    >
      {text}
    </Link>
  );
};

export default Button;
