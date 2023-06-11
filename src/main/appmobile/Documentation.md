# Documentação da parte mobile do projeto

## Managed Workflow no Expo

<h3 align="center">Projeto AppMobile</h3>
<p align="center">
  <a href="#-projeto-mobile">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-colaboradores">Colaboradores</a>
</p>

### 📱 Telas:



#### Tela de Welcome

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/ad4eb0f4-0561-40a6-9683-f8b880f3502a" width=20% padding-right:800px>

#### Tela de Sign In

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/d7d75257-d98a-4952-a808-85c5625632af" width=20% >

#### Tela de Sign Up

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/f47b43ff-699f-46b3-b2ec-a096ea40838b" width=20%>

#### Tela Home

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/37b9c52e-df1c-4996-9560-17ff4f59f4ed" width=20%>

#### Tela de Detalhes do Evento

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/0c133d50-cab0-4253-9de5-fbfbba3be91e" width=20%>
<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/c8c26d8e-c779-4446-83d2-fe3023961970" width=20%>

#### Tela de Perfil

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/58a71418-e9dc-4b65-aa7b-be95b73fddb7" width=20%>

#### Tela de Edição do Perfil

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/f7e5866e-b61a-4ea7-9ebb-31c1d586aac8" width=20%>

#### Tela de Criação do Evento

<img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/0198a1c5-2d76-4fad-8b97-052d84837c43"
 width=20%>
 <img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/254f4a32-f79c-4696-8bb0-3717fdd78381"
 width=20%>
 
 #### Tela Sistem

  <img src="https://github.com/c3-disciplina-pd/2023_1-desenvolvimento-do-projeto-gestao-de-eventos/assets/71337932/4f2995fa-58e3-4733-b8a9-ee84365271e5"
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

### 🚀 Como Executar

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

#### Nome: Bruno Vicente Ferreira

- Registro do Aluno (RA): 00000002413
- GitHub: [ferreirabrunno](https://github.com/ferreirabrunno)

#### Nome: Djalma Henrique Silva Lima

- Registro do Aluno (RA): 00000003109
- GitHub: [djalmahenry](https://github.com/djalmahenry)

#### Nome: Ronny Lima Ribeiro da Silva

- Registro do Aluno (RA): 00000009775
- GitHub: [ronnylrsd](https://github.com/ronnylrsd)
