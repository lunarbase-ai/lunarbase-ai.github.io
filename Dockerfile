# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files to install dependencies
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port Docusaurus serves on (default: 3000)
EXPOSE 3000

# Command to start the local development server
CMD ["sh", "-c", "exec yarn start-in-docker"]
