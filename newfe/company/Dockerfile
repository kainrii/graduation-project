# Stage 1: Build
FROM node:alpine as build

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --cache

COPY . .

RUN yarn build

# Stage 2: Runtime
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 3000

CMD ["sh", "-c", "nginx -g 'daemon off;' && ./run.sh"]
