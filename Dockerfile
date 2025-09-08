FROM node:22 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

## Optimize production build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/package.json ./package.json

RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "./dist/server.js"]