# ContactApp

O ContactApp é um Projeto Web de gerenciamento de contatos, nele é possível você criar uma conta pessoal
e ao realizar o login, é possível fazer o cadastro de seus contatos.

## Aplicações

O Projeto possui as seguintes aplicações:

Login Page: Página onde o cliente irá realizar o login com sua conta cadastrada.\
Register Page: Página onde o novo cliente irá realizar o seu cadastro.\
Dashboard: Página acessada após o cliente realizar o login, nela há várias funcionalidades:
  - Botão onde é possivel realizar a inclusão de novos contatos em sua agenda.
  - Atualizar contatos: Em cada contato cadastrado há um botão onde irá abrir um modal com todas as informações do mesmo,
e é possível realizar a atualização caso haja ou até mesmo fazer a exclusão.
  - Botão onde irá abrir um modal com todas as informações do cliente logado.
  - Botão com a finalidade de realizar o logoff.

## Passo a passo para executar o projeto

1 - Para realizar a execução do projeto é necessário instalar as dependências utilizando os comandos abaixo:
```bash
# Caso use o npm
npm install

# Caso use o yarn
yarn
```

2 - Após a instalação das dependências é necessário o comando para executar o projeto:
```bash
# Caso use o npm
npm run dev

# Caso use o yarn
yarn dev
```

3 - O Projeto está realizando as requisições com urlBase do deploy do projeto back-end desenvolvido para este projeto.\
  - Link do [repositório](https://github.com/Lisboaseyth/back-project-kenzie)\
  - urlBase do deploy: https://contact-app-x6qr.onrender.com
 
## Principais Bibliotecas e Linguagens

O Projeto usa algumas bibliotecas e linguagens fundamentais e que se destacam:

  - Typescript: Linguagem de programação de código aberto realizada para criação do projeto.
  - React: Bibiloteca de código aberto realizada para estruturação do projeto.
  - React-Router-Dom: Biblioteca utilizada para realizar o sistema de roteamento entre páginas.
  - ChakraUI: Biblioteca de componentes.
  - Axios: Biblioteca para realizar requisições com a nossa API.
  - Yup: Biblioteca para validação de campos.
