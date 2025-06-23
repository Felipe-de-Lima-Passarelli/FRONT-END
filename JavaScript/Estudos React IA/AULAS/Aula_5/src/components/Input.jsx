import styles from "./Input.module.css";

const Input = ({
  label,
  name,
  value,
  onChange,
  tipo = "text",
  placeholder,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={tipo}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
