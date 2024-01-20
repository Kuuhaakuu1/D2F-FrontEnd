# Use Node.js LTS as the builder image
FROM node:20.10.0 as builder

WORKDIR /app



# Copy only the package files to leverage Docker caching during development
COPY package*.json ./


# Install dependencies
RUN npm ci


# Copy the rest of the application files
COPY . .

# Expose the development server port
EXPOSE 4200

# Start the development server
CMD ["npm", "start"]
