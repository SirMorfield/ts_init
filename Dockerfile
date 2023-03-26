FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
RUN rm -rf src

EXPOSE 8080
CMD [ "node", "build/app.js" ]
