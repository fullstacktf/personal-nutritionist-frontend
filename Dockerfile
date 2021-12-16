FROM node:14.18.1 as build
WORKDIR /app
COPY . . 
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
