FROM --platform=linux/amd64 node:16

RUN apt-get update && apt-get install -y python3 make g++
RUN npm install -g npm@9.6.7
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY decorate-angular-cli.js ./
# Install the project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular application
RUN npm run build -- --prod

# Expose the port your Angular app listens on (default is 4200)
EXPOSE 4200

# Start the Angular application when the container starts
CMD ["npm", "start"]
