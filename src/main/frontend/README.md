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

## 💻 Projeto - Frontend

O Events Management consiste em um projeto de manuseamento de eventos, tais como: Criar eventos, anunciar, permitir que as pessoas possam se inscrever em eventos que sejam do seu interesse e diversas outras funcionalidades.

<br>

## 🔖 Layout

Você pode visualizar o layout da aplicação através [desse link](https://www.figma.com/file/B9yKSnYAIhLejFAc3JP5tf/Project?node-id=6%3A2813&t=OAajRRVRoOJrJG0h-0).

<br>

## 🚀 Como executar

- Clone o repositório
- Instale o [Node.js + NPM](https://nodejs.org/en/download/)
- Rode o comando `npm install` no terminal para adicionar todas as dependencias
- Inicie o servidor com `npm run dev` no terminal

Agora você pode acessar [`localhost:3000`](http://localhost:3000) no seu navegador ou o link que o VITE sugerir.

<br>

---
<h3 align="center">Explicação das pastas do frontend</h3>

<h4>📂 components</h4>
<p>Como nós sabemos, o react é famoso por sua componentização, com isso, nesta pasta estão todos os componentes que podem ser reutilizados por todoa os locais que forem necessários da aplicaçao, dentro dela temos vários componentes já criados:</p>
<ul>
 <li>TextInput (Componente de Input para usarmos nos formulários)</li>
 <li>Carousel (Carousel responsivo para mostrarmos os eventos em destaque da aplicação)</li>
 <li>ButtonForm (Botão usado em grande parte da aplicação, tanto nos formulários quanto em outras ocasiões também)</li>
 <li>EventCard (Card que mostra os eventos e suas informações, para tratar e mostar ao usuário dados que vem do Backend)</li>
 <li>Diversos outros que estão nessa pasta de components</li>
</ul>

<h4>📂 assets</h4>
<p>Dentro dessa pasta nós temos todos os utilitários da nossa aplicação, tais como:</p>
<ul>
 <li>images (Todas as imagens estáticas usadas no nosso frontend)</li>
 <li>masks (Consite na pasta que temos nossas máscaras de formatação, por exemplo o a formatação do CPF)</li>
 <li>schemas (Pasta que contém os schemas de validação de todos os formulários presentes na aplicação)</li>
 <li>themes (Contém o tema global de toda a aplicação, com variáveis que podem ser utilizadas por toda parte)</li>
</ul>

<h4>📂 configs</h4>
<p>Dentro dessa pasta nós temos todos as coisas mais importantes da nossa aplicação que fazem o auxilio na integração entre o Frontend e Backend, tais como:</p>
<ul>
 <li>hooks (O React tem a possibilidade de criar custom hooks, que básiamente são hooks feitos pelo desenvolvedor, nessa pasta nós temos os hooks que vão auxiliar na nossa requisição de dados de maneira bem peformática)</li>
 <li>requests (Antes de usarmos os hooks, precisamos criar as funções para cada requisição especifica com o auxílio do nosso querido Axios, todas as requisições da plataforma estão presentes nessa pasta)</li>
 <li>types (Já que estamos usando o TypeScript, temos que ter as tipagens adequeadas e corretas para cada coisa da nossa aplicação, nessa pasta contém as tipagens que mais são utilizadas pela aplicação)</li>
</ul>

<h4>📂 pages</h4>
<p>Dentro dessa pasta nós temos todas as telas que existem atualmente na nossa aplicação cada arquivo está relacionado ao seu componente lá da pasta de components para uma melhor organização, os componentes são:</p>
<ul>
  <li>CartPage (Tela de carrinho, onde o usuário irá realizar o pagamento da inscrição em eventos pagos)</li>
  <li>ConfigsPage (Tela de configurações do usuário, para alterar suas informações pessoais)</li>
  <li>CreateEventPage (Tela que o Admin pode criar eventos para serem exibidos na plataforma)</li>
  <li>EventDetailsPage (Tela que mostra os detalhes de um evento especifico da plataforma)</li>
  <li>HomePage (Tela principal, que teremos os destaques, filtros e todos os eventos listados)</li>
  <li>LoginPage (Tela de Login, para que o usuário possa ter acesso a aplicação)</li>
  <li>RegisterPage (Tela de registro, para a pessoa se cadastrar e tornar-se um usuário da aplicação)</li>
</ul>

<h4>📂 routes</h4>
<p>Dentro dessa pasta nós temos temos o sistema de roteamento completo da nossa aplicação, no arquivo AllRoutes existe uma função para que possamos tornar uma rota privada, ou seja, apenas Administradores e pessoas com permissão podem ter acesso, essas rotas são as seguintes:</p>
<br>
<p>Rotas públicas</p>
<ul>
  <li>EventDetailsPage</li>
  <li>HomePage</li>
  <li>LoginPage</li>
  <li>RegisterPage</li>
</ul>
<br>
<p>Rotas privadas</p>
<ul>
  <li>ConfigsPage</li>
  <li>CreateEventPage</li>
</ul>

<h4>📂 services</h4>
<p>Para finalizar, dentro dessa pasta temos a conexão com a nossa api criada pelo backend, utilizamos o axios e passamos a url da api para podermos ter acesso aos dados dela, com isso, conseguimos fazer todas as manipulações de dados que precisarmos na parte do frontend.</p>

---

<br>

<h3 align="center">Estruturamento completo do frontend</h3>

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

---

<h3>👥 Desenvolvedores:</h3>

#### Nome: Danilo Jean da Silva
- Registro do Aluno (RA): 00000029709
- GitHub: [gigazin](https://github.com/gigazin)

#### Nome: Davi Mateus Gomes de Almeida
- Registro do Aluno (RA): 00000009960
- GitHub: [davimateus1](https://github.com/davimateus1)
- Linkedin: [Davi Mateus](https://www.linkedin.com/in/davimateusg/)
