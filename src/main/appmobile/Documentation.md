# Documentação da parte mobile do projeto

## Managed Workflow no Expo

<h3 align="center">Projeto AppMobile</h3>
<p align="center">
  <a href="#-projeto">Estratégias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-colaborador">Colaboradores</a>
</p>

### 📱 Telas:

#### Tela de Welcome

<img src="https://user-images.githubusercontent.com/63603061/203981617-78453c64-e3eb-48fb-832e-fd473a051d39.png" width=20% padding-right:800px>


#### Tela de Sign In

<img src="https://user-images.githubusercontent.com/63603061/203981617-78453c64-e3eb-48fb-832e-fd473a051d39.png" width=20% padding-right:800px>


#### Tela de Sign Up

<img src="https://user-images.githubusercontent.com/63603061/203982032-993cedae-38c7-4370-a99d-d33b5f57a3d4.png" width=20%>

#### Tela Inicial

<img src="https://user-images.githubusercontent.com/63603061/203982174-a79a8d16-04d3-4bee-99c1-bdf38c96540b.png" width=20%>

#### Tela de Detalhes do Evento

<img src="https://user-images.githubusercontent.com/63603061/203981617-78453c64-e3eb-48fb-832e-fd473a051d39.png" width=20%>

#### Tela de Edição do Perfil

<img src="https://user-images.githubusercontent.com/63603061/203982296-1bede706-4e9e-4315-8e76-2080a62cf58c.png" width=20%>

### 📱 Tela especial do gestor

#### Tela de Criação do Evento

<img src="https://user-images.githubusercontent.com/63603061/204378457-ad5ce43e-97b7-4da0-8561-2072acec41c5.png"
 width=20%>

## 📱 Projeto - Mobile

O Events Management consiste em um projeto de manuseamento de eventos, tais como: Criar eventos, anunciar, permitir que as pessoas possam se inscrever em eventos que sejam do seu interesse e diversas outras funcionalidades.




### ✨ Tecnologias


- [react-native](https://reactnative.dev/)
- [typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md)
- [phosporicons](https://phosphoricons.com/)
- [react-navigation](https://reactnavigation.org/)
- [react-hook-form](https://react-hook-form.com/)
- [AsyncStorage](https://reactnative.dev/docs/asyncstorage)
- [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Expo VectorIcons](https://github.com/expo/vector-icons)
- [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

### 🚀 Como Executar:

1. Baixar o [Node.js](https://nodejs.org/en/) e o [expo](https://expo.dev/) na máquina
2. Além disso, baixar o [git](https://git-scm.com/) para a sua máquina e conectar com seu github.
3. Clonar o repositório `git clone`
4. Utilizar `cd` para ir para a pasta do AppMobile no terminal do VSCode
5. Usar `npm install` para baixar as dependências
6. Por fim, rodar `expo start` no terminal do VSCode para rodar o app no seu dispositivo
7. Alem disso utilizar `cd` para ir para a pasta image-backend-master no terminal do VSCode
   obs1: essa pasta esta encaregada de salvar as imagens baixadas para a criação de novos eventos
8. Por fim rodar `nodemon index.js` no terminal do VSCode

obs2: não esquecer de execuntar junto o back-end.



<br>

## 🚀 Como executar

- Clone o repositório
- Instale o [Node.js + NPM](https://nodejs.org/en/download/)
- Rode o comando `npm install` no terminal para adicionar todas as dependencias
- Inicie o servidor com `npm run dev` no terminal

Agora você pode acessar [`localhost:3000`](http://localhost:3000) no seu navegador ou o link que o VITE sugerir.

<br>

---
<h3 align="center">Explicação das pastas do Mobile</h3>



<h4>📂 assets</h4>
<p>Dentro dessa pasta nós temos todos os utilitários da nossa aplicação, tais como:</p>
<ul>
 <li>images (Todas as imagens estáticas usadas no nosso Mobile)</li>
 <li>schemas (Pasta que contém os schemas de validação de todos os formulários presentes na aplicação)</li>
</ul>

<h4>📂 configs</h4>
<p>Dentro dessa pasta nós temos todos as coisas mais importantes da nossa aplicação que fazem o auxilio na integração entre o Mobile e Backend, tais como:</p>
<ul>
 <li>hooks (O React tem a possibilidade de criar custom hooks, que básiamente são hooks feitos pelo desenvolvedor, nessa pasta nós temos os hooks que vão auxiliar na nossa requisição de dados de maneira bem peformática)</li>
 <li>requests (Antes de usarmos os hooks, precisamos criar as funções para cada requisição especifica com o auxílio do nosso querido Axios, todas as requisições da plataforma estão presentes nessa pasta)</li>
 <li>types (Já que estamos usando o TypeScript, temos que ter as tipagens adequeadas e corretas para cada coisa da nossa aplicação, nessa pasta contém as tipagens que mais são utilizadas pela aplicação)</li>
</ul>

<h4>📂 screens</h4>
<p>Dentro dessa pasta nós temos todas as telas que existem atualmente na nossa aplicação que são: </p>
<ul>
  <li>Perfil (Tela de visualização dos dados cadastrados do  usuário)</li>
  <li>Edit (Tela de configurações do usuário, para alterar suas informações pessoais)</li>
  <li>CreateEvent (Tela que o Admin pode criar eventos para serem exibidos na plataforma)</li>
  <li>EventDetails (Tela que mostra os detalhes de um evento especifico da plataforma)</li>
  <li>LoginPage (Tela de Login, para que o usuário possa ter acesso a aplicação)</li>
  <li>RegisterPage (Tela de registro, para a pessoa se cadastrar e tornar-se um usuário da aplicação)</li>
  <li>Welcome (Tela inicial do app)</li>
  <li>Sistem (Tela responsavel para fazer logout ou guiar para a tela de Edit)</li>
</ul>

<h4>📂 routes</h4>
<p>Dentro dessa pasta nós temos temos o sistema de roteamento completo da nossa aplicação, para a versão mobile foi criado dois tipos de  rotas, uma para rotas autenticação de usuario(auth.routes) e outra para usuarios autenticados(app.routes):</p>
<br>
<p>Rotas de autenticação</p>
<ul>
  <li>Welcome</li>
  <li>LoginPage</li>
  <li>RegisterPage</li>
</ul>
<br>
<p>Rotas autenticadas</p>
<ul>
  <li>Home</li>
  <li>CreateEvent</li>
  <li>Perfil</li>
  <li>Sistem</li>
  <li>Edit</li>
  <li> EventDetails</li>
</ul>

<h4>📂 services</h4>
<p>Para finalizar, dentro dessa pasta temos a conexão com a nossa api criada pelo backend, utilizamos o axios e passamos a url da api para podermos ter acesso aos dados dela, com isso, conseguimos fazer todas as manipulações de dados que precisarmos na parte do Mobile.</p>

---

<br>

### 👥 Colaboradores

#### Nome: Henrique Lira da Silva

- Registro do Aluno (RA): 00000004287
- GitHub: [HenriqueLira](https://github.com/gareky1)

#### Nome: Djalma Henrique Silva Lima

- Registro do Aluno (RA): 00000003109
- GitHub: [djalmahenry](https://github.com/djalmahenry)

#### Nome: Ronny Lima Ribeiro da Silva

- Registro do Aluno (RA): 00000009775
- GitHub: [ronnylrsd](https://github.com/ronnylrsd)
