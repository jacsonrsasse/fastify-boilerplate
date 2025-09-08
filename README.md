# Fastify Boilerplate

Simple Fastify project boilerplate, with swagger and tests already setup.

<h3>Table of Contents</h3>

- [Fastify Boilerplate](#fastify-boilerplate)
  - [Getting Started](#getting-started)
    - [Using Docker](#using-docker)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)

## Getting Started

To get start with the project, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`, `pnpm install` or `yarn install`
3. Start the development server: `npm run dev`, `pnpm run dev` or `yarn dev`

### Using Docker

You can use `docker compose up` to setup you dev environment at once. Take a look to the `docker-compose.yml`, this file initiates:

- Database, using Postgres 16;
- App, building the image and configuring the hot reload. To do this, we use the `Dockerfile.dev`;

Also, this projects has a `Dockerfile` with multistaging build, for a production image. And, last but not least, there is a `makefile` to help build this production image, create a container to test it, and turn everything down if you needed.

## Project Structure

The project is structured as follows:

- `src/`: Source code directory
  - `app.ts`: Fastify app instance
  - `routes/`: API routes directory
  - `controllers/`: API controllers directory
  - `services/`: API services directory
  - `env/`: Environment variables validation and helper, using `zod`
- `dist/`: Compiled code directory
  - Run `pnpm run build` to compile
  - Run `pnpm run start` to run compiled server

## API Documentation

The API documentation is available at `http://localhost:3000/docs` (assuming the development server is running on port 3000). Feel free to modify if you want.
