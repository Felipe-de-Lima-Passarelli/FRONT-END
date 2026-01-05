//Type Annotation
interface buttonProps {
  text: string;
  className: string | boolean;
  funct: (text: string) => void;
}

const Button = ({ text, className, funct }: buttonProps) => {
  return (
    <button
      className={`px-7 rounded-full py-2 bg-[#2F354B] cursor-pointer ${className}`}
      onClick={() => funct(text)}
    >
      {text}
    </button>
  );
};

export default Button;
