# NestJS NestJS REST API boilerplate LITE
<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
<p align="center">
NestJS REST API boilerplate LITE with TypeORM, Jest, OAuth, Logging, Swagger docs.
</p>

## Description
Clone from [americano212/nestjs-rest-api-boilerplate](https://github.com/americano212/nestjs-rest-api-boilerplate)

Template for quick start small new project like hackathon.

## 🔧 Features
- [x] Database(TypeORM)
  - Support DB
  - [x] Postgres
- [x] Local Authentication
- [x] OAuth(Social Login)
  - [x] [Google](https://developers.google.com/identity/protocols/oauth2)
- [x] JWT Authorization
- [x] Slack Alert when throw ERROR
- [x] Logging(winston)
- [x] Swagger
- [x] CI

<br/>

# 🔨 Getting started
## Configuration
```bash
# Create `.env` file with reference to `.env.example`
cp .env.example .env
```

## Init project
```bash
# 1. Install Nest CLI 
npm i -g @nestjs/cli
# 2. Install node_modules
npm ci
# 3. Setup databases by docker
npm run dev:docker:up
# 4. Load entity
npm run entity:sync
# 5. Seeding(Load Role with Super Admin)
npm run seed:run
```

## Development
- Set `NODE_ENV='development'` in `.env`
```bash
npm run start:dev
```

## Production
- Set `NODE_ENV='production'` in `.env`
```bash
npm start
```

## Database utils

```bash
# 1. When project init, synchronize Entities to Database
npm run entity:sync
# 2. [Warning] When you need to erase ALL Database, DROP ALL Exist table.
npm run entity:drop
```
