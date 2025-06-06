import { useState } from "react";

const FormState = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        onFocus={() => console.log("Foquei")}
        onBlur={() => console.log("Desfoquei")}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        onKeyDown={(e) => {
          console.log(e.key);
        }}
      />
    </div>
  );
};

export default FormState;
