FROM node:9
RUN mkdir -p /src
ADD package.json /src/package.json
#RUN mkdir -p /src
RUN cd /src && npm i
#RUN mkdir -p /src && mv /tmp/node_modules /src/

WORKDIR /src
ADD . /src

#RUN npm run build
#RUN webpack

EXPOSE 8080
CMD ["node", "/src/server.js"]


