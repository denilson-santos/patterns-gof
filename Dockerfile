# Stage 1 - Build
FROM node:16.16 as build

WORKDIR /usr/app

RUN apt-get update -y && \ 
  npm install --location=global npm@latest

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .
  
RUN npm run build

# Stage 2 - Production
FROM node:16.16-alpine as production

WORKDIR /usr/app

RUN apk update && \ 
  npm install --location=global npm@latest

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY --from=build /usr/app/dist ./dist

RUN chown -R node:node .

USER node

EXPOSE 3333

CMD ["node", "./dist/src/index.js"]