FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Force cache bust
ENV CACHE_BUST=2025-11-27-09-00

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

EXPOSE 8080
ENV PORT=8080

CMD ["serve", "-s", "build", "-l", "8080"]
