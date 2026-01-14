# 🎧 Spotify UI Clone — Next.js

Este projeto é um **clone da interface do Spotify**, desenvolvido com **Next.js**, com foco em **componentização, organização de layout e boas práticas de Front-End**.

O objetivo principal foi treinar a construção de interfaces complexas e escaláveis, simulando a estrutura de uma aplicação real.

---

## 🚀 Demonstração

> Interface inspirada no Spotify Web, com header fixo, sidebar, grid dinâmico de categorias e footer promocional.

---

## 🧠 Tecnologias utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Tabler Icons**

---

## ⚙️ Funcionalidades

- 🎨 Clone visual da interface do Spotify
- 🧩 Componentização clara e reutilizável
- 📊 Renderização dinâmica de cards a partir de dados centralizados
- 🖼️ Otimização de imagens com `next/image`
- 🧱 Layout fixo com Header e Footer
- 🛡️ Tipagem com TypeScript

> ⚠️ Este projeto não possui funcionalidades de player ou integração com API do Spotify.

---

## 🏗️ Estrutura do projeto

```bash
src/
├── app/
│   └── page.tsx          # Página principal
├── Components/
│   ├── Header.tsx
│   ├── Main.tsx
│   ├── Footer.tsx
│   └── Cards.tsx
├── data/
│   └── logoData.ts       # Dados das categorias
└── public/
    └── img/              # Imagens das categorias
```

---

# Clone o repositório

git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta

cd seu-repositorio

# Instale as dependências

npm install

# Rode o projeto

npm run dev

Acesse em:  
👉 http://localhost:3000

---

## 💡 Principais aprendizados

- Organização de layout em aplicações grandes
- Importância da separação de responsabilidades
- Renderização dinâmica com base em dados
- Uso de TypeScript para evitar erros de props
- Componentização pensando em reuso e manutenção

---

## 📌 Próximos passos

- Melhorar responsividade (mobile-first)
- Refinar acessibilidade
- Criar estados de hover mais próximos do real
- Integrar com API futuramente

---

## 👨‍💻 Autor

**Felipe de Lima Passarelli**  
Desenvolvedor Front-End focado em evolução contínua e boas práticas.

---

## 📄 Licença

Este projeto está sob a licença MIT.
