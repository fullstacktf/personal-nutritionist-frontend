FROM node:14.17.6 as build
WORKDIR /app
COPY . . 
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]

# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY ./config/nutriguide.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
