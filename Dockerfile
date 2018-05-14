FROM node:9
RUN npm i
RUN npm i -g webpack webpack-cli
RUN webpack
EXPOSE 8080
CMD ["node", "server.js"]