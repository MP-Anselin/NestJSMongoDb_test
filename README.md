<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

The project aim's to develop un API with nest JS and mongodb on this app we fund routes:<br>
{ route: { path: '/', method: 'get' } }, <br>
{ route: { path: '/users', method: 'get' } },<br>
{ route: { path: '/users/:id', method: 'get' } },<br>
{ route: { path: '/users/:id', method: 'patch' } },<br>
{ route: { path: '/users/:id', method: 'delete' } },<br>
{ route: { path: '/auth/login', method: 'post' } },<br>
{ route: { path: '/auth/signup', method: 'post' } },<br>
{ route: { path: '/auth/logout/:userId', method: 'get' } },<br>
{ route: { path: '/posts/create', method: 'post' } },<br>
{ route: { path: '/posts', method: 'get' } },<br>
{ route: { path: '/posts/:id', method: 'get' } },<br>
{ route: { path: '/posts/:id', method: 'patch' } },<br>
{ route: { path: '/posts/:id', method: 'delete' } }<br>

Auth : <br>
{ route: { path: '/auth/signup', method: 'post' } },<br>
{ route: { path: '/auth/login', method: 'post' } },<br>
{ route: { path: '/auth/logout/:userId', method: 'get' } },<br>

sign up, create a user on the database, { path: '/auth/signup', method: 'post' }<br>
params example =>

```bash
                      "first_name": "test0.1",
                      "last_name": "test0.1",
                      "username": "test0.1",
                      "email": "test0.1@gmail.com",
                      "password": "12345678"
```

Log-in, give the current user if existed on the database { path: '/auth/login', method: 'post' }<br>
params example =>

```bash
                      "username": "test0.1",
                      "password": "12345678"
```

Log out, close the account of the current user { path: '/auth/logout/:userID', method: 'get' }<br>
Header example =>

```bash
                      [{"key":"Authorization","value":"Bearer tokenId"}]
```

params example =>

```bash
                      users/auth/logout/34858783-0ef5-4992-8a43-e3daf85a6009
```

Posts : <br>
{ route: { path: '/posts/create', method: 'post' } },<br>
{ route: { path: '/posts', method: 'get' } },<br>
{ route: { path: '/posts/:id', method: 'get' } },<br>
{ route: { path: '/posts/:id', method: 'patch' } },<br>
{ route: { path: '/posts/:id', method: 'delete' } }<br>

Create a post by id { path: '/posts/create', method: 'post' } <br>
Header example =>
```bash
                      [{"key":"Authorization","value":"Bearer tokenId"}]
```
params =>
```bash
                      "userId": "6110eba3f8e4e3200105abf0",
                      "title": "test 2 delete",
                      "description": "I'm a test 2 to delete"
```

Get all posts { path: '/posts', method: 'get' }<br>
Header example =>

```bash
                      [{"key":"Authorization","value":"Bearer tokenId"}]
```

Get a post by id path: '/posts/:id', method: 'get' } <br> 
Header example =>
```bash
                      [{"key":"Authorization","value":"Bearer tokenId"}]
```
params =>
```bash
                      http://localhost:8080/posts/610fcf1d06117ef9c46140c0
```

Update, update the fields (title, description) of a post { path: '/posts/:id', method: 'patch' }
params example =>
```bash
                      posts/611154f2022918d069a68deb
                      "username": "test2_patch",
                      "email": "test2.1_patch@gmail.com"
```

Update, remove a post { path: '/posts/:id', method: 'delete' }
Header example =>
```bash
                      [{"key":"Authorization","value":"Bearer tokenId"}]
```
params example =>
```bash
                      posts/611154f2022918d069a68deb
                      "username": "test2_patch",
                      "email": "test2.1_patch@gmail.com"
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

## On Docker

```bash
$ docker-compose up
```

## Run test

```bash
npm run test:watch
```

## Stay in touch

- Author - Anselin Mackendy-Pierre
- linkedin - https://www.linkedin.com/in/mp-anselin-827027167/