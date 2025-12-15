interface inputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, placeholder, value, onChange }: inputProps) => {
  return (
    <div>
      <input
        type={type}
        className="meuInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
