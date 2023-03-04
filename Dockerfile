FROM node:19-alpine
WORKDIR /app
ADD package.json /app/package.json
# COPY tsconfig.json ./
RUN npm config set registry http://registry.npmjs.org
RUN npm install
EXPOSE 8089

CMD ["npm","run","start"]