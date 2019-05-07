FROM node:8.0

RUN mkdir -p /proxy
WORKDIR /proxy
COPY . /proxy

RUN npm install

EXPOSE 3000

CMD ["node", "server/index.js"]
