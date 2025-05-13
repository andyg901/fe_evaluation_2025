FROM node:21-alpine
 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run test-unit-cli
 
# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["npm", "start"]