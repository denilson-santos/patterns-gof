# Stage 1
FROM node:16.16-alpine as base

RUN apk update \ 
  && npm install --location=global npm@latest

WORKDIR /usr/app

EXPOSE 3333

# Stage 2
FROM base as production

COPY package*.json ./

RUN npm install --production \
  && npm run build

COPY /dist ./

RUN chown -R node:node .

USER node

CMD ["node", "dist/index.js"]