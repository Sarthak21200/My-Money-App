
# Use an official Node runtime as a parent image
FROM node:20.12.0-alpine3.19

# Set the working directory for the app
WORKDIR /apps/bank_webhook_handler

# Copy package.json and tsconfig.json first for caching purposes
COPY package.json tsconfig.json ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# # Install esbuild globally
RUN npm install -g esbuild

# Install Prisma globally
RUN npm install -g prisma


# Can you add a script to the global package.json that does this?
RUN npm run db:generate


# Build the application
RUN cd apps/bank-webhook && \
    esbuild ./src/index.ts --bundle --platform=node --outfile=dist/index.js


# Expose the port the app runs on
EXPOSE 3003


# start the application
CMD ["sh", "-c", "cd apps/bank-webhook && npm run start"]

