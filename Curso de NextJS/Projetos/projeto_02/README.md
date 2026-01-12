# Sistema de Autenticação em Next.js

Um projeto Front-End desenvolvido com **Next.js**, **React** e **TypeScript**, implementando um sistema simples de autenticação com login, registro e painel do usuário.  
O projeto utiliza **localStorage** para armazenar os usuários e alterna entre diferentes telas conforme o estado de login.

---

## 🔹 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler Icons](https://tabler-icons.io/)

---

## 🔹 Funcionalidades

- **Login**: Validação de email e senha existentes no `localStorage`.
- **Registro**: Criação de novos usuários, checando duplicidade de emails.
- **Painel do Usuário**: Tela inicial após login com botões de Dashboard, Perfil, Configurações e Logout.
- **LocalStorage**: Persistência dos dados dos usuários mesmo após atualizar a página.
- **UX Responsiva**: Layout limpo com feedback visual e mensagens de alerta.

---

## 🔹 Estrutura do Projeto

```
/components
  ├─ InicialPage.tsx    # Componente principal que gerencia os estados do sistema
  ├─ Login.tsx          # Tela de login
  ├─ Register.tsx       # Tela de registro
  └─ Logged.tsx         # Tela do usuário logado (painel)

/pages
  └─ index.tsx          # Página inicial que carrega InicialPage
```

---

## 🔹 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

---

## 🔹 Autor

**Felipe de Lima Passarelli**  
Desenvolvedor Front-End | Entusiasta de Next.js e boas práticas de React

---

## 🔹 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
