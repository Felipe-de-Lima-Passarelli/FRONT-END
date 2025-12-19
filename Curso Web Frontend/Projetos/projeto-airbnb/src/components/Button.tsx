import { ElementType } from "react";

interface buttonProps {
  Icon: ElementType;
  text: string;
  label: string;
  size: number;
  color?: string;
  noBorder?: boolean;
  opacity?: boolean;
  className?: boolean;
}

const Button = ({
  Icon,
  text,
  label,
  size,
  color,
  noBorder,
  opacity,
  className,
}: buttonProps) => {
  return (
    <button
      className={`rounded-xl px-1 py-1 flex flex-row justify-center items-center gap-1 ${
        noBorder ? "border-none" : "border-2 hover:border-gray-400"
      } ${opacity ? "opacity-65" : "opacity-100"}`}
    >
      <Icon
        aria-label={label}
        size={size}
        color={color}
        className={className ? "hover:text-white hover:opacity-100" : ""}
      />
      {text}
    </button>
  );
};

export default Button;
