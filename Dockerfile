FROM node:16-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json ./
RUN npm install --no-package-lock
# RUN npm install --save express adm-zip fs path express-fileupload http joi ejs cors
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
