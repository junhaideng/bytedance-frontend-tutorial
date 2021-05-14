FROM node

COPY . /frontend
WORKDIR /frontend
RUN npm set register "https://registry.npm.taobao.org/" &&  npm install && npm run build

CMD ["npm", "start"]

EXPOSE 3000
