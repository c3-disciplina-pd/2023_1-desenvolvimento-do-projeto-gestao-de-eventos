<h1 align="center">
  Events Management - Frontend Web
  <h4 align="center">Projeto de Desenvolvimento</h4>
</h1>

---

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>

<br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias até o momento:

- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Responsive Carousel](https://react-responsive-carousel.js.org/)
- [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Axios](https://axios-http.com/)
- [JS Cookie](https://www.npmjs.com/package/js-cookie)
- [YUP](https://www.npmjs.com/package/yup)


<br>

## 💻 Projeto

O Events Management consiste em um projeto de manuseamento de eventos, tais como: Criar eventos, anunciar, permitir que as pessoas possam se inscrever em eventos que sejam do seu interesse e diversas outras funcionalidades.

<br>

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/B9yKSnYAIhLejFAc3JP5tf/Project?node-id=6%3A2813&t=OAajRRVRoOJrJG0h-0).

<br>

## 🚀 Como executar

- Clone o repositório
- Instale o [Node.js + NPM](https://nodejs.org/en/download/)
- Rode o comando `npm install` no terminal para adicionar todas as dependencias
- Inicie o servidor com `npm run dev` no terminal

Agora você pode acessar [`localhost:3000`](http://localhost:3000) no seu navegador ou o link que o VITE sugerir.

<br>

---
<h3 align="center">Explicação das pastas do projeto</h3>

---

<br>

<h3 align="center">Estruturamento de pastas do projeto</h3>

```bask
├── index.html
├── package.json
├── package-lock.json
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── images
│   │   │   ├── Background.svg
│   │   │   ├── Circles.svg
│   │   │   ├── DefaultImage.jpeg
│   │   │   ├── EventMock.svg
│   │   │   ├── Events.svg
│   │   │   └── UnicapLogo.png
│   │   ├── index.ts
│   │   ├── masks
│   │   │   ├── index.ts
│   │   │   └── Masks.ts
│   │   ├── schemas
│   │   │   ├── index.ts
│   │   │   └── schemas.ts
│   │   └── themes
│   │       ├── index.ts
│   │       └── Themes.ts
│   ├── components
│   │   ├── Button
│   │   │   ├── ButtonForm.tsx
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── Carousel
│   │   │   ├── Carousel.tsx
│   │   │   └── index.ts
│   │   ├── Configs
│   │   │   ├── ConfigsScreen.tsx
│   │   │   └── index.ts
│   │   ├── CreateEvent
│   │   │   ├── CreateEventComponent.tsx
│   │   │   └── index.ts
│   │   ├── EventCard
│   │   │   ├── EventCard.tsx
│   │   │   └── index.ts
│   │   ├── EventDetails
│   │   │   ├── EventDetailsComponent.tsx
│   │   │   └── index.ts
│   │   ├── Filter
│   │   │   ├── Filter.tsx
│   │   │   └── index.ts
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── Home
│   │   │   ├── HomeComponent.tsx
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── Input
│   │   │   ├── index.ts
│   │   │   ├── Input.tsx
│   │   │   └── types.ts
│   │   ├── Login
│   │   │   ├── index.ts
│   │   │   ├── LeftScreenLogin.tsx
│   │   │   └── LoginComponent.tsx
│   │   ├── Navbar
│   │   │   ├── index.ts
│   │   │   ├── Navbar.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── utils.ts
│   │   ├── Register
│   │   │   ├── index.ts
│   │   │   ├── LeftScreenRegister.tsx
│   │   │   └── RegisterComponent.tsx
│   │   └── RightPartScreen
│   │       ├── index.ts
│   │       └── RightPartScreen.tsx
│   ├── configs
│   │   ├── hooks
│   │   │   ├── index.ts
│   │   │   ├── useEvents.tsx
│   │   │   ├── useFunctionUsers.tsx
│   │   │   └── useLogin.tsx
│   │   ├── index.ts
│   │   ├── requests
│   │   │   ├── auth.ts
│   │   │   ├── events.ts
│   │   │   └── index.ts
│   │   └── types
│   │       ├── index.ts
│   │       └── types.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── ConfigsPage.tsx
│   │   ├── CreateEventPage.tsx
│   │   ├── EventDetailsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── index.ts
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── routes
│   │   ├── AllRoutes.tsx
│   │   └── index.ts
│   ├── services
│   │   ├── api.ts
│   │   └── index.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
