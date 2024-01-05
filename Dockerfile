FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=builder /app/dist/d2-f /usr/share/nginx/html