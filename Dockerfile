FROM node:18-alpine

WORKDIR /app

# HEALTHCHECK --interval=5s --timeout=10s --start-period=5s --retries=1 CMD wget -q -O - http://localhost:8080/
# EXPOSE 8080

ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
RUN rm -rf src

USER node
ENTRYPOINT [ "npm", "start" ]
