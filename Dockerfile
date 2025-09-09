FROM node:22-slim as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npm prune --omit=dev

## Optimize production build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "./dist/server.js"]