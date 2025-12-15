import Link from "next/link";

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem = ({ text, href }: NavItemProps) => {
  return (
    <Link href={href} className="p-2">
      {text}
    </Link>
  );
};

export default NavItem;
