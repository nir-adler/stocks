FROM node:16.13.2
WORKDIR /app
COPY ./package.json .
RUN npm install
RUN chmod 777 node_modules
CMD ["npm","run","dev"]
