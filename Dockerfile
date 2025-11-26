FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY build ./build
EXPOSE 8080
ENV PORT=8080
CMD ["serve", "-s", "build", "-l", "8080"]
