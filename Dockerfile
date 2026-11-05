FROM node:22-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Expose Vite development server port
EXPOSE 5173

# Start React application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]