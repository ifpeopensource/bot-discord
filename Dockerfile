FROM  node:16.9-alpine as builder

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY .env ./

RUN yarn install

COPY . .

RUN yarn build

FROM  node:16.9-alpine as runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/dist ./dist

RUN yarn install --production

CMD ["yarn", "start"]
